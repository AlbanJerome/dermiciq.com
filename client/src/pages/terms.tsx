import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Dermiciq Technologies"
        description="Terms and conditions for using the Dermiciq skincare intelligence platform."
        path="/terms"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-terms-headline">
              Terms of Service
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">Welcome to Dermiciq</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using Dermiciq, you agree to these terms. We've tried to keep them clear and fair. If something doesn't make sense, please reach out and ask.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Dermiciq Is</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dermiciq is a skincare ingredient intelligence platform. We help you understand how ingredients in skincare products might affect your unique skin. Our analysis is personalized based on the sensitivities you share with us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Dermiciq Is Not</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dermiciq is not medical advice. Our recommendations are based on ingredient analysis and your reported sensitivities, but they don't replace professional medical guidance. If you have serious skin concerns, please consult a dermatologist.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Account</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You're responsible for keeping your login credentials secure</li>
                  <li>The information you provide should be accurate</li>
                  <li>You can delete your account at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>We provide honest, unbiased ingredient analysis</li>
                  <li>We don't accept payment from brands for favorable ratings</li>
                  <li>We continually improve our analysis based on the latest research</li>
                  <li>We protect your personal data as outlined in our Privacy Policy</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please use Dermiciq for its intended purpose: understanding skincare ingredients. Don't attempt to reverse-engineer our technology, scrape our data, or use our service for commercial purposes without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms from time to time. We'll notify you of significant changes via email or through the app.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions? Reach out at contact@dermiciq.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
