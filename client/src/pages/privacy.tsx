import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | Dermiciq Technologies"
        description="Learn how Dermiciq protects your personal information and skin sensitivity data."
        path="/privacy"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-privacy-headline">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-content max-w-4xl">
          <Card className="p-8 lg:p-12">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Privacy Matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Dermiciq, we take your privacy seriously. Your skin sensitivity data is personal, and we treat it with the utmost care. This policy explains what information we collect, how we use it, and your rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account information (email, name) when you sign up</li>
                  <li>Skin sensitivity preferences and conditions you share with us</li>
                  <li>Products you scan or search for</li>
                  <li>Your feedback on ingredient recommendations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To personalize your ingredient analysis and recommendations</li>
                  <li>To improve our detection of hidden ingredient triggers</li>
                  <li>To send you important updates about your account</li>
                  <li>To make Dermiciq smarter and more helpful over time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Never Do</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Sell your personal data to third parties</li>
                  <li>Share your skin sensitivity information with brands</li>
                  <li>Use your data for targeted advertising</li>
                  <li>Allow brands to pay for access to user profiles</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can request access to, correction of, or deletion of your personal data at any time. Simply contact us at contact@dermiciq.com and we'll respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use industry-standard encryption to protect your data both in transit and at rest. Your skin sensitivity profile is stored securely and is only accessible to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy or your data, please reach out to us at contact@dermiciq.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
