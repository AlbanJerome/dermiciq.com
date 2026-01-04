import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Cookies() {
  return (
    <Layout>
      <SEO
        title="Cookie Policy | Dermiciq Technologies"
        description="How Dermiciq uses cookies and similar technologies to improve your experience."
        path="/cookies"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-cookies-headline">
              Cookie Policy
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit websites. They help us remember your preferences and make Dermiciq work better for you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential cookies:</strong> Keep you logged in and remember your session</li>
                  <li><strong>Preference cookies:</strong> Remember your settings like dark mode preference</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how people use Dermiciq so we can improve</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies We Don't Use</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Third-party advertising cookies</li>
                  <li>Cross-site tracking cookies</li>
                  <li>Social media tracking cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control cookies through your browser settings. Note that disabling essential cookies may affect how Dermiciq works for you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our cookie policy, please contact us at contact@dermiciq.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
