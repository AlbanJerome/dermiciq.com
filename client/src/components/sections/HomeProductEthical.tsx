import { siteContent } from "@/config/siteContent";
import { Card } from "@/components/ui/card";

export function HomeProductEthical() {
  const { productEthical: p } = siteContent.home;

  return (
    <section id={p.id} className="py-20 lg:py-28 bg-background">
      <div className="container-content max-w-4xl space-y-12">
        <h2 className="text-section lg:text-section-lg text-foreground">{p.title}</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-8 border-border/80 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">{p.mvpTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-8">
              {p.mvpBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">{p.exclusionsTitle}</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {p.exclusionsBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">{p.exclusionsClosing}</p>
          </Card>

          <Card className="p-8 border-primary/15 bg-primary/[0.03] shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-3">{p.ethicalTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.ethicalIntro}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-6">
              {p.ethicalBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-8">{p.ethicalClosing}</p>
            <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{p.businessTitle}</h4>
            <p className="text-sm text-muted-foreground mb-3">{p.businessIntro}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {p.businessBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">{p.businessClosing}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
