import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { siteContent } from "@/config/siteContent";

export default function NotFound() {
  const { notFound } = siteContent;

  return (
    <Layout>
      <SEO
        title={`${notFound.headline} | Dermiciq Technologies`}
        description={notFound.description}
        path="/404"
      />

      <section className="min-h-[80vh] flex items-center justify-center py-16 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <Card className="max-w-md mx-auto p-12 text-center" data-testid="card-404">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-dermiciq-turquoise/20 to-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">404</span>
            </div>

            <h1
              className="text-2xl font-bold text-foreground mb-4"
              data-testid="text-404-headline"
            >
              {notFound.headline}
            </h1>
            <p className="text-muted-foreground mb-8">
              {notFound.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button data-testid="button-go-home">
                  <Home className="mr-2 h-4 w-4" />
                  {notFound.homeButton}
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                data-testid="button-go-back"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {notFound.backButton}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
