import { siteContent } from "@/config/siteContent";
import { Card } from "@/components/ui/card";

export function HomeKeyDifferentiators() {
  const { keyDifferentiators: k } = siteContent.home;

  return (
    <section id={k.id} className="py-12 lg:py-16 bg-secondary/40">
      <div className="container-content">
        <h2 className="text-section lg:text-section-lg text-foreground mb-8 text-center max-w-2xl mx-auto">
          {k.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {k.items.map((item) => (
            <Card key={item.title} className="p-6 border-border/80 h-full flex flex-col shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
              {item.kind === "bullets" ? (
                <>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground flex-1 leading-relaxed">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {"footer" in item && item.footer ? (
                    <p className="text-muted-foreground mt-4 pt-4 border-t border-border/60 leading-relaxed">
                      {item.footer}
                    </p>
                  ) : null}
                </>
              ) : (
                <>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{item.intro}</p>
                  <ul className="space-y-2 text-muted-foreground mb-4 leading-relaxed">
                    {item.examples.map((ex) => (
                      <li key={ex} className="border-l-2 border-primary/25 pl-3 italic">
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-auto leading-relaxed">{item.closing}</p>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
