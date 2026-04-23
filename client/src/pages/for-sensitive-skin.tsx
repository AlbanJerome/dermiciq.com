import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { siteContent } from "@/config/siteContent";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ForSensitiveSkinPage() {
  const p = siteContent.pages.forSensitiveSkin;

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/for-sensitive-skin" />

      <header className="py-16 lg:py-24 bg-gradient-to-br from-accent/25 via-background to-secondary/40 border-b border-border/60">
        <div className="container-content max-w-3xl">
          <h1 className="text-section lg:text-section-lg text-foreground mb-6">{p.headline}</h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{p.subhead}</p>
        </div>
      </header>

      <div className="py-16 lg:py-24 bg-background space-y-16">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{p.currentLandscapeTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{p.currentLandscapeIntro}</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            {p.currentLandscapeBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="container-content max-w-3xl">
          <Card className="p-8 border-border/80 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{p.whyFailsTitle}</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              {p.whyFailsBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.whyFailsClosing}</p>
          </Card>
        </div>

        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{p.gapTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{p.gapIntro}</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            {p.gapBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">{p.gapClosing}</p>
        </div>

        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{p.solutionTitle}</h2>
          {p.solutionParagraphs.map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/how-it-works">How Dermiciq works</Link>
            </Button>
            <Button variant="outline" className="border-primary/30" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
