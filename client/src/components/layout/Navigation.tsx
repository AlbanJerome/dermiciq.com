import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { publicAsset } from "@/lib/publicAsset";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { navigation, brand } = siteContent;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /** Nav routes use logo turquoise (#6AEEE8); Contact stays `Button` → primary deep teal (#005F5B). */
  const navLinkClass = (path: string) =>
    `text-sm font-semibold tracking-wide transition-colors ${
      location === path
        ? "text-dermiciq-turquoise"
        : "text-muted-foreground hover:text-dermiciq-turquoise"
    }`;

  const mobileNavLinkClass = (path: string) =>
    `text-lg font-semibold py-3 border-b border-border/60 transition-colors ${
      location === path
        ? "text-dermiciq-turquoise"
        : "text-foreground hover:text-dermiciq-turquoise"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-dermiciq-turquoise/20"
          : "bg-background/90 border-dermiciq-turquoise/15"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 lg:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0" data-testid="link-logo">
          <img
            src={publicAsset("logo.png")}
            alt={brand.shortName}
            width={44}
            height={44}
            className="h-10 w-10 lg:h-11 lg:w-11 rounded-2xl object-cover shadow-sm shrink-0"
          />
          <span className="hidden sm:flex flex-col min-w-0 leading-tight">
            <span className="text-sm font-bold text-foreground tracking-tight truncate">{brand.shortName}</span>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
              Technologies Inc.
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.links.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="font-semibold" asChild>
            <a href={`mailto:${navigation.contactEmail}`}>Contact</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg z-40 border-t border-border">
          <nav className="container-content flex flex-col gap-1 py-6">
            {navigation.links.map((link) => (
              <Link key={link.href} href={link.href} className={mobileNavLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full font-semibold" asChild>
                <a href={`mailto:${navigation.contactEmail}`}>Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
