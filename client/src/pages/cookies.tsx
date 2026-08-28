import { Link } from "wouter";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

const LAST_UPDATED = "August 2026";

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
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). At DermicIQ, we care about your privacy and want you
            to feel confident using our website and app. This Cookie Policy explains how we use cookies and similar
            tracking technologies on{" "}
            <a className={linkClass} href="https://dermiciq.com" target="_blank" rel="noopener noreferrer">
              https://dermiciq.com
            </a>{" "}
            and{" "}
            <a className={linkClass} href="https://app.dermiciq.com" target="_blank" rel="noopener noreferrer">
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
            This Cookie Policy describes the types of cookies and similar technologies we use, the purposes they serve,
            and how you can manage them. It applies to all visitors and users of our Platform and forms part of our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your consent to our use of non-essential cookies is obtained separately from your acceptance of our Terms
            of Service and requires affirmative, explicit action on your part through our cookie consent banner.
            Acceptance of our Terms of Service does not constitute consent to our use of non-essential cookies. You are
            not required to accept non-essential cookies to access the general content of our Platform, though certain
            features may be unavailable if you refuse them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may withdraw your consent to non-essential cookies at any time by adjusting your preferences through
            our cookie preference centre, updating your browser settings, or contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            . Withdrawal of consent is as easy as giving it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws.
            We will notify you of material changes by posting the updated policy on our website and updating the
            effective date. For material changes, we will obtain your affirmative re-consent where required by law. If
            you do not agree to the revised Cookie Policy, you may adjust your preferences or stop using the Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, you have the right to refuse the use of cookies for non-essential
            purposes, with no non-essential tracking technologies activating without your explicit prior consent, and you
            have the right to withdraw your consent as easily as you gave it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. What Are Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
            website. They help websites remember information about your visit, such as your preferences, login status,
            and settings.
          </p>
          <p className="text-muted-foreground leading-relaxed">We also use similar technologies like:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground font-medium">Local Storage and Session Storage: </span>
              These store data directly in your browser to remember your preferences, skin profile, and session
              information without relying on cookies.
            </li>
            <li>
              <span className="text-foreground font-medium">Pixels and Web Beacons: </span>
              These are tiny graphics embedded in our Platform or emails that help us understand how you interact with
              our content and measure the effectiveness of our communications.
            </li>
            <li>
              <span className="text-foreground font-medium">Software Development Kits (SDKs): </span>
              In our mobile/web app, we use SDKs to collect analytics, understand app performance, and personalize
              your skincare experience.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            These tools help us deliver a personalized skincare experience tailored to your skin type, concerns, and
            routine. They enable us to remember your preferences and provide you with relevant recommendations.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Cookies vs. Similar Technologies</h3>
            <p className="text-muted-foreground leading-relaxed">
              For the purposes of this Cookie Policy, references to &quot;cookies&quot; include all of the technologies
              described above, unless we specify otherwise. The consent and control mechanisms described in this policy
              apply equally to these similar technologies.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">First-Party vs. Third-Party Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">First-Party Cookies: </span>
              These are set by DermicIQ directly when you visit our Platform. They allow us to remember your
              preferences, login status, and other information to personalize your experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Third-Party Cookies: </span>
              These are set by our service providers and partners (such as analytics and marketing platforms) to
              collect information about your interactions with our Platform and other websites. These third parties are
              contractually obligated to use your data only for the specific services they provide to us.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. Cookies We Use</h2>
          <p className="text-muted-foreground leading-relaxed">
            We categorize the cookies and technologies we use as follows:
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These are strictly necessary for the Platform to function properly and cannot be disabled.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Authentication and login sessions</li>
              <li>Security features (fraud prevention, account protection)</li>
              <li>Basic navigation and page loading</li>
              <li>Load balancing and performance optimization</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Without these cookies, parts of the site or app (like logging into your account) would not work. We do
              not require your consent for essential cookies, as the Platform cannot operate without them.
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
              <li>Display preferences (e.g., dark mode, font size)</li>
              <li>Session persistence to maintain your login state</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are non-essential and require your explicit consent before they are placed on your device.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Analytics and Performance Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These help us understand how people use DermicIQ so we can improve it.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Which pages and features are most popular</li>
              <li>How users interact with skin quizzes and recommendations</li>
              <li>Overall usage trends and performance metrics</li>
              <li>Load times and error reporting</li>
              <li>Referral sources and traffic patterns</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We use this data in aggregate form and do not use it to identify you individually. We do not sell this
              data. These cookies are non-essential and require your explicit consent.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Personalization Cookies (No Third-Party Advertising)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This category includes cookies and SDKs used to personalize your experience (e.g., product
              recommendations, routine tracking). We do not use these for third-party advertising, retargeting, or ad
              networks. No data is shared with ad exchanges or demand-side platforms.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Suggested products for your skin type and concerns</li>
              <li>Progress tracking in your skincare journey</li>
              <li>Personalized insights and routine adjustments</li>
              <li>Measuring the effectiveness of our marketing campaigns</li>
              <li>Delivering content or offers that may be of interest to you</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are non-essential and require your explicit consent.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Full Cookie Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[48rem] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Category / Identifier
                    </th>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Provider
                    </th>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Category
                    </th>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Purpose
                    </th>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Type / Storage Method
                    </th>
                    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                      Expiry / Lifespan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={6} className="border border-border px-3 py-2 font-semibold text-foreground pt-4">
                      Authentication &amp; Core Session
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      sb-[project-ref]-auth-token (and .0, .1 chunks)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      DermicIQ (Supabase Auth)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Signed-in user session (JWT &amp; refresh token)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / Native Keychain (iOS) &amp; EncryptedSharedPreferences (Android)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Session / Refresh Window
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      dermiciq_mfa_trust
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">DermicIQ</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Essential / Security
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Skip consumer MFA on trusted devices
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / App Local Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      dermiciq_staff_mfa_trust
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">DermicIQ</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Essential / Security
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Skip staff AAL2 MFA on trusted devices
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / App Local Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">1 day</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      dermiciq_staff_preview_mode
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">DermicIQ</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Functional</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Staff &quot;preview as public user&quot; feature flags
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / App Local Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      dermiciq_staff_preview_public
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">DermicIQ</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Functional</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Legacy preview flag (legacy support)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / App Local Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">7 days</td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="border border-border px-3 py-2 font-semibold text-foreground pt-4">
                      Mobile App &amp; Push Notifications
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      FCM / APNs Token
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Firebase Cloud Messaging / Apple Push Notification Service
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Functional / Essential
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Delivers real-time push notifications to mobile devices
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Mobile Device Identifier / SDK
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Persistent until app uninstall or token refresh
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Expo / React Native Secure Store (if applicable)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      DermicIQ Mobile
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Stores encrypted local device session keys
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Native Device Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Session / User Logout
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="border border-border px-3 py-2 font-semibold text-foreground pt-4">
                      Security &amp; Infrastructure
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">__cf_bm</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Cloudflare</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Bot management, rate limiting, and WAF protection
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / In-App WebView
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">30 minutes</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">cf_clearance</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Cloudflare</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Remembers passed CAPTCHA / bot challenge clearance
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / In-App WebView
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">1 year</td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="border border-border px-3 py-2 font-semibold text-foreground pt-4">
                      Third-Party Auth &amp; Payments
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      GAPS, __Host-GAPS
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Google Identity
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Google OAuth2 (&quot;Continue with Google&quot;) session state
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Third-Party Web Cookie / In-App Browser
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Apple ID Auth Token
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Apple Sign-In</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Authenticates iOS app sign-in (&quot;Sign in with Apple&quot;)
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Mobile SDK / Native Auth Token
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">__stripe_mid</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Stripe</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Fraud detection and merchant transaction security
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Third-Party Web Cookie / Mobile SDK Token
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">__stripe_sid</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Stripe</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Essential</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Live session tracking during mobile and web checkouts
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Third-Party Web Cookie / Mobile SDK Token
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">30 minutes</td>
                  </tr>
                  <tr>
                    <td colSpan={6} className="border border-border px-3 py-2 font-semibold text-foreground pt-4">
                      Analytics &amp; Crash Reporting
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      _ga, _ga_[CONTAINER-ID]
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Google Analytics / Firebase Analytics
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Analytics</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Distinguishes unique users and app session events
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / Mobile SDK Device ID
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      sentry-sc / sentry_id
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Sentry</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Analytics</td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Mobile app crash logging, performance, and stack traces
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                      Web Cookie / Mobile SDK Storage
                    </td>
                    <td className="border border-border px-3 py-2 align-top text-muted-foreground">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This table was last updated on August 25, 2026. We review and update it quarterly to reflect any changes
              in our technology stack.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. How We Use Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information from cookies and similar technologies to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              Provide and improve our core services, including personalized skincare advice, routines, and product
              recommendations;
            </li>
            <li>
              Maintain your long-term profile so you don&apos;t have to re-enter your skin information each time you
              visit;
            </li>
            <li>Analyze usage to make the Platform more intuitive, effective, and user-friendly;</li>
            <li>Ensure security and prevent unauthorized access to your account;</li>
            <li>Remember your preferences, including language settings and display choices;</li>
            <li>Comply with legal obligations and enforce our agreements; and</li>
            <li>Monitor the performance and reliability of our Platform.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal data to third parties. Any data collected through cookies and similar
            technologies is used solely to enhance your experience with DermicIQ and to operate the Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not use cookies to create user profiles for purposes unrelated to providing and improving the
            Services. We do not use cookies for targeted advertising outside of our Platform. Any analytics data we
            collect is aggregated and de-identified, and we do not use it to identify you individually.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The information collected through cookies and similar technologies is processed in accordance with our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
            . If we wish to use cookie data for a purpose not described in this Cookie Policy, we will obtain your
            prior explicit consent before doing so.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Third-Party Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We work with trusted third-party service providers who help us operate and improve our Platform. These
            providers may place cookies or similar tracking technologies on your device when you interact with our
            Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These third-party providers use technologies to manage single sign-on authentication, process secure
            payments, block automated bots, deliver push notifications, and monitor app stability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Detailed Inventory: </span>
            For a full, itemized breakdown of each third-party cookie, its provider, duration, and exact purpose,
            please refer to our Master Cookie &amp; Tracking Technologies Table in Section 3 above.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Third-Party Data Standards: </span>
            We carefully select partners who maintain strong privacy standards and contractual obligations to protect
            your data. All third-party providers are bound by strict agreements that require them to process data only
            on our behalf. All third-party providers are bound by strict agreements that require them to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Use your data only for the specific purposes we direct;</li>
            <li>Maintain security safeguards equivalent to our own standards;</li>
            <li>Not sell or share your data for their own marketing or advertising purposes; and</li>
            <li>Delete or return your data upon termination of our agreement.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We share only the minimum data necessary for these providers to perform their services. We do not permit
            third-party providers to use your data to train their own models or for any purpose unrelated to providing
            the Services to you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mobile app uses the same third-party providers listed in the table above (e.g., Google Identity, Stripe,
            Sentry, Cloudflare). No additional mobile-specific tracking SDKs are used.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Third-Party Cookie Categories Under Québec Law 25
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are a resident of Québec, you have the right to consent to the transmission of your information to
              specific third parties. Our cookie consent banner allows you to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Accept or refuse third-party cookies by category (Essential, Analytics, Functional, Personalization);</li>
              <li>View the specific third-party providers in each category; and</li>
              <li>Change your preferences at any time.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Changes to Third-Party Providers</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may add or remove third-party providers as our Services evolve. We will update this Cookie Policy and
              our cookie consent banner accordingly. Material changes to our third-party cookie practices will be
              communicated to you through our standard notification processes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Managing Third-Party Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can manage your preferences for third-party cookies through:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Our cookie preference centre (available at any time in your account settings);</li>
              <li>Your browser settings (which may allow you to block third-party cookies globally); and</li>
              <li>
                <span className="text-foreground font-medium">Do Not Track (DNT). </span>
                Our Platform does not currently respond to browser-based Do Not Track signals, as there is no universal
                standard for DNT. However, you can control tracking through the consent mechanisms described above.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Contact us at{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>{" "}
              for assistance.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal data to third parties. Any data collected by third-party providers is used
            solely to enhance your experience with DermicIQ and to operate the Platform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Third-Party Data Sources. </span>
            We use product information and images from third-party databases, including Open Beauty Facts and The Beauty
            API, to enrich our product catalog. These data sources are accessed via our servers and do not set cookies
            or tracking technologies on your device. Our use of these data sources is governed by our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>{" "}
            and does not involve any transfer of your personal information to these third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Managing Your Cookie Preferences</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have control over cookies and similar tracking technologies and can manage your preferences at any time
            through the following methods:
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">On First Visit (Website)</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you first access our website, you will see a clear cookie consent banner where you can:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Accept all cookies;</li>
              <li>Reject all non-essential cookies; or</li>
              <li>Customize your preferences by cookie category (Essential, Functional, Analytics, Personalization).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              No non-essential cookies will be placed on your device until you make an affirmative choice. Your
              preferences are stored and respected on subsequent visits.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">On First Launch (Mobile App)</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you first launch our mobile application, you will see a clear in-app consent dialog where you can:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                Accept or reject non-essential tracking technologies (including SDKs and advertising identifiers);
              </li>
              <li>Customize your preferences by category; and</li>
              <li>
                Review this Cookie Policy and our{" "}
                <Link className={linkClass} href="/privacy">
                  Privacy Policy
                </Link>{" "}
                before making a choice.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              No non-essential tracking technologies will activate until you make an affirmative choice. Your
              preferences are stored and respected on subsequent app launches.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Through Your Account</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are a logged-in user, you can manage your tracking preferences directly through your account
              settings at any time. You can:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>View the categories of tracking technologies we use;</li>
              <li>Adjust your consent preferences for each category; and</li>
              <li>Withdraw your consent to non-essential tracking as easily as you gave it.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Through Your Browser (Website)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most browsers allow you to block or delete cookies through their settings. You can usually find these
              controls in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. Links to instructions
              for managing cookies in common browsers are provided below:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">Google Chrome: </span>
                Open the menu (three dots) -&gt; Settings -&gt; Privacy and security -&gt; Third-party cookies or Delete
                browsing data.
              </li>
              <li>
                <span className="text-foreground font-medium">Mozilla Firefox: </span>
                Click the menu button -&gt; Settings -&gt; Privacy &amp; Security -&gt; Cookies and Site Data.
              </li>
              <li>
                <span className="text-foreground font-medium">Apple Safari: </span>
                Open the Safari menu -&gt; Preferences / Settings -&gt; Privacy tab -&gt; Toggle your preference next to
                &quot;Block all cookies&quot;.
              </li>
              <li>
                <span className="text-foreground font-medium">Microsoft Edge: </span>
                Go to Settings and more -&gt; Settings -&gt; Privacy, search, and services -&gt; Clear browsing data.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Through Your Device Settings (Mobile App)</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">iOS Users: </span>
                You may manage your advertising identifier (IDFA) settings by going to Settings &gt; Privacy &amp;
                Security &gt; Tracking on your iOS device. You may also reset or limit ad tracking through Settings
                &gt; Privacy &amp; Security &gt; Apple Advertising.
              </li>
              <li>
                <span className="text-foreground font-medium">Android Users: </span>
                You may manage your advertising identifier (GAID) settings by going to Settings &gt; Google &gt; Ads on
                your Android device. You may reset your identifier or opt out of personalized ads at any time.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Please note that disabling or resetting your advertising identifier through your device settings does not
              constitute withdrawal of consent to our tracking practices. To withdraw consent to our use of tracking
              technologies, you must adjust your preferences through our in-app consent dialog or account settings.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Industry Opt-Out Tools</h3>
            <p className="text-muted-foreground leading-relaxed">
              For some analytics providers, industry opt-out tools are available, including:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                Your Online Choices (
                <a
                  className={linkClass}
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.youronlinechoices.com
                </a>
                )
              </li>
              <li>
                Network Advertising Initiative (
                <a
                  className={linkClass}
                  href="https://www.networkadvertising.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.networkadvertising.org
                </a>
                )
              </li>
              <li>
                Digital Advertising Alliance (
                <a className={linkClass} href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
                  www.aboutads.info
                </a>
                )
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Apple App Tracking Transparency (ATT)</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are an iOS user, we will seek your explicit permission through Apple&apos;s App Tracking
              Transparency prompt before accessing your device&apos;s advertising identifier (IDFA) or sharing your
              data with third-party tracking partners. You may change your ATT permission at any time through your iOS
              device settings.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Withdrawal of Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may withdraw your consent to non-essential tracking technologies at any time. Withdrawal is as easy
              as giving consent and can be done through any of the methods described above. Upon withdrawal, we will:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Stop placing non-essential cookies on your device (website);</li>
              <li>Stop activating non-essential tracking SDKs in the app;</li>
              <li>
                Cease using previously collected data for non-essential purposes, subject to any legal obligations; and
              </li>
              <li>Respect your new preferences on all future visits or launches.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Consequences of Disabling Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Disabling or refusing non-essential tracking technologies may limit your ability to use certain
              personalized features of the Platform, including:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Remembering your skin profile and preferences;</li>
              <li>Saving your skincare routine and progress;</li>
              <li>Personalized product recommendations;</li>
              <li>Maintaining your login session across visits (website only); and</li>
              <li>Receiving tailored content or offers.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Essential cookies and SDKs are strictly necessary for the Platform to function (e.g., authentication,
              security, session management). These cannot be disabled through our consent controls, as the Platform
              would not operate without them. You may block them via your browser or device settings, but this will
              prevent you from using core features such as logging in or accessing your account.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Your Rights Under Québec Law 25</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are a resident of Québec, you have the following rights regarding tracking technologies:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                The right to refuse non-essential tracking, with no tracking technologies activating without your
                explicit prior consent;
              </li>
              <li>The right to withdraw your consent as easily as you gave it;</li>
              <li>
                The right to be informed of the use of tracking that profiles you and to opt out of such profiling; and
              </li>
              <li>
                The right to request the cessation of the use of your personal information for prospecting or commercial
                purposes.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We document and retain records of your consent for both website and mobile app tracking to demonstrate
              compliance with applicable law.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Cookie Consent</h2>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Website Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you first visit our website, we ask for your consent to non-essential cookies via a clear,
              easy-to-use banner. You can change your mind at any time by:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Clicking the &quot;Cookie Settings&quot; link in our website footer;</li>
              <li>Adjusting your preferences through your account settings (if logged in); or</li>
              <li>
                Contact us at{" "}
                <a className={linkClass} href="mailto:privacy@dermiciq.com">
                  privacy@dermiciq.com
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Mobile App Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you first launch our mobile application, we ask for your consent to non-essential tracking
              technologies (including SDKs and advertising identifiers) via a clear, easy-to-use in-app consent dialog.
              You can change your mind at any time by:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Adjusting your preferences through your account settings;</li>
              <li>Revisiting the consent dialog through the app&apos;s settings menu; or</li>
              <li>
                Contact us at{" "}
                <a className={linkClass} href="mailto:privacy@dermiciq.com">
                  privacy@dermiciq.com
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">General Consent Principles</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your consent is specific to DermicIQ and applies to the current version of this Cookie Policy. Your
              consent preferences are:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Stored and respected on all future visits to our website and launches of our mobile app;</li>
              <li>Applied consistently across both our website and mobile app (where technically feasible);</li>
              <li>Documented and retained to demonstrate compliance with applicable law; and</li>
              <li>Withdrawable at any time, with withdrawal being as easy as giving consent.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Separate Consent Required</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your consent to our use of non-essential cookies and tracking technologies is obtained separately from
              your acceptance of our Terms of Service or{" "}
              <Link className={linkClass} href="/privacy">
                Privacy Policy
              </Link>
              . Acceptance of our Terms of Service or Privacy Policy does not constitute consent to our use of
              non-essential tracking technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not use cookie walls (blocking access to content unless you accept cookies) or dark patterns
              (manipulative design) to obtain your consent. You have a genuine choice to accept or refuse non-essential
              tracking technologies.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Duration of Consent</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                Your consent remains valid for 24 months from the date you last provided it, unless:
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>You withdraw your consent earlier through any of the methods described above;</li>
                  <li>We make material changes to our cookie practices requiring re-consent; or</li>
                  <li>You clear your browser cookies or app data, which may reset your preferences.</li>
                </ul>
              </li>
              <li>After 24 months, we will re-prompt you for consent on your next website visit or app launch.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Quebec Law 25 Compliance</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are a resident of Québec, we ensure that your consent is freely given, specific, informed, and
              unambiguous, and is obtained through a clear affirmative action:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>You have the ability to withdraw your consent as easily as you gave it;</li>
              <li>We maintain a record of your consent to demonstrate compliance; and</li>
              <li>No non-essential tracking technologies activate without your explicit prior consent.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Children&apos;s Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              For users under the age of majority in their jurisdiction, we obtain verifiable parental or guardian
              consent before placing any non-essential tracking technologies. We do not knowingly track children for
              marketing or advertising purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Consent for New Purposes</h3>
            <p className="text-muted-foreground leading-relaxed">
              If we wish to use your data collected through tracking technologies for a purpose not described in this
              Cookie Policy, we will obtain your prior explicit consent before doing so.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Contact for Consent Questions</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about your consent preferences or need assistance managing your choices, please
              contact us at{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Changes to This Cookie Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy to reflect changes in our practices, technology, or applicable laws. When
            we make material changes, we will post the updated policy with a new effective date and notify you via:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Email (if you have an account with us);</li>
            <li>An in-app notice or pop-up;</li>
            <li>A prominent notice on our website; and</li>
            <li>Updates to our cookie consent banner to reflect new categories or providers.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For material changes, we will obtain your affirmative re-consent where required by law, including:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>If we introduce new categories of cookies or tracking technologies;</li>
            <li>If we add new third-party providers that process your data in a materially different way; or</li>
            <li>If applicable law requires renewed consent for the changes.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Your continued use of the website or app after the changes take effect, where we have not required
            re-consent, constitutes your acceptance of the revised Cookie Policy. Where re-consent is required, your
            use of the website or app after the changes take effect without re-consent will not constitute acceptance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We will maintain a version history and change log for this Cookie Policy, which you may access upon
            request. We encourage you to review this policy periodically to stay informed about how we use tracking
            technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, we will provide you with notice of any material changes in a manner that
            complies with Law 25, and you will have the right to withdraw your consent if the changes are adverse to you
            and were not reasonably anticipated at the time you gave your consent.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Contact: If you have any questions about changes to this Cookie Policy, please contact us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions, concerns, or requests regarding this Cookie Policy, our use of cookies and
            tracking technologies, or your consent preferences, please reach out to us at:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
            <br />
            Website:{" "}
            <a className={linkClass} href="https://dermiciq.com" target="_blank" rel="noopener noreferrer">
              https://dermiciq.com
            </a>
            <br />
            Email:{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to transparency and are happy to explain anything in more detail. We will respond to your
            inquiry within thirty (30) days, as required by applicable law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are not satisfied with our response to a privacy or cookie-related concern, you have the right to
            file a complaint with the Office of the Privacy Commissioner of Canada (OPC). If you are a resident of
            Québec, you may also file a complaint with the Commission d&apos;accès à l&apos;information du Québec
            (CAI). We encourage you to first attempt to resolve any issue directly with us before contacting a
            supervisory authority.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Office of the Privacy Commissioner of Canada:{" "}
            <a className={linkClass} href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
              https://www.priv.gc.ca
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Commission d&apos;accès à l&apos;information du Québec:{" "}
            <a className={linkClass} href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">
              https://www.cai.gouv.qc.ca
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for trusting DermicIQ with your skincare journey. We are committed to transparency, data
            responsibility, and helping you achieve healthier skin.
          </p>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
