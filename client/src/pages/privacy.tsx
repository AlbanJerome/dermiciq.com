import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | Dermiciq Technologies Inc."
        description="How Dermiciq Technologies Inc. handles information collected through this website."
        path="/privacy"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
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
            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your privacy matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dermiciq Technologies Inc. (“Dermiciq”) respects your privacy. This policy describes information we may
                  collect when you use this website, how we use it, and your choices.
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
                  <li>To improve our website and communications</li>
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
                  You can request access to, correction of, or deletion of your personal data where applicable by
                  contacting hello@dermiciq.com.
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
                  Questions about this policy may be directed to hello@dermiciq.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
