import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";

/**
 * Unlisted legal page (not linked from nav/footer).
 * Opened from Become a Partner → “Learn How It Works”.
 */
export default function AffiliatePartnerAgreement() {
  return (
    <Layout>
      <SEO
        title="Affiliate Partner Agreement | DermicIQ"
        description="DermicIQ Technologies Inc. Affiliate Partner Agreement terms for approved aesthetic-industry partner businesses."
        path="/affiliate-partner-agreement"
        noIndex
      />

      <ContentPageHeader title="Affiliate Partner Agreement" titleTestId="text-affiliate-agreement-headline">
        <p className="text-sm text-muted-foreground">
          DermicIQ Technologies Inc. — Effective Date: the date the Affiliate completes online registration and
          accepts this Agreement by clicking &quot;I Agree&quot;
        </p>
      </ContentPageHeader>

      <ContentPageBody>
        <section className="space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            This Affiliate Partner Agreement is entered into by{" "}
            <span className="text-foreground font-medium">DermicIQ Technologies Inc.</span> (&quot;DermicIQ,&quot;
            &quot;the Company,&quot; &quot;we,&quot; or &quot;us&quot;), a business operating in Etobicoke, Ontario,
            Canada, and the Affiliate Business identified during the online registration process (the
            &quot;Affiliate,&quot; &quot;Affiliate Partner,&quot; &quot;you,&quot; or &quot;your&quot;) (each a
            &quot;Party&quot; and together the &quot;Parties&quot;).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">1. Purpose and Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            DermicIQ operates a mobile and/or web application (the &quot;DermicIQ App&quot;) that provides skincare
            and aesthetic-related tools to consumers through an annual, customer-paid subscription membership (the
            &quot;Membership&quot;). DermicIQ wishes to partner with aesthetic-industry businesses — including but not
            limited to medical spas, day spas, aesthetic institutions, skincare clinics, and similar businesses (each,
            an &quot;Affiliate Business&quot;) to promote the Membership to their client base in exchange for the
            commissions described in this Agreement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By agreeing to this Agreement, the Affiliate agrees to promote DermicIQ to its clients in accordance with
            the terms below, and DermicIQ agrees to compensate the Affiliate as set out in Section 4.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">2. Definitions</h2>
          <p className="text-muted-foreground leading-relaxed">
            2.1 &quot;Affiliate Discount Code&quot; means the unique, single-use-per-customer discount code issued to
            the Affiliate under Section 3, redeemable only by the Affiliate&apos;s own client base.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            2.2 &quot;Membership Account&quot; means a single, individual customer account registered on the DermicIQ
            App.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            2.3 &quot;Partner Portal&quot; means the online dashboard provided by DermicIQ to the Affiliate for
            tracking discount code usage and commission balances.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            2.4 &quot;Initial Commission&quot; means the $5.00 CAD commission described in Section 4.3.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            2.5 &quot;Renewal Commission&quot; means the $10.00 CAD commission described in Section 4.4.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">3. Appointment as Affiliate Partner</h2>
          <p className="text-muted-foreground leading-relaxed">
            3.1 Approval. The Affiliate&apos;s participation in the DermicIQ Affiliate Partner Program (the
            &quot;Program&quot;) is subject to review and approval by DermicIQ in its sole discretion. DermicIQ may
            decline any prospective affiliate for any reason.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            3.2 Issuance of Discount Code. Upon approval and online acceptance of this Agreement, DermicIQ will issue
            the Affiliate a unique Affiliate Discount Code. This code is intended for use exclusively by the
            Affiliate&apos;s own clients. The Affiliate may promote the code through its own social media channels,
            website, and email marketing to its client base, but may not:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Post the code on public coupon websites, deal forums, or other mass-market public platforms;</li>
            <li>Resell the code to any third party;</li>
            <li>Distribute the code to any person who is not a genuine client of the Affiliate;</li>
            <li>Use the code for the Affiliate&apos;s own personal purchases or employee purchases.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            3.3 Partner Portal Access. Upon online acceptance of this Agreement, the Affiliate will be granted access
            to the Partner Portal, where the Affiliate can track discount code redemptions and accumulated commission
            balances in real time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            4. Customer Discount and Affiliate Commission Structure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            4.1 Customer Discount. Any customer who uses the Affiliate Discount Code at checkout will receive a 25%
            discount off the standard annual Membership price for their first year.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.2 Initial Commission (First-Year Purchase). When a customer completes an annual Membership purchase using
            the Affiliate Discount Code, the Affiliate will earn an Initial Commission of $5.00 CAD.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.3 Renewal Commission (Second-Year Renewal Only). If that same Membership Account renews its annual
            Membership for a second consecutive year, the Affiliate will earn an additional Renewal Commission of
            $10.00 CAD, payable in accordance with Section 5.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.4 No Commission on Subsequent Renewals. The Renewal Commission described in Section 4.3 applies only to
            the second-year renewal of a given Membership Account. No commission of any kind will be paid on the
            third-year renewal or any renewal thereafter.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.5 Account Continuity Requirement. Commission eligibility under Sections 4.2 and 4.3 is tied to a single,
            continuous Membership Account. If a customer cancels their Membership and later creates a new or separate
            Membership Account, that new account will be treated as an entirely new, first-time purchase (eligible only
            for a new Initial Commission, if applicable, and not for any Renewal Commission) and will not carry
            forward any prior commission history.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.6 Discount Code Integrity. The Affiliate agrees not to use the Affiliate Discount Code for personal
            purchases, to misrepresent client eligibility, or to engage in any practice intended to generate
            commissions artificially. DermicIQ reserves the right to withhold or reverse commissions, and to suspend or
            terminate this Agreement, if it reasonably determines that the Affiliate Discount Code has been misused or
            that commissions were generated fraudulently.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            4.7 Refunds. If the customer who owns a Membership Account requests and receives a refund for their annual
            Membership within 30 days of the original purchase date, the $5.00 CAD Initial Commission associated with
            that purchase will be deducted from the Affiliate&apos;s current, unpaid commission balance. Refunded
            commissions will only ever be deducted from a future payout — they will never be deducted or clawed back
            from a commission payout that has already been made to the Affiliate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">5. Commission Payment Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            5.1 Tracking. All discount code redemptions, commission accruals, and refund adjustments will be tracked
            and made visible to the Affiliate through the Partner Portal.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            5.2 Payment Threshold and Payout Amount. Commission is paid out in fixed increments of $100.00 CAD. Each
            time the Affiliate&apos;s accumulated, unpaid commission balance reaches $100.00 CAD, a payout of exactly
            $100.00 CAD will be issued. Any balance above $100.00 CAD at that time is not included in that payout and
            instead carries forward toward the next $100.00 CAD threshold.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            5.3 Payment Timing. Once a $100.00 CAD threshold has been reached, DermicIQ will deposit the corresponding
            $100.00 CAD payout to the Affiliate via direct deposit within ten (10) business days.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            5.4 Direct Deposit Information. The Affiliate must provide accurate and complete direct deposit payment
            information during the online registration process. The Affiliate is responsible for ensuring this
            information remains accurate and up to date, and for promptly notifying DermicIQ in writing of any
            changes. DermicIQ is not responsible for payment delays or misdirected payments resulting from inaccurate
            or outdated information supplied by the Affiliate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            5.5 Taxes. The Affiliate is solely responsible for determining and remitting any applicable taxes owed on
            commissions received under this Agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">6. Marketing Materials and Branding</h2>
          <p className="text-muted-foreground leading-relaxed">
            6.1 Display Obligation. The Affiliate may visibly display DermicIQ-provided marketing materials (e.g.,
            signage, cards, QR codes, or similar promotional items) within its place of business. At a minimum,
            DermicIQ requests that such materials be displayed at or near the client checkout area.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            6.2 Provided Materials. DermicIQ will supply the Affiliate with approved marketing materials for this
            purpose at no cost to the Affiliate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            6.3 Limited License. DermicIQ grants the Affiliate a limited, non-exclusive, non-transferable, revocable
            license to display the marketing materials it provides solely for the purpose of promoting the DermicIQ
            Membership under this Agreement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            6.4 Additional Use of Branding. Any use of DermicIQ&apos;s name, logo, trademarks, or branding beyond the
            marketing materials expressly provided for display under Section 6.1 — including in the Affiliate&apos;s
            own advertising, social media, website, or promotional campaigns — requires prior discussion and written
            approval between authorized representatives of both Parties.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            6.5 No Misrepresentation. The Affiliate will not make any representation, claim, or guarantee regarding the
            DermicIQ App or Membership that is false, misleading, or unauthorized. Without limiting the generality of
            the foregoing, the Affiliate shall not make any medical, clinical, or health-related claim that the
            DermicIQ App diagnoses, treats, cures, or prevents any disease or condition. The Affiliate may make factual
            statements about the App&apos;s functionality, such as: &quot;DermicIQ helps you understand how cosmetic
            ingredients relate to your personal skin profile.&quot;
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">7. Term and Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            7.1 Term. This Agreement begins on the Effective Date and continues indefinitely on an ongoing basis,
            unless and until ended in accordance with this Section 7.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            7.2 Termination by Mutual Discussion. Either Party may propose to end the partnership at any time, and the
            partnership will end upon mutual discussion and agreement between representatives of DermicIQ and the
            Affiliate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            7.3 Termination by DermicIQ. Notwithstanding Section 7.2, DermicIQ reserves the right to terminate this
            Agreement at any time, for any reason or no reason, with or without cause, upon thirty (30) days&apos;
            written notice to the Affiliate. DermicIQ may terminate this Agreement immediately, without notice, if the
            Affiliate materially breaches any term of this Agreement and fails to cure such breach within ten (10)
            business days of receiving written notice thereof.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            7.4 Effect of Termination. Upon termination: (a) the Affiliate Discount Code will be deactivated and may no
            longer be used or distributed; (b) the Affiliate must cease displaying and using all DermicIQ marketing
            materials and branding; (c) the Affiliate&apos;s access to the Partner Portal may be revoked; and (d)
            DermicIQ will pay out any commission balance already earned as of the termination date in accordance with
            Section 5, even if that balance is below the $100.00 CAD threshold, within a reasonable time following
            termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">8. Relationship of the Parties</h2>
          <p className="text-muted-foreground leading-relaxed">
            8.1 This Agreement does not create a partnership, joint venture, franchise, agency, or employment
            relationship between DermicIQ and the Affiliate. The Affiliate is an independent business, and neither
            Party has the authority to bind the other or to make commitments on the other&apos;s behalf, except as
            expressly set out in this Agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">9. Affiliate Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed">
            9.1 Comply with all applicable federal, provincial, and municipal laws, regulations, and
            professional/industry standards applicable to its business.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            9.2 Use the Affiliate Discount Code only with its own genuine clients, in good faith.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            9.3 Actively promote and recommend the DermicIQ App to its client base, including through:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>Display of marketing materials under Section 6;</li>
            <li>Verbal or written recommendations by staff;</li>
            <li>Social media, email marketing, website, and other promotional channels (subject to Section 6.4);</li>
            <li>And other reasonable mutually agreed upon methods.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            9.4 Refrain from making false, misleading, or unauthorized statements about DermicIQ, the App, or the
            Membership.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            9.5 Promptly notify DermicIQ of any suspected misuse, fraud, or technical issue relating to the Affiliate
            Discount Code or Partner Portal.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            9.6 Maintain accurate business information for the purposes of commission payment and notify DermicIQ or
            its payment partner, Stripe, promptly of any changes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">10. Confidentiality</h2>
          <p className="text-muted-foreground leading-relaxed">
            10.1 Each Party agrees to keep confidential any non-public business, financial, technical, or customer
            information disclosed by the other Party in connection with this Agreement (&quot;Confidential
            Information&quot;) and to use such information solely for the purpose of performing its obligations under
            this Agreement. This obligation does not apply to information that is or becomes publicly available through
            no fault of the receiving Party, or that is required to be disclosed by law. This confidentiality
            obligation survives termination of this Agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">11. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            11.1 All trademarks, logos, App content, and other intellectual property of DermicIQ remain the exclusive
            property of DermicIQ at all times. Nothing in this Agreement transfers any ownership interest in
            DermicIQ&apos;s intellectual property to the Affiliate. Any goodwill arising from the Affiliate&apos;s use
            of DermicIQ&apos;s branding under Section 6 accrues solely to DermicIQ.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">12. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            12.1 To the maximum extent permitted by law, DermicIQ&apos;s total liability arising out of or relating to
            this Agreement will not exceed the total commission amounts paid or owed to the Affiliate in the twelve
            (12) months preceding the claim. Neither Party will be liable to the other for indirect, incidental,
            special, or consequential damages arising from this Agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">13. Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            13.1 The Affiliate agrees to indemnify and hold DermicIQ harmless from any claims, damages, or expenses
            (including reasonable legal fees) arising from: (a) the Affiliate&apos;s breach of this Agreement; (b) the
            Affiliate&apos;s negligence or misuse of the Affiliate Discount Code or marketing materials; or (c) the
            Affiliate&apos;s violation of applicable law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            13.2 DermicIQ agrees to indemnify and hold the Affiliate harmless from any claims, damages, or expenses
            (including reasonable legal fees) arising from: (a) DermicIQ&apos;s breach of this Agreement; or (b) any
            claim that the DermicIQ App infringes the intellectual property rights of a third party.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">14. Governing Law and Dispute Resolution</h2>
          <p className="text-muted-foreground leading-relaxed">
            14.1 Governing Law. This Agreement is governed by, and will be construed in accordance with, the laws of
            the Province of Ontario and the federal laws of Canada applicable therein, without regard to
            conflict-of-law principles.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            14.2 Jurisdiction. The Parties irrevocably attorn to the exclusive jurisdiction of the courts of the
            Province of Ontario, located in the City of Toronto, for the resolution of any dispute arising out of or
            relating to this Agreement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            14.3 Good-Faith Negotiation. Before initiating formal legal proceedings, the Parties agree to first attempt
            to resolve any dispute through good-faith discussion between authorized representatives.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">15. General Provisions</h2>
          <p className="text-muted-foreground leading-relaxed">
            15.1 Entire Agreement. This Agreement constitutes the entire agreement between the Parties regarding the
            subject matter herein and supersedes all prior discussions, understandings, or agreements, whether written
            or oral.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            15.2 Amendment. This Agreement may only be amended in writing, accepted by authorized representatives of
            both Parties through the DermicIQ platform or in writing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            15.3 Assignment. Neither Party may assign this Agreement without the prior written consent of the other
            Party, except that DermicIQ may assign this Agreement in connection with a merger, acquisition, or sale of
            substantially all its assets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            15.4 Severability. If any provision of this Agreement is found to be invalid or unenforceable, the remaining
            provisions will continue in full force and effect.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            15.5 Force Majeure. Neither Party will be liable for delays or failures in performance resulting from
            causes beyond its reasonable control, including natural disasters, government action, or technical/systems
            outages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            15.6 Notices. All formal notices under this Agreement must be delivered in writing to the business address
            or email address on file for each Party.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">
            By completing the online registration process and clicking &quot;I Agree&quot; or otherwise indicating
            acceptance through the DermicIQ platform, the Affiliate confirms that its representative is duly authorized
            to enter into this Agreement on its behalf, and that it has read, understood, and agrees to be bound by the
            terms above.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">For DermicIQ:</span> This Agreement is accepted and agreed to
            by DermicIQ upon issuance of the Affiliate Discount Code to the Affiliate.
          </p>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
