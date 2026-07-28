import { siteContent } from "@/config/siteContent";
import { Card } from "@/components/ui/card";

export function HomeTargetUsers() {
  const { targetUsers: t } = siteContent.home;

  return (
    <section id={t.id} className="py-20 lg:py-28 bg-secondary/50 border-y border-border/60">
      <div className="container-content max-w-4xl">
        <h2 className="text-section lg:text-section-lg text-foreground mb-10">{t.title}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 border-border/80 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.primaryTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
              {t.primaryBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border-border/80 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.secondaryTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
              {t.secondaryBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
