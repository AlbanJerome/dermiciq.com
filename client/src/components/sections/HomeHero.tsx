import { siteContent } from "@/config/siteContent";

export function HomeHero() {
  const { hero } = siteContent.home;

  return (
    <section
      id={hero.id}
      className="relative min-h-[min(88vh,52rem)] flex items-center overflow-hidden bg-secondary/30"
    >
      <img
        src={hero.imageSrc}
        alt={hero.imageAlt}
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-90"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55"
        aria-hidden
      />
      <div className="relative z-10 container-content w-full py-24 lg:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4">{hero.eyebrow}</p>
        <h1 className="max-w-4xl text-hero lg:text-hero-lg text-foreground mb-6 text-balance">{hero.headline}</h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
          {hero.subhead}
        </p>
      </div>
    </section>
  );
}
