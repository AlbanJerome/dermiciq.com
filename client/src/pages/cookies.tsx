import { Link } from "wouter";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

const LAST_UPDATED = "April 27, 2026";

const linkClass = "font-medium text-primary underline-offset-2 hover:underline";

export default function Cookies() {
  return (
    <Layout>
      <SEO
        title="Cookie Policy | DermicIQ"
        description="How DermicIQ Technologies Inc. uses cookies and similar technologies on dermiciq.com and the DermicIQ app."
        path="/cookies"
      />

      <ContentPageHeader title="Cookie Policy" titleTestId="text-cookies-headline">
        <p className="text-sm text-muted-foreground">Effective Date: {LAST_UPDATED}</p>
      </ContentPageHeader>

      <ContentPageBody>
          <section className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span> (&quot;DermicIQ&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At DermicIQ, we care about your privacy and want you to feel confident using our website and app. This
              Cookie Policy explains how we use cookies and similar tracking technologies on{" "}
              <a
                className={linkClass}
                href="https://dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dermiciq.com
              </a>{" "}
              and{" "}
              <a
                className={linkClass}
                href="https://app.dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://app.dermiciq.com
              </a>{" "}
              (together, the &quot;Platform&quot;).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to make your experience smoother, remember your skin profile and preferences, and help us
              improve our services. We are committed to being transparent about what we collect and why.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy describes the types of cookies and similar technologies we use, the purposes they
              serve, and how you can manage them. It applies to all visitors and users of our Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time—please check back periodically. By continuing to use our
              Platform, you consent to our use of cookies as described here, unless you adjust your preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
              a website. They help websites remember information about your visit, such as your preferences and
              settings.
            </p>
            <p className="text-muted-foreground leading-relaxed">We also use similar technologies like:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">Local Storage</span> and{" "}
                <span className="text-foreground font-medium">Session Storage</span> (for storing data directly in
                your browser)
              </li>
              <li>
                <span className="text-foreground font-medium">Pixels</span> and{" "}
                <span className="text-foreground font-medium">Web Beacons</span> (tiny graphics used for analytics)
              </li>
              <li>
                <span className="text-foreground font-medium">SDKs</span> in our mobile/web app
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These tools help us deliver a personalized skincare experience tailored to your skin type, concerns, and
              routine.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. Cookies We Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              We categorize the cookies and technologies we use as follows:
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These are necessary for the Platform to function properly and cannot be disabled.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                <li>Authentication and login sessions</li>
                <li>Security features (fraud prevention, account protection)</li>
                <li>Basic navigation and page loading</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Without these, parts of the site or app (like logging into your account) would not work.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Functional Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These remember your choices to provide a better, personalized experience.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                <li>Remembering your skin profile, concerns, and sensitivities</li>
                <li>Saving your product routine and preferences</li>
                <li>Language or region settings (if applicable)</li>
                <li>Display preferences (e.g., dark mode)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These help us understand how people use DermicIQ so we can improve it.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                <li>Which pages and features are most popular</li>
                <li>How users interact with skin quizzes and recommendations</li>
                <li>Overall usage trends and performance metrics</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We use this data in aggregate form and do not sell it.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Personalization Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These enable tailored recommendations based on your profile.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                <li>Suggested products for your skin type and concerns</li>
                <li>Progress tracking in your skincare journey</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information from cookies and similar technologies to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                Provide and improve our core services (personalized skincare advice, routines, and product
                recommendations)
              </li>
              <li>Maintain your long-term profile so you don’t have to re-enter your skin information</li>
              <li>Analyze usage to make the Platform more intuitive and effective</li>
              <li>Ensure security and prevent unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do <span className="text-foreground font-medium">not</span> sell your personal data to third parties.
              Any data collected is used solely to enhance your experience with DermicIQ.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may work with trusted third-party service providers in the future for:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Analytics (e.g., Google Analytics or similar privacy-friendly tools)</li>
              <li>Hosting and content delivery</li>
              <li>Payment processing (if applicable)</li>
              <li>Customer support chat</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These third parties may place cookies on your device. We carefully select partners who maintain strong
              privacy standards and only share the minimum data necessary.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We will always list current third-party partners in our{" "}
              <Link className={linkClass} href="/privacy">
                Privacy Policy
              </Link>{" "}
              and update this Cookie Policy as needed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed">You have control over cookies:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">On first visit: </span>
                You will see a clear cookie consent banner where you can accept or customize your choices.
              </li>
              <li>
                <span className="text-foreground font-medium">Browser settings: </span>
                Most browsers let you block or delete cookies. Note that blocking essential cookies may affect
                functionality.
              </li>
              <li>
                <span className="text-foreground font-medium">Your Account: </span>
                Logged-in users can manage certain preferences directly in app settings.
              </li>
              <li>
                <span className="text-foreground font-medium">Opt-out tools: </span>
                For some analytics providers, industry opt-out tools are available (e.g., Your Online Choice).
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Disabling cookies may limit your ability to use certain personalized features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Cookie Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you first visit our website, we ask for your consent to non-essential cookies via a clear,
              easy-to-use banner. You can change your mind at any time by clicking the &quot;Cookie Settings&quot; link
              (usually in the footer) or by contacting us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your consent is specific to DermicIQ and applies to the current version of this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Changes to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy to reflect changes in our practices, technology, or applicable laws.
              When we make material changes, we will post the updated policy with a new effective date and notify you
              via email (if you have an account) or an in-app notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Cookie Policy or our use of cookies, please reach out:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
              <br />
              Ontario, Canada
              <br />
              Email:{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We’re here to help and happy to explain anything in more detail.
            </p>
          </section>
      </ContentPageBody>
    </Layout>
  );
}
