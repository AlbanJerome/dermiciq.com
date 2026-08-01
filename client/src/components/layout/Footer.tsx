import { Link } from "wouter";
import { siteContent } from "@/config/siteContent";
import { MapPin } from "lucide-react";
import { homeSectionHref } from "@/lib/site";
import { publicAsset } from "@/lib/publicAsset";

export function Footer() {
  const { footer, brand } = siteContent;

  const resolveHref = (link: { href: string; hash?: string }) => {
    if (link.href.startsWith("http")) return link.href;
    if (link.hash) return homeSectionHref(link.hash);
    return link.href;
  };

  return (
    <footer className="bg-footer text-footer-foreground" data-testid="footer">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4" data-testid="link-footer-logo">
              <picture>
                <source type="image/webp" srcSet={publicAsset("logo-96.webp")} />
                <img
                  src={publicAsset("logo-96.png")}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-2xl object-cover shadow-md shrink-0"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <span className="flex flex-col">
                <span className="text-lg font-bold text-footer-foreground leading-tight">{brand.shortName}</span>
                <span className="text-xs text-footer-muted mt-0.5">Technologies Inc.</span>
              </span>
            </Link>
            <p className="text-footer-muted text-sm leading-relaxed mb-4">{footer.tagline}</p>
            <div className="flex items-center gap-2 text-footer-muted text-sm">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span>{footer.location}</span>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-footer-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => {
                  const className =
                    "text-sm text-footer-foreground hover:text-white transition-colors underline-offset-2 hover:underline";
                  const href = resolveHref(link);
                  const isExternal = href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ) : link.href.startsWith("/") && !("hash" in link && link.hash) ? (
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      ) : (
                        <a href={href} className={className}>
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-footer-muted">{footer.copyright}</p>
        <div className="mt-6 border-t border-white/15" aria-hidden />
      </div>
    </footer>
  );
}
