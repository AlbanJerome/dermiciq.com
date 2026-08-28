import { Link } from "wouter";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

const LAST_UPDATED = "August 2026";

const linkClass = "font-medium text-primary underline-offset-2 hover:underline";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | DermicIQ"
        description="How DermicIQ Technologies Inc. collects, uses, shares, and protects your personal information when you use dermiciq.com and the DermicIQ app."
        path="/privacy"
      />

      <ContentPageHeader title="Privacy Policy" titleTestId="text-privacy-headline">
        <p className="text-sm text-muted-foreground">Effective Date: {LAST_UPDATED}</p>
        <p className="text-sm text-muted-foreground">Last updated: August 25, 2026</p>
      </ContentPageHeader>

      <ContentPageBody>
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
            ), our mobile application (available for download via the Apple App Store and Google Play Store), and any
            related services (collectively, the &quot;Services&quot;).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your consent to the data practices described in this Privacy Policy is obtained separately from your
            acceptance of our Terms of Service and requires affirmative, explicit action on your part (such as checking
            a box or clicking a dedicated &quot;I Consent&quot; button). Acceptance of our Terms of Service does not
            constitute consent to the collection, use, or disclosure of your personal information as described in this
            Privacy Policy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may withdraw your consent at any time by contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>{" "}
            or adjusting your privacy preferences in your account settings. Withdrawal of consent may affect your
            ability to continue using certain features of the Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you do not agree with any part of this Privacy Policy, you must not use the Services.
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
            privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA). PIPEDA
            sets out the ground rules for how businesses must handle personal information in the course of commercial
            activities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For the purposes of this Privacy Policy, &quot;personal information&quot; means any information about an
            identifiable individual, as defined under PIPEDA.
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
            <li>
              Skin profile: skin type, skin concerns, sensitivities/allergies, and current skincare routine
            </li>
            <li>Product feedback: ratings, reviews, and notes about products you have used</li>
            <li>Communications: messages, feedback, or inquiries you send to our support team</li>
          </ul>
          <p className="text-foreground font-medium">Automatically Collected Information:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground font-medium">Usage data: </span>
              how you interact with the app or website, features used, time spent, and actions taken
            </li>
            <li>
              <span className="text-foreground font-medium">Device and technical data: </span>
              IP address, device type, operating system, browser type, app version, and unique device identifiers
            </li>
            <li>
              <span className="text-foreground font-medium">Analytics data: </span>
              information about user trends, engagement, and app performance
            </li>
            <li>
              <span className="text-foreground font-medium">Location data: </span>
              general geographic location derived from your IP address (we do not collect precise GPS location without
              your explicit consent)
            </li>
            <li>
              <span className="text-foreground font-medium">Barcode data: </span>
              product barcode numbers (UPC/EAN) captured via your device&apos;s camera for product identification. We
              do not store the actual image, only the scanned barcode number
            </li>
          </ul>
          <p className="text-foreground font-medium">Summary of Data Types Collected.</p>
          <p className="text-muted-foreground leading-relaxed">
            For transparency and to align with app store requirements, the table below summarizes the personal
            information we collect and why:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2 pr-3 font-semibold text-foreground">Data type</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">
                    Collected Directly or Automatically?
                  </th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Purpose</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Shared with Third Parties?</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">Name, email, password</td>
                  <td className="py-2 pr-3">Directly (account creation)</td>
                  <td className="py-2 pr-3">Account management, authentication</td>
                  <td className="py-2 pr-3">Yes (hosting, email providers)</td>
                </tr>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">Skin type, concerns, sensitivities, routine</td>
                  <td className="py-2 pr-3">Directly (user input)</td>
                  <td className="py-2 pr-3">Personalization, AI recommendations</td>
                  <td className="py-2 pr-3">Yes (AI processing partners)</td>
                </tr>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">Product ratings, reviews, notes</td>
                  <td className="py-2 pr-3">Directly (user input)</td>
                  <td className="py-2 pr-3">Routine tracking, community features</td>
                  <td className="py-2 pr-3">No (unless you post publicly)</td>
                </tr>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">Usage data (features used, time spent)</td>
                  <td className="py-2 pr-3">Automatically</td>
                  <td className="py-2 pr-3">Analytics, product improvement</td>
                  <td className="py-2 pr-3">Yes (analytics providers)</td>
                </tr>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">Device/technical data (IP, OS, browser, device ID)</td>
                  <td className="py-2 pr-3">Automatically</td>
                  <td className="py-2 pr-3">Security, analytics, performance</td>
                  <td className="py-2 pr-3">Yes (hosting, security, analytics)</td>
                </tr>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3">General location (from IP)</td>
                  <td className="py-2 pr-3">Automatically</td>
                  <td className="py-2 pr-3">Regional content, compliance</td>
                  <td className="py-2 pr-3">Yes (hosting, CDN)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We do not collect precise GPS location, contact lists, call logs, or other sensitive device data without
            your explicit consent.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Sensitive Information. </span>
            Your skin profile information (including skin type, conditions, concerns, and sensitivities) constitutes
            sensitive personal information under applicable privacy laws, including Québec Law 25 and CCPA. We do not
            collect or store photos of your skin. The only image data we collect is barcode scans captured via your
            device&apos;s camera for the purpose of identifying skincare products. These scans are processed to extract
            the product&apos;s barcode number (e.g., UPC/EAN) and are not stored as images. We collect this information
            only for the purposes described in this Privacy Policy and only with your explicit, separate consent. You
            are not required to share any information you are uncomfortable providing, and you may decline to provide
            certain information, though this may limit your ability to use certain features of the Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not collect sensitive health data beyond what you voluntarily share for skincare personalization
            purposes. We do not collect information about your medical history, diagnoses, prescriptions, or clinical
            treatments unless you voluntarily provide it in communications with us.
          </p>
          <p className="text-foreground font-medium">Purpose of Collection.</p>
          <p className="text-muted-foreground leading-relaxed">
            We collect your personal information for the following purposes, as required by PIPEDA&apos;s principle of
            identifying purposes:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>To create and maintain your account and provide the Services</li>
            <li>To generate personalized skincare insights and recommendations using computer vision technology</li>
            <li>
              To improve and optimize our AI models and algorithms using de-identified and aggregated data. We do not
              use your personal information to train our AI models unless you explicitly consent to such use in the
              future. If we introduce AI model training using personal data, we will update this Privacy Policy and
              obtain your separate, explicit consent before doing so
            </li>
            <li>To communicate with you about your account, updates, and important notices</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To analyze usage trends and improve user experience, Service features, and performance</li>
            <li>To ensure the security and integrity of the Services</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We use your personal information only for the purposes identified in this Privacy Policy. If we wish to
            use your information for a new purpose, we will document that purpose and obtain your consent before doing
            so.
          </p>
          <p className="text-foreground font-medium">Legal Basis for Processing (Québec Law 25 / GDPR)</p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec or the European Economic Area, we process your personal information based
            on the following legal grounds:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground font-medium">Consent: </span>
              For non-essential cookies, marketing communications, and optional AI model training
            </li>
            <li>
              <span className="text-foreground font-medium">Contractual Necessity: </span>
              To provide the Services (e.g., account creation, skin profile storage, AI recommendations)
            </li>
            <li>
              <span className="text-foreground font-medium">Legitimate Interests: </span>
              For security, fraud prevention, analytics, and service improvement
            </li>
            <li>
              <span className="text-foreground font-medium">Legal Obligation: </span>
              To comply with applicable laws and regulatory requirements
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            You may withdraw your consent at any time without affecting the lawfulness of processing based on consent
            before its withdrawal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use your information to provide, improve, and personalize our Services:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Create and maintain your account and long-term skin profile</li>
            <li>Deliver personalized skincare analysis and recommendations using computer vision technology</li>
            <li>Track your skin progress over time and suggest adjustments to your routine</li>
            <li>Improve and optimize our overall service quality and user experience</li>
            <li>Communicate with you about your account, updates, and important notices</li>
            <li>Respond to your questions and provide customer support</li>
            <li>Conduct internal research, analytics, and product development</li>
            <li>Protect the security and integrity of our Services</li>
            <li>Detect, prevent, and address technical issues or fraudulent activity</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Limitation on Use. </span>
            We use your personal information only for the purposes identified in this Privacy Policy. If we wish to
            use your information for a new purpose that is not reasonably expected at the time of collection, we will
            document that purpose and obtain your explicit consent before doing so.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Automated Decision-Making. </span>
            Our Services use algorithms to generate skincare insights and product recommendations based on your skin
            profile. These automated decisions are made using the data you provide and are intended for informational
            and wellness purposes only. You have the right to object to automated decision-making and to request human
            intervention by contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            . We do not make automated decisions that have legal or similarly significant effects on you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Marketing and Advertising. </span>
            We may use your email address and account information to send you promotional communications about
            DermicIQ features, updates, and related offerings that we believe may interest you. You may opt out of these
            marketing communications at any time by clicking the &quot;unsubscribe&quot; link in any email, adjusting
            your preferences in your account settings, or contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not share your personal information with third parties for their own marketing or advertising
            purposes. We never sell your personal data to third parties. We do not use your sensitive personal
            information (including skin profile data) for targeted advertising or any purpose other than providing and
            improving the Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Consent for Marketing. </span>
            Where required by applicable law, including Québec Law 25, we will obtain your separate, explicit consent
            before sending you any marketing communications. You may withdraw this consent at any time using the
            methods described above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">4. How We Share Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are transparent about sharing and only do so in limited circumstances:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Service Providers. </span>
            We may share information with trusted third-party service providers who help us operate the Services (e.g.,
            cloud hosting, analytics, email delivery, and AI processing partners). All such providers are bound by
            strict contractual obligations to protect your data, use it only for the purposes we specify, and not
            retain, use, or disclose it for any other purpose. We take steps to monitor and enforce those obligations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">AI Processing Partners. </span>
            Our current AI processing partners include Google Cloud AI and others. A full list of AI partners is
            available upon request at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            . We require all AI processing partners to maintain equivalent security safeguards and to use your data
            only for the specific processing we direct. We do not permit these partners to use your data to train
            their own models or for any purpose unrelated to providing the Services to you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Cross-Border Data Transfers. </span>
            Some of our service providers may operate outside of Canada, including in the United States and other
            jurisdictions. When your personal information is transferred outside of Canada, we ensure that our contracts
            with these providers require a comparable level of protection for your data. However, your information may
            be subject to the laws of the country in which it is processed, including disclosure to law enforcement or
            regulatory authorities in that jurisdiction. If you have questions about the safeguards we use for
            cross-border transfers, please contact us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Legal Requirements. </span>
            We may disclose information if required by law, regulation, or legal process (such as a court order or
            subpoena), or to protect our rights, safety, or property, including the security and integrity of the
            Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Business Transfers. </span>
            In the event of a merger, acquisition, financing, or sale of all or a portion of our assets, your
            information may be transferred as part of that transaction. We will require any acquiring entity to handle
            your personal information in accordance with this Privacy Policy. If the transaction does not proceed, we
            will require the recipient to return or destroy your personal information.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Third-Party Marketing. </span>
            We do not sell, rent, or share your personal information with third parties for their own marketing or
            advertising purposes. We never sell your personal data to third parties.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Third-Party Links. </span>
            The Services may contain links to third-party websites or services. This Privacy Policy does not apply to
            those third-party sites. We are not responsible for the privacy practices or content of such third parties.
            We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">De-Identified Data. </span>
            We may share aggregated or de-identified data that does not reasonably identify you with third parties for
            research, analytics, or other lawful purposes. Such data is not personal information and is not subject to
            the restrictions in this Privacy Policy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">AI and Machine Learning. </span>
            We use computer vision technology (Vision OCR) to analyze photos you submit for skincare insights. This
            processing occurs in the cloud, which means your label photos leave your device and are transmitted to our
            service providers for analysis. Barcode scanning, by contrast, is performed entirely on your device using
            ML Kit and does not transmit image data to our servers. We do not use your personal information or User
            Content to train our AI models. Any improvements to our technology are based on aggregated and de-identified
            data only, and we do not currently use your data for training purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data is stored on secure servers, primarily in Canada or other jurisdictions where our service
            providers operate. We implement reasonable administrative, technical, and physical safeguards to protect
            your personal information, including:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Encryption for data in transit (using TLS/HTTPS) and data at rest</li>
            <li>Access controls that restrict access to personal information to authorized personnel only</li>
            <li>Regular security assessments and monitoring</li>
            <li>Secure data storage infrastructure</li>
            <li>Contractual obligations requiring our service providers to maintain equivalent safeguards</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Under PIPEDA and Québec Law 25, organizations must protect personal information with security safeguards
            appropriate to the sensitivity of the information. We are committed to maintaining these standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Retention. </span>
            We retain your skin profile and account information for as long as your account remains active, or as
            needed to provide the Services to you. After account termination, we will retain your personal information
            only for as long as reasonably necessary to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Comply with legal and regulatory obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
            <li>Detect and prevent fraud or security incidents</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            After such a retention period, we will securely delete or anonymize your personal information. If we
            anonymize your data rather than delete it, we ensure that there is no serious possibility of re-identification
            through measures such as aggregation, scrambling, and organizational controls.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Security Limitations. </span>
            No system is completely secure, and we cannot guarantee absolute security. You use the Service at your own
            risk. In the event of a security breach affecting your personal information, we will notify you and
            applicable regulatory authorities in accordance with applicable law, including PIPEDA and Québec Law 25.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Data Breach Notification. </span>
            If we become aware of a breach of security safeguards involving your personal information that creates a
            real risk of significant harm to you, we will notify you promptly and report the breach to the Office of
            the Privacy Commissioner of Canada and, if applicable, the Commission d&apos;accès à l&apos;information du
            Québec, as required by law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may request deletion of your data at any time (see &quot;Your Rights&quot; below). We will respond to
            such requests within thirty (30) days.
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
              <span className="text-foreground font-medium">Access. </span>
              Request a copy of the personal information we hold about you. You have the right to know what personal
              information we have collected, how we use it, and with whom we share it.
            </li>
            <li>
              <span className="text-foreground font-medium">Correction. </span>
              Ask us to update or correct inaccurate or incomplete information. You may also update your profile
              information directly through your account settings.
            </li>
            <li>
              <span className="text-foreground font-medium">Deletion. </span>
              Request deletion of your account and personal data. We will honor deletion requests unless we are required
              by law to retain certain information (such as to comply with legal obligations, resolve disputes, or
              enforce our agreements). If we cannot fully delete your data, we will inform you of the reasons.
            </li>
            <li>
              <span className="text-foreground font-medium">Withdrawal of Consent. </span>
              Withdraw your consent to our collection, use, or disclosure of your personal information at any time.
              Withdrawal of consent may affect your ability to continue using certain features of the Services.
            </li>
            <li>
              <span className="text-foreground font-medium">Objection/Restriction. </span>
              Object to or request limits on certain processing activities, including automated decision-making or
              processing for marketing purposes.
            </li>
            <li>
              <span className="text-foreground font-medium">Data Portability. </span>
              Receive your data in a structured, commonly used, and machine-readable format, and request that we
              transmit it to another organization where technically feasible.
            </li>
            <li>
              <span className="text-foreground font-medium">Complaint to the OPC or CAI. </span>
              If you are not satisfied with our response to your privacy concern, you have the right to file a complaint
              with the Office of the Privacy Commissioner of Canada (OPC).
            </li>
            <li>
              If you are a resident of Québec, you may also file a complaint with the Commission d&apos;accès à
              l&apos;information du Québec (CAI). We encourage you to first attempt to resolve any issue directly with
              us before contacting a supervisory authority.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">How to Exercise Your Rights. </span>
            To exercise these rights, email us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>{" "}
            or adjust your preferences through your account settings. We will respond within thirty (30) days, as
            required by applicable law. We may need to verify your identity before fulfilling a request. If we need
            additional time to respond, we will notify you of the extension and the reasons for it.
          </p>
          <p className="text-foreground font-medium">Québec Residents – Additional Rights</p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, you have the following additional rights under Québec Law 25:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              The right to have personal information collected, used, or disclosed only for purposes that a reasonable
              person would consider appropriate in the circumstances
            </li>
            <li>
              The right to require us to cease disseminating your personal information or to de-index any hyperlink
              attached to your name that provides access to such information if the dissemination causes serious injury
              to your reputation or privacy
            </li>
            <li>
              The right to request the cessation of the use of your personal information for prospecting or commercial
              purposes
            </li>
            <li>
              The right to be informed of the use of your personal information outside of Québec and to request that
              such use be ceased
            </li>
          </ul>
          <p className="text-foreground font-medium">California Residents – Additional Rights</p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of California, you have the following additional rights under the California Consumer
            Privacy Act (CCPA):
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              The right to know what personal information we have collected, used, disclosed, and sold about you
            </li>
            <li>
              The right to opt-out of the sale or sharing of your personal information (we do not sell your personal
              information)
            </li>
            <li>The right to limit the use and disclosure of your sensitive personal information</li>
            <li>The right to non-discrimination for exercising any of your privacy rights</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            To exercise your California rights, please contact us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Sale of Personal Information. </span>
            We do not sell your personal information to third parties. As such, we do not offer a &quot;Do Not Sell My
            Personal Information&quot; opt-out mechanism. If our practices change, we will update this Privacy Policy
            and provide you with the ability to opt-out as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies, pixels, and similar tracking technologies to operate the Services, understand usage
            patterns, and improve your experience. Cookies are small text files that websites place on your device to
            remember your preferences, login status, and other information about your interaction with the Services.
            We may also use tracking technologies such as web beacons and pixels to collect information about how you
            interact with our Services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We obtain your prior, informed, and unambiguous consent before placing any non-essential cookies,
            including analytics and marketing cookies, on your device. You have the right to accept or reject
            non-essential cookies at any time. You may manage your cookie preferences through your account settings,
            our cookie preference centre, or your browser or device settings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you first access our Services, we will present you with a cookie consent banner that provides clear
            information about:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>The categories of cookies we use (essential, analytics, marketing, etc.)</li>
            <li>What data each category collects and for what purposes</li>
            <li>How long each cookie will remain on your device</li>
            <li>How you can withdraw your consent at any time</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            You are not required to accept non-essential cookies to access the general content of our Services.
            However, certain features may be unavailable if you refuse certain cookies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Cookies Policy and Categories. </span>
            For detailed information about the specific cookies we use, their purposes, retention periods, and the
            third-party providers involved, please see our separate Cookie Policy, which is incorporated by reference
            into this Privacy Policy and is available at{" "}
            <Link className={linkClass} href="/cookies">
              https://dermiciq.com/cookies
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Third-Party Tracking. </span>
            Some of the tracking technologies used on our Services may be placed by third-party providers (such as
            analytics or marketing partners). We ensure that these providers comply with applicable privacy laws and
            that their cookies are subject to your consent preferences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Withdrawal of Consent. </span>
            You may withdraw your consent to non-essential cookies at any time by adjusting your preferences in our
            cookie preference centre, updating your browser settings, or contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Quebec Law 25 Compliance. </span>
            We collect and document your cookie consent as required by Quebec&apos;s Law 25, which mandates that
            consent be freely given, specific, informed, and unambiguous, and that you have the ability to withdraw
            consent as easily as you gave it. A record of your consent is maintained for compliance purposes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Cookie Walls or Dark Patterns. </span>
            We do not use cookie walls (blocking access to content unless you accept cookies) or dark patterns
            (manipulative design) to obtain your consent. You have a genuine choice to accept or refuse non-essential
            cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Third-Party Data Sources</h2>
          <p className="text-muted-foreground leading-relaxed">
            To provide a comprehensive product catalog and enrich your skincare experience, the Service uses product
            information sourced from third-party databases, including:
          </p>
          <p className="text-foreground font-medium">Open Beauty Facts</p>
          <p className="text-muted-foreground leading-relaxed">
            We use product information from Open Beauty Facts (
            <a
              className={linkClass}
              href="https://world.openbeautyfacts.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://world.openbeautyfacts.org
            </a>
            ), a collaborative, open database of cosmetic products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">How We Use It: </span>
            When you search for or scan a product, we may query the Open Beauty Facts live API or retrieve data from a
            locally stored offline catalog derived from the official Open Beauty Facts Parquet data dump. This is done
            only for user-initiated queries and not for automated scraping.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Attribution: </span>
            Product pages displayed through the Service include a link to the corresponding Open Beauty Facts product
            page.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Data Usage: </span>
            We do not rehost or modify Open Beauty Facts images or product records beyond what is necessary to provide
            the Service. We do not use Open Beauty Facts data for medical purposes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">License: </span>
            Open Beauty Facts data is licensed under the Open Database License (ODbL) and is provided &quot;as is&quot;
            without warranties of any kind.
          </p>
          <p className="text-foreground font-medium">The Beauty API</p>
          <p className="text-muted-foreground leading-relaxed">
            We use product information from The Beauty API (
            <a
              className={linkClass}
              href="https://thebeautyapi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://thebeautyapi.com
            </a>
            ), a licensed dataset of skincare and beauty products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">How We Use It: </span>
            We have licensed a static snapshot of the dataset, which includes product information, ingredient lists,
            safety ratings (irritancy and comedogenicity scores), and product images. The dataset is used solely to
            enrich the product catalog available through the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Data Usage: </span>
            We do not redistribute, resell, or publicly host the raw dataset files. We do not use The Beauty API data
            for medical purposes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">License: </span>
            The Beauty API data is provided under a commercial license and is provided &quot;as is.&quot; It is not
            guaranteed to be accurate, complete, or up-to-date.
          </p>
          <p className="text-foreground font-medium">General Data Practices for Third-Party Sources</p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Verification: </span>
            We do not verify the accuracy of third-party data and are not responsible for any errors or omissions in
            product information displayed through the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Medical Use: </span>
            We do not use any third-party data for medical purposes, including diagnosis, treatment, or clinical
            decision-making.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Recommendation: </span>
            You should always check product labels and packaging before using any skincare product and consult a
            qualified healthcare professional for medical advice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Third-Party Rights: </span>
            The product information displayed may be subject to intellectual property rights owned by third parties.
            Nothing in this Privacy Policy grants you any rights to such third-party intellectual property.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Age Restriction. </span>
            Our Services are strictly limited to users who are 18 years of age or older (or the age of majority in their
            jurisdiction, if higher). By using the Services, you represent and warrant that you meet this age
            requirement. We do not allow users under 18 to access or use the Services under any circumstances,
            including with parental consent.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Collection from Minors. </span>
            We do not knowingly collect personal information from children or minors under the age of 18. If we become
            aware that we have collected personal information from a user under 18, we will take immediate steps to
            delete it and terminate the associated account.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Parental/Guardian Reporting. </span>
            If you are a parent or legal guardian and believe that your child under 18 has provided personal information
            to us or is using the Services without authorization, please contact us immediately at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            . We will investigate and take appropriate action, including account termination and data deletion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Age Verification. </span>
            We reserve the right to verify your age and identity at any time, including requesting documentation to
            confirm that you meet the minimum age requirement. Failure to provide such verification may result in
            suspension or termination of your account.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">No Marketing to Minors. </span>
            We do not direct any marketing, advertising, or promotional content to individuals under 18. We do not use
            tracking technologies for online behavioural advertising on any sections of our Services that are likely to
            be accessed by minors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. International Transfers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Since we are based in Canada, your information may be processed in Canada or other countries where our
            service providers operate. These countries may have different data protection laws than your jurisdiction.
            Under PIPEDA, Canadian organizations are held accountable for the protection of personal information that
            is transferred to a third-party service provider located outside of Canada. We remain responsible for your
            data even when it is processed in another jurisdiction, and we use contractual means to ensure that our
            service providers provide a comparable level of protection while the information is being processed.
          </p>
          <p className="text-foreground font-medium">Consent and Transparency</p>
          <p className="text-muted-foreground leading-relaxed">
            The Office of the Privacy Commissioner of Canada (OPC) has taken the position that a transfer of personal
            information to a third party for processing constitutes a &quot;disclosure&quot; under PIPEDA, which
            requires consent. We therefore obtain your explicit consent before transferring your personal information
            outside of Canada for processing. When we obtain your consent, we inform you:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>That your personal information may be transferred to service providers located outside of Canada</li>
            <li>The countries in which your information may be processed</li>
            <li>
              The risk that courts, law enforcement, and national security authorities in those countries may access
              your personal information
            </li>
            <li>
              If you have questions about the safeguards we use for cross-border transfers, please contact us at{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
            </li>
          </ul>
          <p className="text-foreground font-medium">Québec Residents</p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, we are required to conduct a privacy impact assessment before transferring
            your personal information outside of Canada. We have documented these assessments and implemented mitigation
            measures to address identified risks. Our contracts with service providers who process Québec personal
            information outside Canada reflect Law 25 requirements, and we maintain monitoring mechanisms to verify
            ongoing compliance.
          </p>
          <p className="text-foreground font-medium">Note on Upcoming Legislation</p>
          <p className="text-muted-foreground leading-relaxed">
            Bill C-36, the proposed federal privacy reform legislation currently before Parliament, would introduce
            stricter requirements for cross-border transfers, including mandatory privacy impact assessments, enhanced
            disclosure obligations, and the requirement to implement prescribed mitigation measures. If enacted, we
            will update our practices to ensure compliance. Under Bill C-36, organizations that fail to comply with
            cross-border transfer requirements could face administrative monetary penalties of up to CAD 10,000,000 or
            3% of gross global revenue.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">11. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, our Services, or
            applicable laws. We will notify you of material changes by:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Posting the updated policy on our website and app, and updating the effective date</li>
            <li>
              If you have an account, sending you an email notification to the address associated with your account
            </li>
            <li>Displaying a prominent notice within the Service before the changes take effect</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For material changes, you will be required to affirmatively re-accept the revised Privacy Policy before
            continuing to use the Service. Your continued use of the Service after the changes take effect without
            re-acceptance will not constitute acceptance of the revised Privacy Policy. If you do not agree to the
            revised Privacy Policy, you must stop using the Service and delete your account.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Changes to this Privacy Policy are effective immediately upon posting, except for material changes, which
            will be effective thirty (30) days after we notify you, unless we indicate otherwise or unless applicable
            law requires a different timeframe.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We will maintain a version history and change log for this Privacy Policy, which you may access upon
            request. We encourage you to review this policy periodically to stay informed about how we are protecting
            your information.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, we will provide you with notice of any material changes in a manner that
            complies with Law 25, and you may have additional rights to withdraw your consent or terminate the
            agreement if the changes are adverse to you and were not reasonably anticipated at the time you gave your
            consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">12. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
            including exercising your rights under Section 6 (Your Rights), please contact us at:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
            <br />
            <a
              className={linkClass}
              href="https://dermiciq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://dermiciq.com
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For data privacy, access, correction, deletion requests, or to withdraw your consent:{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We will respond to your request within thirty (30) days, as required by applicable law. If we need
            additional time to respond, we will notify you of the extension and the reasons for it. We may need to
            verify your identity before fulfilling a request.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are not satisfied with our response to a privacy concern, you have the right to file a complaint
            with the Office of the Privacy Commissioner of Canada (OPC). If you are a resident of Québec, you may also
            file a complaint with the Commission d&apos;accès à l&apos;information du Québec (CAI). We encourage you to
            first attempt to resolve any issue directly with us before contacting a supervisory authority.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Office of the Privacy Commissioner of Canada:{" "}
            <a
              className={linkClass}
              href="https://www.priv.gc.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.priv.gc.ca
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Commission d&apos;accès à l&apos;information du Québec:{" "}
            <a
              className={linkClass}
              href="https://www.cai.gouv.qc.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cai.gouv.qc.ca
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to transparency, data responsibility, and helping you achieve healthier skin. Thank you for
            trusting DermicIQ with your skincare journey.
          </p>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
