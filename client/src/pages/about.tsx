import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { siteContent } from "@/config/siteContent";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const p = siteContent.pages.about;

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/about" />

      <header className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-background to-background border-b border-border/60">
        <div className="container-content max-w-3xl">
          <h1 className="text-section lg:text-section-lg text-foreground mb-6">{p.headline}</h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{siteContent.brand.description}</p>
        </div>
      </header>

      <article className="py-16 lg:py-24 bg-background">
        <div className="container-content max-w-3xl space-y-16">
          {p.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
              {"body" in section && section.body ? (
                <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
              ) : null}
              {"paragraphs" in section && section.paragraphs
                ? section.paragraphs.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mt-4 first:mt-0">
                      {para}
                    </p>
                  ))
                : null}
            </section>
          ))}

          <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Regulatory & ethical boundaries</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {siteContent.home.productEthical.ethicalIntro}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {siteContent.home.productEthical.ethicalBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">{siteContent.home.productEthical.ethicalClosing}</p>
          </section>

          <Button variant="outline" className="border-primary/30" asChild>
            <Link href="/">← Back to home</Link>
          </Button>
        </div>
      </article>
    </Layout>
  );
}
