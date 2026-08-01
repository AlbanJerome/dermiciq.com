import { Link } from "wouter";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

const LAST_UPDATED = "April 27, 2026";

const linkClass = "font-medium text-primary underline-offset-2 hover:underline";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | DermicIQ™"
        description="Terms of Service for DermicIQ Technologies Inc. website, app, and related services."
        path="/terms"
      />

      <ContentPageHeader title="Terms of Service" titleTestId="text-terms-headline">
        <p className="text-sm text-muted-foreground">Effective Date: {LAST_UPDATED}</p>
      </ContentPageHeader>

      <ContentPageBody>
          <section className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to DermicIQ! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
              DermicIQ website (
              <a
                className={linkClass}
                href="https://dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dermiciq.com
              </a>
              ), mobile or web application, and any related services (collectively, the &quot;Service&quot;) provided by{" "}
              <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span> (&quot;DermicIQ,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated in Ontario, Canada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do
              not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Introduction &amp; Acceptance</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms form a legally binding agreement between you and DermicIQ. We may update these Terms from
              time to time (see Section 13). Continued use of the Service after changes constitutes your acceptance of
              the updated Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service. By
              using the Service, you represent that you meet this age requirement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. Our Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              DermicIQ is an AI-powered skincare analysis tool designed to help you understand your skin better and
              make more informed skincare choices. The Service allows you to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Create and maintain a personalized skin profile</li>
              <li>Receive AI-generated insights, product recommendations, and routine suggestions</li>
              <li>Track your skincare routine, product ratings, and skin concerns</li>
              <li>Share and view community reviews (where applicable)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The Service is provided &quot;as is&quot; and is intended for personal, non-commercial wellness and
              informational purposes only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. User Accounts and Profiles</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access core features of the Service, you must create an account. You agree to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for all activities that occur under your account. We reserve the right to suspend or
              terminate accounts that violate these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your skin profile (including skin type, skin conditions, concerns, sensitivities, routine, and product
              feedback) is stored to provide ongoing personalization and improve our AI models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              &quot;User Content&quot; means any information, data, reviews, ratings, photos, or other materials you
              upload, submit, or generate while using the Service (e.g., skin photos, product reviews, routine details,
              concerns, and sensitivities).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By submitting User Content, you grant DermicIQ a worldwide, non-exclusive, royalty-free, sublicensable,
              and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works
              from, distribute, and display such content solely for the purposes of operating, improving, and providing
              the Service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of your User Content. You represent and warrant that you have all necessary rights
              to submit your User Content and that it does not infringe any third-party rights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not claim ownership of your personal skin data, but we may use aggregated and de-identified data to
              improve our models and the Service for everyone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Use the Service for any illegal, harmful, or unauthorized purpose</li>
              <li>
                Upload content that is false, misleading, defamatory, obscene, or infringes intellectual property rights
              </li>
              <li>Attempt to reverse-engineer, decompile, or otherwise interfere with the Service or its AI models</li>
              <li>Use automated tools (bots, scrapers, etc.) to access the Service without permission</li>
              <li>Share your account credentials or impersonate others</li>
              <li>Collect or harvest data from other users without consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We may remove or refuse any User Content that violates these rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service, including its design, software, AI models, text, graphics, logos, and other content
              (excluding your User Content), is owned by DermicIQ or its licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are granted a limited, personal, non-exclusive, non-transferable, revocable license to use the
              Service for your personal use. You may not copy, modify, distribute, or create derivative works without
              our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Our{" "}
              <Link className={linkClass} href="/privacy">
                Privacy Policy
              </Link>{" "}
              explains how we collect, use, disclose, and protect your personal information, including the skin profile
              data you provide. By using the Service, you consent to our data practices as described in the Privacy
              Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">We do not sell your personal data to third parties.</span>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We store your data securely and use industry-standard measures to protect it. However, no system is
              completely secure. We cannot guarantee absolute security, and you use the Service at your own risk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skin profiles are stored long-term to enable continuous personalization and better recommendations. You
              may request deletion of your data at any time (subject to legal obligations).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may stop using the Service and delete your account at any time through your account settings or by
              contacting us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your access to the Service at our discretion if you violate these Terms,
              engage in harmful conduct, or for any other reason. Upon termination, your right to use the Service ends,
              but Sections 4, 6, 10, 11, and 12 survive.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. Disclaimers &amp; No Medical Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">IMPORTANT: DERMICIQ IS NOT A MEDICAL SERVICE.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Service provides general wellness information and AI-generated insights based on the data you
              provide. It is{" "}
              <span className="text-foreground font-medium">
                not a substitute for professional medical advice, diagnosis, or treatment
              </span>{" "}
              from a qualified dermatologist or healthcare provider.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Do not use the Service to diagnose skin conditions or replace clinical care.</li>
              <li>AI recommendations are probabilistic and may not be suitable for everyone.</li>
              <li>Results vary based on individual biology, environment, and other factors.</li>
              <li>
                Always consult a licensed healthcare professional before making significant changes to your skincare
                routine, especially if you have existing medical conditions, allergies, or are pregnant.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We disclaim all warranties, express or implied, including accuracy, reliability, or fitness for any
              particular purpose. The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, DermicIQ and its affiliates, directors, employees, and agents
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including
              loss of data, profits, or skin health outcomes) arising out of or related to your use of the Service, even
              if advised of the possibility of such damages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability to you shall not exceed the greater of CAD $100 or the amounts you paid to us (if any)
              in the twelve months preceding the claim.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These limitations apply even if a remedy fails its essential purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable
              therein, without regard to conflict of laws principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall be resolved exclusively in the
              courts located in Ontario, Canada. You agree to submit to the personal jurisdiction of such courts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms periodically to reflect changes in our Service or legal requirements. We will
              notify you of material changes by posting the new Terms on our website and updating the Effective Date.
              Your continued use of the Service after the changes take effect constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
              <br />
              Email:{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
              <br />
              Website:{" "}
              <a
                className={linkClass}
                href="https://dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dermiciq.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              Thank you for trusting DermicIQ with your skincare journey. We are committed to transparency, data
              responsibility, and helping you achieve healthier skin.
            </p>
          </section>
      </ContentPageBody>
    </Layout>
  );
}
