import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

export default function Cookies() {
  return (
    <Layout>
      <SEO
        title="Cookie Policy | Dermiciq Technologies Inc."
        description="How Dermiciq Technologies Inc. uses cookies on this website."
        path="/cookies"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-cookies-headline">
              Cookie policy
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">What are cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. They are widely used to
                  make sites work efficiently and to provide information to site operators.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How we use cookies</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Essential cookies:</strong> required for core site functionality and security.
                  </li>
                  <li>
                    <strong>Analytics cookies (optional):</strong> help us understand aggregate traffic patterns so we
                    can improve the site. We do not use third-party advertising cookies on this marketing site.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control cookies through your browser settings. Blocking essential cookies may affect site
                  behavior.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Questions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contact hello@dermiciq.com for questions about this policy.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
