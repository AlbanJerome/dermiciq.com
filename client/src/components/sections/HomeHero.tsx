import { siteContent } from "@/config/siteContent";
import { publicAsset } from "@/lib/publicAsset";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const { hero } = siteContent.home;
  const { href, label } = hero.cta;
  const openInNewTab = href.startsWith("http://") || href.startsWith("https://");

  const hero1200Webp = publicAsset("images/hero-1200.webp");
  const hero1920Webp = publicAsset("images/hero-1920.webp");
  const hero1200Jpg = publicAsset("images/hero-1200.jpg");
  const hero1920Jpg = publicAsset("images/hero-1920.jpg");

  return (
    <section
      id={hero.id}
      className={cn(
        "relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden",
        "pt-16 pb-12 sm:pt-20 sm:pb-14"
      )}
    >
      <picture>
        <source
          type="image/webp"
          srcSet={`${hero1200Webp} 1200w, ${hero1920Webp} 1920w`}
          sizes="100vw"
        />
        <source
          type="image/jpeg"
          srcSet={`${hero1200Jpg} 1200w, ${hero1920Jpg} 1920w`}
          sizes="100vw"
        />
        <img
          src={hero1200Jpg}
          alt=""
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_40%,transparent_20%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 md:px-8">
        <h1
          className={cn(
            "text-balance text-primary-foreground",
            "text-hero-mobile sm:text-hero lg:text-hero-lg"
          )}
        >
          {hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-body-lg text-primary-foreground/90 sm:mt-6 sm:text-xl md:text-2xl md:leading-relaxed">
          {hero.subhead}
        </p>
        <Button asChild size="pill-lg" className="mt-10 sm:mt-12">
          <a
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
          >
            {label}
          </a>
        </Button>
      </div>
    </section>
  );
}
