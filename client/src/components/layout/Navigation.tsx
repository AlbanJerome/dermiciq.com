import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteContent } from "@/config/siteContent";

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

  /**
   * High-contrast nav text on primary header for WCAG AA.
   * Accent (logo turquoise) used as active indicator, not as link fill.
   */
  const navLinkClass = (path: string) =>
    `text-sm font-semibold tracking-wide transition-colors text-primary-foreground hover:text-primary-foreground ${
      location === path
        ? "border-b-2 border-accent pb-0.5"
        : "border-b-2 border-transparent pb-0.5"
    }`;

  const mobileNavLinkClass = (path: string) =>
    `text-lg font-semibold py-3 border-b transition-colors text-primary-foreground hover:text-primary-foreground ${
      location === path ? "border-accent" : "border-primary-foreground/20"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary-foreground/10 bg-primary ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container-content flex items-center justify-between header-bar">
        <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0" data-testid="link-logo">
          <BrandLogo size="nav" />
          <span className="hidden sm:flex flex-col min-w-0 leading-tight">
            <span className="text-sm font-bold text-primary-foreground tracking-tight truncate">
              {brand.shortName}
            </span>
            <span className="text-nav-caption uppercase text-primary-foreground/75">
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
          <Button size="sm" variant="inverse" asChild>
            <a
              href={navigation.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={navigation.cta.label}
            >
              {navigation.cta.label}
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-primary z-40 border-t border-primary-foreground/10">
          <nav className="container-content flex flex-col gap-1 py-6">
            {navigation.links.map((link) => (
              <Link key={link.href} href={link.href} className={mobileNavLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full" variant="inverse" asChild>
                <a
                  href={navigation.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={navigation.cta.label}
                >
                  {navigation.cta.label}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
