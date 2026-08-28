import { Link } from "wouter";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

const LAST_UPDATED = "August 2026";

const linkClass = "font-medium text-primary underline-offset-2 hover:underline";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | DermicIQ"
        description="Terms of Service for DermicIQ Technologies Inc. website, app, and related services."
        path="/terms"
      />

      <ContentPageHeader title="Terms of Service" titleTestId="text-terms-headline">
        <p className="text-sm text-muted-foreground">Effective Date: {LAST_UPDATED}</p>
      </ContentPageHeader>

      <ContentPageBody>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Introduction &amp; Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the DermicIQ website, mobile or
            web application, and any related services (collectively, the &quot;Service&quot;) provided by DermicIQ
            Technologies Inc. (&quot;DermicIQ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company
            federally incorporated in Ontario, Canada.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using the Service, you also agree to comply with the applicable terms and conditions of the Apple App
            Store or Google Play Store (as applicable), which are incorporated by reference into these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By creating an account, you must scroll through these Terms in their entirety and click &quot;I Agree&quot;
            to accept them. Acceptance of these Terms is a separate action from any consent you may provide regarding
            our collection, use, or sharing of your personal information, which is governed by our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>{" "}
            and requires separate, explicit consent. If you do not agree to these Terms, you may not use the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These Terms form a legally binding agreement between you and DermicIQ. We may update these Terms from time
            to time (see Section 13). We will notify you of material changes by posting the new Terms on our website
            and updating the Effective Date. For material changes, you will be required to affirmatively re-accept the
            revised Terms before continuing to use the Service. Your continued use of the Service after the changes take
            effect without re-acceptance will not constitute acceptance of the revised Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service. If you
            are under the age of majority in your jurisdiction, you represent and warrant that you have obtained
            verifiable consent from your parent or legal guardian to use the Service, and you agree that we may request
            verification of such consent at any time. By using the Service, you represent and warrant that you meet
            these age and consent requirements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to withdraw your consent to these Terms at any time by deleting your account and ceasing
            use of the Service. Withdrawal of consent to these Terms will terminate your right to use the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, a French-language version of these Terms is available upon request by
            contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            . In the event of any conflict between the English and French versions, the English version shall prevail,
            to the extent permitted by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. Our Service</h2>
          <p className="text-muted-foreground leading-relaxed">
            DermicIQ is a skincare analysis tool that uses computer vision technology to help you understand your skin
            better and make more informed skincare choices. The Service allows you to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Create and maintain a personalized skin profile;</li>
            <li>Receive AI-generated insights, product recommendations, and routine suggestions;</li>
            <li>Track your skincare routine, product ratings, and skin concerns; and</li>
            <li>Share and view community reviews (where applicable).</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The Service is provided &quot;as is&quot; and is intended for personal, non-commercial wellness and
            informational purposes only. DermicIQ is an educational software tool and is not a substitute for
            professional medical advice, diagnosis, or treatment (see Section 10). You should always consult a qualified
            healthcare professional before making any decisions related to your health or skincare.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The Service may include user-generated content, including community reviews, ratings, and other materials
            submitted by users. We do not endorse, verify, or guarantee the accuracy of any user-generated content. We
            reserve the right, but have no obligation, to monitor, remove, or refuse any user-generated content that
            violates these Terms or applicable law. You remain solely responsible for any content you submit and for
            ensuring it does not infringe third-party rights.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We may update, modify, or discontinue any feature of the Service at any time without prior notice. We do
            not guarantee that the Service will be available uninterrupted, error-free, or secure, and we are not
            responsible for any disruptions or losses resulting from your use of the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. User Accounts and Profiles</h2>
          <p className="text-muted-foreground leading-relaxed">
            To access core features of the Service, you must create an account. You agree to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Provide accurate, current, and complete information during registration;</li>
            <li>Maintain the security of your account credentials;</li>
            <li>Notify us immediately of any unauthorized use of your account; and</li>
            <li>Not share your account credentials with any third party.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            You are responsible for all activities that occur under your account, whether or not authorized by you. We
            reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your skin profile (including skin type, skin conditions, concerns, sensitivities, routine, and product
            feedback) is stored to provide ongoing personalization and improve our AI models. You may access, update, or
            correct your profile information at any time through your account settings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You represent and warrant that all information you provide to us in connection with your account is true,
            accurate, and complete, and you agree to update such information promptly if it changes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to verify your identity and any parental consent you have provided in connection with
            your account.
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
            By submitting User Content, you grant DermicIQ a worldwide, non-exclusive, royalty-free, sublicensable, and
            transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from,
            distribute, and display such content for the purposes of operating, improving, and providing the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You retain ownership of your User Content. You represent and warrant that you have all necessary rights to
            submit your User Content and that it does not infringe any third-party rights.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You are solely responsible for all User Content you submit. We do not endorse, verify, or guarantee the
            accuracy of any User Content, and we are not liable for any loss or damage arising from your reliance on
            User Content submitted by others.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right, but have no obligation, to monitor, review, remove, or refuse any User Content that
            violates these Terms or applicable law, without prior notice to you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Aggregated and De-Identified Data.</span> We may use
            aggregated and de-identified data derived from User Content to improve our models and the Service for
            everyone. Such aggregated and de-identified data is owned by DermicIQ and may be used for any lawful
            purpose, provided that such data does not identify you or any other individual.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Acceptable Use</h2>
          <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Use the Service for any illegal, harmful, or unauthorized purpose;</li>
            <li>
              Upload content that is false, misleading, defamatory, obscene, or infringes intellectual property rights;
            </li>
            <li>
              Attempt to reverse-engineer, decompile, disassemble, or otherwise interfere with the Service, its AI
              models, or any underlying technology;
            </li>
            <li>
              Use automated tools, including bots, scrapers, or data mining techniques, to access the Service without
              our prior written permission;
            </li>
            <li>Share your account credentials or impersonate others, including providing false identity information;</li>
            <li>Collect, harvest, or scrape data from other users without their express consent;</li>
            <li>Upload, transmit, or distribute any content that contains viruses, malware, or other harmful code;</li>
            <li>Interfere with or disrupt the operation of the Service, its servers, or networks;</li>
            <li>
              Use the Service in any manner that could damage, disable, overburden, or impair the Service or interfere
              with any other party&apos;s use of the Service;
            </li>
            <li>
              Upload any User Content that includes personal or sensitive information about another individual without
              their explicit consent; or
            </li>
            <li>
              Use the Service to provide any diagnosis, treatment, or medical advice, or to replace professional
              medical consultation (see Section 10).
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We may remove, refuse, or disable access to any User Content that violates these rules, without prior
            notice. We may also suspend or terminate your account if you violate this Section, in addition to any other
            remedies available to us.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to investigate any suspected violation of this Section and may cooperate with law
            enforcement authorities in connection with such investigations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Service, including its design, software, AI models, text, graphics, logos, and other content (excluding
            your User Content), is owned by DermicIQ or its licensors and is protected by copyright, trademark, and
            other intellectual property laws.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You are granted a limited, personal, non-exclusive, non-transferable, revocable license to use the Service
            for your personal, non-commercial use only. You may not copy, modify, distribute, display, perform,
            publish, create derivative works from, or otherwise exploit any part of the Service without our prior
            written consent, except as expressly permitted by these Terms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            All trademarks, service marks, and logos used on the Service are registered or unregistered marks of DermicIQ
            or their respective owners. Nothing in these Terms grants you any right, title, or interest in or to any
            such marks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Any unauthorized use of the Service or its content may violate intellectual property laws and will terminate
            the license granted under this Section.
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
            data you provide. The Privacy Policy is incorporated into these Terms by reference and is available at{" "}
            <a
              className={linkClass}
              href="https://dermiciq.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://dermiciq.com/privacy
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your consent to our data practices as described in the Privacy Policy is obtained separately and requires
            affirmative, explicit action on your part. Acceptance of these Terms does not constitute consent to our
            collection, use, or disclosure of your personal information.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal data to third parties.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to withdraw your consent to our data practices at any time by contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>{" "}
            or by adjusting your privacy preferences in your account settings. Withdrawal of consent may affect your
            ability to continue using certain features of the Service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, you have additional rights under applicable law, including the right to
            access, correct, and delete your personal information, and to request the cessation of the dissemination of
            your personal information. For more information about your rights, please review our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You should review the Privacy Policy carefully before using the Service. If you do not agree with any part
            of the Privacy Policy, you must not use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We store your data securely and implement reasonable administrative, technical, and physical safeguards to
            protect it against unauthorized access, alteration, disclosure, or destruction. These measures include
            encryption for data in transit and at rest, access controls, and secure data storage infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, no system is completely secure. We cannot guarantee absolute security, and you use the Service at
            your own risk. In the event of a security breach affecting your personal information, we will notify you and
            applicable regulatory authorities in accordance with applicable law, including PIPEDA and Québec Law 25.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Skin profiles are stored long-term to enable continuous personalization and better recommendations. We retain
            your personal information for as long as your account remains active or as needed to provide the Service to
            you, and for a reasonable period thereafter to comply with legal obligations, resolve disputes, and enforce
            our agreements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may request deletion of your data at any time by contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>{" "}
            or through your account settings. We will respond to such requests within 30 days and will delete or
            anonymize your personal information, subject to any legal obligations that require us to retain certain
            data. We will inform you of any exceptions to your deletion request.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not store your data outside of secure environments. When we engage third-party service providers to
            process your data, we contractually require them to maintain equivalent security safeguards and to use your
            data only for the purposes we specify. For more information on cross-border data transfers, please review
            our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Payments, Subscriptions, and Billing</h2>
          <p className="text-foreground font-medium">Payment Methods.</p>
          <p className="text-muted-foreground leading-relaxed">
            Depending on your region and platform, payments for premium features or subscriptions may be processed
            through:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Google Play Billing (for Android users, where required or selected);</li>
            <li>Apple App Store In-App Purchase (for iOS users);</li>
            <li>
              Stripe or another third-party payment processor (for web purchases and, where permitted by applicable
              platform rules, as an alternative billing option on Google Play in supported regions).
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            All payments are subject to the terms of the applicable payment processor. By making a purchase, you agree
            to pay all charges at the prices then in effect for your purchases, and you authorize us or the applicable
            payment processor to charge your payment method for the full amount of your order.
          </p>
          <p className="text-foreground font-medium">Subscriptions and Auto-Renewal.</p>
          <p className="text-muted-foreground leading-relaxed">
            If you purchase a subscription, it will automatically renew at the end of each billing period (e.g., monthly
            or annually) unless you cancel before the renewal date. You will be charged for each renewal period at the
            rate then in effect. We may change subscription prices upon reasonable notice (e.g., via email or in-app
            notification). Price changes will not affect your current subscription period but will apply to subsequent
            renewal periods.
          </p>
          <p className="text-foreground font-medium">Free Trials.</p>
          <p className="text-muted-foreground leading-relaxed">
            If we offer a free trial, your subscription will automatically convert to a paid subscription at the end of
            the trial period unless you cancel before the trial ends. We will notify you of the trial duration and the
            applicable subscription rate before your trial begins.
          </p>
          <p className="text-foreground font-medium">Cancellation.</p>
          <p className="text-muted-foreground leading-relaxed">You may cancel your subscription at any time:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              For Google Play purchases: through your Google Play account settings under &quot;Subscriptions.&quot;
              Cancellation takes effect at the end of the current billing period; you will retain access until that
              date.
            </li>
            <li>
              For Apple App Store purchases: through your Apple ID account settings under &quot;Subscriptions.&quot;
              Cancellation takes effect at the end of the current billing period; you will retain access until that
              date.
            </li>
            <li>
              For web or direct purchases: through your account settings or by contacting us at{" "}
              <a className={linkClass} href="mailto:privacy@dermiciq.com">
                privacy@dermiciq.com
              </a>
              . Cancellation takes effect at the end of the current billing period; you will retain access until that
              date.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            You will not receive a refund for the current billing period if you cancel mid-term, except where required
            by applicable law.
          </p>
          <p className="text-foreground font-medium">Refund Policy.</p>
          <p className="text-muted-foreground leading-relaxed">
            All subscription fees are non-refundable, except as required by applicable law or as expressly stated in
            this Section:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Google Play Purchases:</span> Refunds are subject to Google
            Play&apos;s refund policy, which generally allows refunds within 48 hours of purchase. After this period,
            refunds are at our discretion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Apple App Store Purchases:</span> Refunds are subject to
            Apple&apos;s refund policy and must be requested directly through Apple.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Web or Direct Purchases:</span> Refund requests are handled
            on a case-by-case basis and are at our sole discretion, except where required by applicable law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Statutory Rights:</span> Nothing in this Section limits your
            statutory rights under applicable consumer protection laws, including the right to cancel a subscription
            within the cooling-off period where such rights apply.
          </p>
          <p className="text-foreground font-medium">Price Changes.</p>
          <p className="text-muted-foreground leading-relaxed">
            We may change subscription prices at any time. We will provide you with reasonable notice of any price
            change (e.g., via email or in-app notification) before the change takes effect. If you do not agree to the
            price change, you may cancel your subscription before the change takes effect. Your continued use of the
            subscription after the price change takes effect constitutes your acceptance of the new price.
          </p>
          <p className="text-foreground font-medium">Taxes.</p>
          <p className="text-muted-foreground leading-relaxed">
            All prices are exclusive of applicable taxes, fees, or duties, which may be added to your order. You are
            responsible for all taxes and fees associated with your purchase to the extent permitted by law.
          </p>
          <p className="text-foreground font-medium">Payment Processor Terms.</p>
          <p className="text-muted-foreground leading-relaxed">
            By using a third-party payment processor, you agree to be bound by their terms of service and privacy
            policies. We are not responsible for the collection, use, or disclosure of your payment information by such
            third parties. We do not store full payment card information on our servers.
          </p>
          <p className="text-foreground font-medium">Failure to Pay.</p>
          <p className="text-muted-foreground leading-relaxed">
            If your payment method fails or your account is past due, we may suspend or terminate your access to paid
            features until payment is received. We may also charge you for any fees incurred in connection with the
            collection of past due amounts.
          </p>
          <p className="text-foreground font-medium">Questions.</p>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about payments, subscriptions, or billing, please contact us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. Termination</h2>
          <p className="text-foreground font-medium">Termination by You.</p>
          <p className="text-muted-foreground leading-relaxed">
            You may stop using the Service and delete your account at any time through your account settings or by
            contacting us at{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
            .
          </p>
          <p className="text-foreground font-medium">Subscription Cancellation.</p>
          <p className="text-muted-foreground leading-relaxed">
            If you have an active subscription, you must cancel it separately through your account settings or the
            applicable payment platform (e.g., Google Play, Stripe). Canceling your subscription will stop future
            billing, but you will retain access to premium features until the end of your current billing period.
          </p>
          <p className="text-foreground font-medium">Account Deletion.</p>
          <p className="text-muted-foreground leading-relaxed">
            Deleting your account will terminate your right to use the Service immediately, including any active
            subscriptions. You will not receive a refund for unused subscription time unless required by applicable law.
          </p>
          <p className="text-foreground font-medium">Termination by Us.</p>
          <p className="text-muted-foreground leading-relaxed">
            We may suspend or terminate your access to the Service, with or without notice, if you violate these Terms,
            engage in harmful conduct, or for any other reason at our sole discretion. We may also terminate your
            account if we discontinue the Service or any part thereof. Upon termination by us, your right to use the
            Service ends immediately.
          </p>
          <p className="text-foreground font-medium">Effect of Termination.</p>
          <p className="text-muted-foreground leading-relaxed">Upon termination for any reason:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              Your account will be deactivated and you will no longer be able to access your account or User Content
              through the Service;
            </li>
            <li>
              We will delete or anonymize your personal information in accordance with our Privacy Policy, except where
              we are required by law or legitimate business purposes to retain certain information (such as to comply
              with legal obligations, resolve disputes, or enforce our agreements);
            </li>
            <li>
              You remain responsible for any obligations incurred prior to termination, including any purchases or
              commitments made through the Service; and
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The following Sections survive termination: User Content (Section 4), Intellectual Property (Section 6),
            Disclaimers (Section 10), Limitation of Liability (Section 11), Governing Law (Section 12), and any other
            provisions that by their nature should survive.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Upon termination, you must cease all use of the Service and destroy any copies of any content obtained from
            the Service in your possession.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">11. Disclaimers &amp; No Medical Advice</h2>
          <p className="font-semibold text-foreground leading-relaxed">
            IMPORTANT: DERMICIQ IS NOT A MEDICAL SERVICE. DERMICIQ DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR
            TREATMENT.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The Service provides general wellness information and AI-generated insights based on the data you provide. It
            is not a substitute for professional medical advice, diagnosis, or treatment from a qualified dermatologist
            or healthcare provider. Nothing contained in the Service should be construed as medical advice, and no
            information provided through the Service is intended to create a physician-patient relationship.
          </p>
          <p className="text-muted-foreground leading-relaxed">You should not:</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              Use the Service to diagnose skin conditions, diseases, or any medical condition, or to replace clinical
              care;
            </li>
            <li>Rely on AI recommendations as definitive, medically validated, or suitable for all individuals;</li>
            <li>
              Assume results will be consistent across all individuals, as they vary based on individual biology,
              environment, and other factors; or
            </li>
            <li>
              Make significant changes to your skincare routine, use new products, or discontinue existing treatments
              without consulting a licensed healthcare professional, especially if you have existing medical conditions,
              allergies, are pregnant, or are nursing.
            </li>
            <li>
              In the event of a medical emergency, immediately contact your local emergency services. Do not use the
              Service for urgent medical needs.
            </li>
          </ul>
          <p className="text-foreground font-medium">Disclaimer of Warranties.</p>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied,
            including warranties of accuracy, reliability, merchantability, fitness for a particular purpose, and
            non-infringement. The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do
            not warrant that the Service will meet your specific needs, be accurate, complete, timely, or error-free,
            or that it will be uninterrupted, secure, or free from viruses or other harmful components. Your use of the
            Service is at your own risk.
          </p>
          <p className="text-foreground font-medium">No Guarantee of Results.</p>
          <p className="text-muted-foreground leading-relaxed">
            We do not guarantee that the Service will produce any specific outcomes or improvements to your skin or
            health. Any examples, case studies, or testimonials provided on the Service are for illustrative purposes
            only and do not constitute a guarantee or prediction of your results.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Some jurisdictions do not allow the exclusion of certain warranties, so the above limitations may not apply
            to you to the extent prohibited by law. In such cases, our liability is limited to the fullest extent
            permitted by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">12. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by applicable law, DermicIQ and its affiliates, directors, officers,
            employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages (including, without limitation, loss of data, loss of profits, loss of business, loss of
            goodwill, or any adverse skin health outcomes) arising out of or related to your use of or inability to use
            the Service, even if we have been advised of the possibility of such damages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our total aggregate liability to you, whether in contract, tort (including negligence), or otherwise, shall
            not exceed the greater of (a) CAD $100, or (b) the total amounts you paid to us (if any) in the twelve (12)
            months preceding the event giving rise to the claim.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations
            may not apply to you to the extent prohibited by applicable law. In such cases, our liability is limited to
            the fullest extent permitted by law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The limitations set forth in this Section are fundamental elements of the bargain between you and
            DermicIQ. These limitations apply even if a remedy fails its essential purpose. You acknowledge that we
            would not be able to provide the Service on an economically viable basis without these limitations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">13. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable
            therein, without regard to conflict of laws principles.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Any disputes arising from these Terms or your use of the Service shall be resolved exclusively in the courts
            located in Ontario, Canada. You agree to submit to the personal jurisdiction of such courts for the purpose
            of litigating any such disputes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, you retain any rights you may have under applicable consumer protection
            laws, including the right to bring proceedings in your own jurisdiction. Nothing in this Section is intended
            to restrict or limit your rights under applicable law, including Québec&apos;s Consumer Protection Act or the
            Civil Code of Québec, to the extent such rights cannot be waived.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You agree that, to the extent permitted by law, any claim or cause of action arising out of or related to
            these Terms or the Service must be filed within one (1) year after such claim or cause of action arose, or
            it will be forever barred.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The United Nations Convention on Contracts for the International Sale of Goods does not apply to these
            Terms or your use of the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            14. Third-Party Data Sources and Attribution
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Service may display product information, including ingredient lists, brand names, product descriptions,
            and safety ratings (irritancy and comedogenicity scores), sourced from third-party databases, including:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              Open Beauty Facts (
              <a
                className={linkClass}
                href="https://world.openbeautyfacts.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://world.openbeautyfacts.org
              </a>
              ), an open, collaborative database of cosmetic products; and
            </li>
            <li>
              The Beauty API (
              <a
                className={linkClass}
                href="https://thebeautyapi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://thebeautyapi.com
              </a>
              ), a licensed dataset of skincare and beauty products.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Product data is provided for informational purposes only and is not guaranteed to be accurate, complete, or
            up-to-date. We do not endorse, verify, or assume responsibility for the accuracy of any third-party product
            information displayed through the Service. You should always check product labels and packaging before
            using any skincare product.
          </p>
          <p className="text-foreground font-medium">Open Beauty Facts Attribution.</p>
          <p className="text-muted-foreground leading-relaxed">
            Product information sourced from Open Beauty Facts is used in accordance with the Open Database License
            (ODbL). Attribution is provided via links to the Open Beauty Facts product page for each referenced product.
            We do not rehost or modify Open Beauty Facts images or product records beyond what is necessary to provide
            the Service. We do not use Open Beauty Facts data for medical purposes.
          </p>
          <p className="text-foreground font-medium">The Beauty API Attribution.</p>
          <p className="text-muted-foreground leading-relaxed">
            Product information sourced from The Beauty API is used under a commercial license. We do not redistribute,
            resell, or publicly host the raw dataset files. The Beauty API data is provided &quot;as is&quot; and is
            used solely to enrich the product catalog available through the Service. Attribution to The Beauty API is
            provided where reasonably practicable.
          </p>
          <p className="text-foreground font-medium">Third-Party Rights.</p>
          <p className="text-muted-foreground leading-relaxed">
            The product information displayed through the Service may be subject to intellectual property rights owned
            by third parties. Nothing in these Terms grants you any rights to such third-party intellectual property.
          </p>
          <p className="text-foreground font-medium">Data Accuracy Disclaimer.</p>
          <p className="text-muted-foreground leading-relaxed">
            All product information, including ingredient lists and safety ratings, is sourced from third-party databases
            and may contain errors or omissions. We recommend that you verify all product information directly with the
            manufacturer or by reading the product label before use.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">15. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms periodically to reflect changes in our Service, business practices, or legal
            requirements. We will notify you of material changes by:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Posting the new Terms on our website and updating the Effective Date;
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              If you have an account, sending you an email notification to the address associated with your account; and
            </li>
            <li>Displaying a prominent notice within the Service before the changes take effect.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For material changes, you will be required to affirmatively re-accept the revised Terms before continuing to
            use the Service. Your continued use of the Service after the changes take effect without re-acceptance will
            not constitute acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop
            using the Service and delete your account.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Changes to these Terms are effective immediately upon posting, except for material changes, which will be
            effective thirty (30) days after we notify you, unless we indicate otherwise. We will maintain a version
            history and change log for these Terms, which you may access upon request.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are a resident of Québec, we will provide you with notice of any material changes in a manner that
            complies with applicable law, and you may have additional rights to withdraw from the agreement if the
            changes are adverse to you and were not reasonably anticipated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">16. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms, the Service, or your privacy rights, please contact us at:
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span>
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
          <p className="text-muted-foreground leading-relaxed">
            For data privacy, access, correction, deletion requests, or to withdraw your consent, please email:{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We will respond to your inquiry or request within thirty (30) days, as required by applicable law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are not satisfied with our response to a privacy concern, you have the right to file a complaint with
            the Office of the Privacy Commissioner of Canada (OPC). If you are a resident of Québec, you may also file
            a complaint with the Commission d&apos;accès à l&apos;information du Québec (CAI). We encourage you to first
            attempt to resolve any issue directly with us before contacting a supervisory authority.
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
            For billing, subscription, or refund inquiries, please contact us at{" "}
            <a className={linkClass} href="mailto:support@dermiciq.com">
              support@dermiciq.com
            </a>{" "}
            (or{" "}
            <a className={linkClass} href="mailto:privacy@dermiciq.com">
              privacy@dermiciq.com
            </a>{" "}
            if no separate support email is available).
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
