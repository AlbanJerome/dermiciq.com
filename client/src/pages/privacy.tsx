import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { cn } from "@/lib/utils";

const LAST_UPDATED = "April 2026";

const linkClass = "font-medium text-primary underline-offset-2 hover:underline";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | DermicIQ™"
        description="How DermicIQ Technologies Inc. collects, uses, and protects personal information for dermiciq.com and the DermicIQ app."
        path="/privacy"
      />

      <header
        className={cn(
          "border-b border-border/60",
          "bg-gradient-to-b from-secondary/50 via-background to-background",
          "pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16"
        )}
      >
        <div className="container-content max-w-3xl">
          <h1
            className="text-balance text-foreground text-section mb-3 lg:text-section-lg"
            data-testid="text-privacy-headline"
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Effective Date: {LAST_UPDATED}</p>
        </div>
      </header>

      <div className="bg-background py-12 sm:py-16 lg:py-20">
        <article className="container-content max-w-3xl space-y-12 sm:space-y-14">
          <section className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              DermicIQ Technologies Inc. (&quot;DermicIQ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy and is committed to protecting your personal information. This Privacy Policy
              explains how we collect, use, share, and safeguard your information when you use our website (
              <a
                className={linkClass}
                href="https://dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dermiciq.com
              </a>
              ), mobile application (
              <a
                className={linkClass}
                href="https://app.dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://app.dermiciq.com
              </a>
              ), and related services (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using our Services, you agree to the practices described in this Privacy Policy. If you
              do not agree, please do not use the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              DermicIQ is an AI-powered platform that provides personalized skincare analysis and recommendations. We
              help you understand your skin, track changes over time, and receive tailored product suggestions based on
              your unique profile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are a company incorporated in Ontario, Canada, and we operate in accordance with applicable Canadian
              privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information that you provide directly and information that is automatically collected when you
              use our Services.
            </p>
            <p className="text-foreground font-medium">Information You Provide:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Account information: name, email address, and password</li>
              <li>Skin profile: skin type, skin concerns, sensitivities/allergies, and current skincare routine</li>
              <li>Product feedback: ratings, reviews, and notes about products you have used</li>
              <li>Communications: messages you send to our support team</li>
            </ul>
            <p className="text-foreground font-medium">Automatically Collected Information:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Usage data: how you interact with the app or website, features used, time spent, and actions taken</li>
              <li>Device and technical data: IP address, device type, operating system, browser type, and app version</li>
              <li>Analytics data: anonymous or aggregated information about user trends and app performance</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not collect sensitive health data beyond what you voluntarily share for skincare personalization
              purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to provide, improve, and personalize our Services:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Create and maintain your account and long-term skin profile</li>
              <li>Deliver personalized skincare analysis and recommendations using AI</li>
              <li>Track your skin progress over time and suggest adjustments to your routine</li>
              <li>Improve our AI models and overall service quality</li>
              <li>Communicate with you about your account, updates, and important notices</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Conduct internal research, analytics, and product development</li>
              <li>Protect the security and integrity of our Services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not use your personal information for marketing or advertising purposes, and we never sell your
              data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are transparent about sharing and only do so in limited circumstances:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Service Providers: </span>
              We may share information with trusted third-party service providers who help us operate the Services
              (e.g., cloud hosting, analytics, email delivery, and AI processing partners). All such providers are bound
              by strict contractual obligations to protect your data and use it only for the purposes we specify.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Legal Requirements: </span>
              We may disclose information if required by law, regulation, or legal process (such as a court order or
              subpoena), or to protect our rights, safety, or property.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Business Transfers: </span>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
              that transaction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do <span className="text-foreground font-medium">not</span> sell, rent, or share your personal
              information with third parties for their own marketing or advertising purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored on secure servers, primarily in Canada or other jurisdictions with adequate
              safeguards. We retain your skin profile and account information for as long as your account remains
              active, or as needed to provide the Services and comply with legal obligations. You may request deletion
              of your data at any time (see &quot;Your Rights&quot; below).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal
              information. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have control over your personal information. Depending on your location and applicable law, you may
              have the following rights:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">Access: </span>
                Request a copy of the personal information we hold about you
              </li>
              <li>
                <span className="text-foreground font-medium">Correction: </span>
                Ask us to update or correct inaccurate information
              </li>
              <li>
                <span className="text-foreground font-medium">Deletion: </span>
                Request deletion of your account and personal data (subject to certain exceptions)
              </li>
              <li>
                <span className="text-foreground font-medium">Objection/Restriction: </span>
                Object to or request limits on certain processing activities
              </li>
              <li>
                <span className="text-foreground font-medium">Data Portability: </span>
                Receive your data in a structured, commonly used format (where technically feasible)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, email us at{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
              . We will respond within 30 days (or as required by law). We may need to verify your identity before
              fulfilling a request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies, pixels, and similar technologies to operate the Services, understand usage patterns, and
              improve your experience. For detailed information about the cookies we use and your choices, please see
              our separate{" "}
              <Link className={linkClass} href="/cookies">
                Cookie Policy
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can manage cookie preferences through your browser or device settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Services are not directed to children under the age of 16. We do not knowingly collect personal
              information from children under 16. If we become aware that we have collected such information, we will
              take steps to delete it promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since we are based in Canada, your information may be processed in Canada or other countries where our
              service providers operate. These countries may have different data protection laws than your
              jurisdiction. When we transfer data internationally, we use appropriate safeguards, such as contractual
              protections, to maintain the security of your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
              laws. We will notify you of material changes by posting the updated policy on our website and app, and
              updating the effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
              <br />
              Email:{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to addressing your concerns promptly and transparently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for trusting DermicIQ with your skincare journey. Your privacy is important to us.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}
