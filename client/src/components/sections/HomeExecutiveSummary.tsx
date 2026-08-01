import { siteContent } from "@/config/siteContent";

export function HomeExecutiveSummary() {
  const { executiveSummary: s } = siteContent.home;

  return (
    <section id={s.id} className="py-12 lg:py-16 bg-background">
      <div className="container-content max-w-3xl">
        <h2 className="text-section lg:text-section-lg text-foreground mb-8">{s.title}</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-body-lg">
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
