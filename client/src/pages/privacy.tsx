import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { cn } from "@/lib/utils";

const LAST_UPDATED = "April 2026";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | DermicIQ™"
        description="How DermicIQ Technologies Inc. collects, uses, and protects personal information for dermiciq.com and the DermicIQ app in Ontario, Canada."
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
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <div className="bg-background py-12 sm:py-16 lg:py-20">
        <article className="container-content max-w-3xl space-y-12 sm:space-y-14">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              DermicIQ Technologies Inc. (&quot;DermicIQ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is based in Ontario, Canada. We provide this website at{" "}
              <a
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="https://dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dermiciq.com
              </a>{" "}
              and our product through accounts and profiles you create on{" "}
              <a
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="https://app.dermiciq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.dermiciq.com
              </a>
              . This Privacy Policy explains what personal information we collect, how we use it, how we share it, and
              the choices you have. We wrote it in plain language so you can read it without a law degree.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy is intended for a general international audience, but it does not try to list every
              country-specific right. It also does not mean we are targeting the European Union, the United Kingdom, or
              California with our marketing or our service in any special way. If you think a local law may apply to you
              in addition to this policy, we are happy to work through that when you contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. Information we collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on how you use the website and the app, we may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">Account and contact details: </span>
                such as your name and email when you create or manage an account, and name, email, phone
                (if provided), subject, and message when you use our contact form.
              </li>
              <li>
                <span className="text-foreground font-medium">Profile and skin-related information: </span>
                for example your skin type, skin concerns, sensitivities, and details about your current skincare routine
                that you choose to add to your profile. You decide how much to share. Some fields may be optional.
              </li>
              <li>
                <span className="text-foreground font-medium">Ratings and reviews: </span>
                for example product ratings or reviews you submit, which may be tied to your account and helps us
                understand what works for you and others in aggregate.
              </li>
              <li>
                <span className="text-foreground font-medium">Technical and usage data: </span>
                for example your IP address, device or browser type, general location (often based on IP), the pages you
                visit, the features you use, and similar analytics that help us keep the service running and see what
                we should improve. As with most online services, we may also use common technologies to support
                this (we cover cookies in section 7).
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not set out to collect any special category of health data beyond what you voluntarily give us
              in your profile for personalization. If you are not comfortable providing something, do not add it, or
              use the rights in section 6 to update or remove it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. How we use your information</h2>
            <p className="text-muted-foreground leading-relaxed">We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Provide, operate, and support the DermicIQ service and your account and profile.</li>
              <li>Personalize your experience, for example by matching your preferences, sensitivities, and routine
                to our features over time. We may store your profile and related data for the long term so
                recommendations and the product can get better the longer you use it, unless you ask us to close your
                account and delete the data in line with this policy and our systems.</li>
              <li>Send service messages (for example about security, your account, or product changes) when needed.</li>
              <li>Respond to messages you send through our contact form.</li>
              <li>Maintain safety and integrity, for example to detect abuse, protect our systems, and follow the law.
              </li>
              <li>Measure and improve our product, including through analytics that show how the site and app are used
                in aggregate and help us plan updates.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data. We do not use your data to run third-party marketing or ad networks for
              money. That is a firm line.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. How we share your information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data, and we do not share it with companies so they can advertise to you.
              The main reasons we may disclose information in practice are:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="text-foreground font-medium">Service providers. </span>
                We work with vetted companies that help us run the product, for example hosting, infrastructure, email
                delivery, and analytics. They only receive what they need to do the job, and we expect them to protect
                your data and use it only on our instructions, under contract where appropriate. Our marketing-site
                contact form uses Cloudflare Turnstile to help reduce spam and abuse; Cloudflare may process technical
                data related to that check as described in their own privacy materials.
              </li>
              <li>
                <span className="text-foreground font-medium">Legal and safety. </span>
                We may need to share information if we are required to by law, to respond to valid legal process, to
                protect the rights, safety, and property of DermicIQ, our users, or others, or in connection with a
                business transaction (such as a merger or sale of assets) where the successor continues to protect this
                policy or gives you notice.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Otherwise, we do not hand your profile over to third parties to market their products. If that ever
              changes in a way that would surprise you, we will update this policy and give you a clear heads-up.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Data storage and security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use reasonable physical, technical, and organizational measures designed to protect personal
              information from loss, misuse, and unauthorized access. No system on the internet is 100% secure, but we
              work to meet a sensible standard for a product like ours, including when data is in transit to our servers
              and when it is stored. Access inside our company and our vendors is limited to people and systems with a
              real need, not so everyone on the team can read every profile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We may keep your account and profile data for as long as we need to provide the service, improve
              personalization over time, meet legal and accounting obligations, and resolve disputes, unless a shorter
              period is required or you request deletion in line with section 6. When we no longer have a good reason
              to keep data, we delete it or de-identify it, subject to our backup and logging limits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Your rights (access, correction, deletion, and more)</h2>
            <p className="text-muted-foreground leading-relaxed">
              We want you to be in the driver seat for the information tied to you. Depending on the situation, you
              can usually:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Ask for a copy of, or more detail about, the personal information we hold about you.</li>
              <li>Ask us to correct information that is wrong or out of date, including through your account and profile
                in the app where you can self-edit some fields.</li>
              <li>Ask us to delete your information or your account, subject to legal and technical limits (we may have
                to keep certain records for a time if the law or a real dispute says so). If we cannot delete
                something right away, we will explain the reason.</li>
              <li>Object to or restrict some processing in a few limited cases, where that applies, or withdraw consent
                where you gave it for a specific, optional use.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To use these rights, email us at{" "}
              <a
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="mailto:privacy@dermiciq.com"
              >
                privacy@dermiciq.com
              </a>
              . We may need to confirm your identity before we act, so we are not disclosing or changing data for
              the wrong person. We will get back to you in a reasonable time, though complex requests can take a bit
              longer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Cookies and tracking technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website and app may use cookies, local storage, and similar tools so that the service remembers you,
              works correctly, and helps us see what is used and what is not. We may use them for security, preferences,
              session support, and analytics, including how many people visit, what pages are popular, and whether a
              feature is confusing. You can control many cookies in your browser settings, but turning off all cookies
              or storage may make parts of the experience stop working. For a focused page on this topic, see our{" "}
              <Link
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="/cookies"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Children&apos;s privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              DermicIQ is not directed to children under 13, and we do not want to collect personal information from
              them on purpose. If you are a parent or guardian and believe a child has given us information they should
              not have, contact us at{" "}
              <a
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="mailto:privacy@dermiciq.com"
              >
                privacy@dermiciq.com
              </a>{" "}
              and we will take it seriously and help remove the information where we can and where the law says we should.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Changes to this privacy policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will update this page from time to time when the product, the law, or our practices change. When we
              make important changes, we will post the new version here, adjust the &quot;Last updated&quot; date, and, if
              the change is big, we will try to give you extra notice (for example by email or a notice in the app),
              not just sneak it in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. Contact us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions, concerns, or requests about this policy or your personal data can go directly to DermicIQ
              Technologies Inc. (Ontario, Canada) at{" "}
              <a
                className="font-medium text-primary underline-offset-2 hover:underline"
                href="mailto:privacy@dermiciq.com"
              >
                privacy@dermiciq.com
              </a>
              . We will read it and do our best to respond in a way that is clear, fair, and on time. For
              day-to-day product questions, you can still use our general support channels, but for anything privacy or
              data subject related, the email above is the right lane.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}
