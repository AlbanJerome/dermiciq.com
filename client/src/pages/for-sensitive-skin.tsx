import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
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

      <ContentPageHeader
        title={p.headline}
        contentClassName="max-w-4xl"
        washClassName="bg-gradient-to-br from-accent/25 via-background to-secondary/40"
      >
        <p className="text-body-lg text-muted-foreground leading-relaxed">{p.subhead}</p>
      </ContentPageHeader>

      <ContentPageBody>
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{p.currentLandscapeTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{p.currentLandscapeIntro}</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {p.currentLandscapeBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section>
          <Card className="p-6 sm:p-8 border-border/80 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">{p.whyFailsTitle}</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6 leading-relaxed">
              {p.whyFailsBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">{p.whyFailsClosing}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{p.gapTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{p.gapIntro}</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            {p.gapBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">{p.gapClosing}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{p.solutionTitle}</h2>
          {p.solutionParagraphs.map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/how-it-works">How DermicIQ works</Link>
            </Button>
          </div>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
