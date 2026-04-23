import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Use | Dermiciq Technologies Inc."
        description="Terms governing use of the Dermiciq Technologies Inc. public website."
        path="/terms"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-terms-headline">
              Terms of use
            </h1>
            <p className="text-body-lg text-muted-foreground">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-content max-w-4xl">
          <Card className="p-8 lg:p-12">
            <div className="prose prose-slate max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing this website, you agree to these terms of use. If you do not agree, please do not use the
                  site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Informational content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website describes Dermiciq Technologies Inc. and the Dermiciq™ ingredient-intelligence concept for
                  general informational purposes. Nothing here constitutes medical advice, an offer to sell securities,
                  or a solicitation to invest.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Forward-looking statements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any statements regarding future product capabilities, timelines, or business plans may be
                  forward-looking and are subject to risks and uncertainties. Actual results may differ materially.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dermiciq™ and related marks are trademarks of Dermiciq Technologies Inc. or their respective owners. Content on this site is protected
                  by copyright and may not be copied or redistributed without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these terms may be directed to hello@dermiciq.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
