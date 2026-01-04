import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdlqdow";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Set up Replit Auth (MUST be before other routes)
  await setupAuth(app);
  registerAuthRoutes(app);

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form proxy endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, inquiryType } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "Name, email, and message are required fields",
        });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address",
        });
      }

      // Forward to Formspree
      const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company: company || "Not provided",
          message,
          inquiryType: inquiryType || "General",
          _subject: `Dermiciq Contact: ${inquiryType || "General Inquiry"}`,
        }),
      });

      if (!formspreeResponse.ok) {
        const errorData = await formspreeResponse.text();
        console.error("Formspree error:", errorData);
        return res.status(500).json({
          success: false,
          message: "Failed to submit form. Please try again later.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Thank you for your message. We'll be in touch soon!",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  });

  return httpServer;
}
