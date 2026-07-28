import type { ContactPayload } from "./types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildTextBody(payload: ContactPayload, remoteIp: string | null): string {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? "(not provided)"}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
    "",
    `IP: ${remoteIp ?? "unknown"}`,
  ];
  return lines.join("\n");
}

function buildHtmlBody(payload: ContactPayload, remoteIp: string | null): string {
  return `
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone ?? "(not provided)")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br>")}</p>
    <hr>
    <p><small>IP: ${escapeHtml(remoteIp ?? "unknown")}</small></p>
  `.trim();
}

/**
 * Sends the contact form email via Resend.
 * Requires CONTACT_FROM domain to be verified in Resend.
 */
export async function sendContactEmail(options: {
  apiKey: string;
  from: string;
  to: string;
  payload: ContactPayload;
  remoteIp: string | null;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const subject = `[DermicIQ Contact] ${options.payload.subject}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: options.from,
        to: [options.to],
        reply_to: options.payload.email,
        subject,
        text: buildTextBody(options.payload, options.remoteIp),
        html: buildHtmlBody(options.payload, options.remoteIp),
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("resend_error", {
        status: response.status,
        detail: detail.slice(0, 500),
      });
      return { ok: false, error: "Failed to send message" };
    }

    return { ok: true };
  } catch (error) {
    console.error("resend_exception", {
      message: error instanceof Error ? error.message : "unknown",
    });
    return { ok: false, error: "Failed to send message" };
  }
}
