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

  /**
   * High-contrast nav text (#FFFFFF) on dark teal header for WCAG AA.
   * Logo turquoise used as active indicator (bottom border), not as link fill color.
   */
  const navLinkClass = (path: string) =>
    `text-sm font-semibold tracking-wide transition-colors text-white hover:text-white ${
      location === path
        ? "border-b-2 border-DermicIQ-turquoise pb-0.5"
        : "border-b-2 border-transparent pb-0.5"
    }`;

  const mobileNavLinkClass = (path: string) =>
    `text-lg font-semibold py-3 border-b transition-colors text-white hover:text-white ${
      location === path ? "border-DermicIQ-turquoise" : "border-white/20"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-primary ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 lg:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0" data-testid="link-logo">
          <picture>
            <source type="image/webp" srcSet={publicAsset("logo-96.webp")} />
            <img
              src={publicAsset("logo-96.png")}
              alt={brand.shortName}
              width={44}
              height={44}
              className="h-10 w-10 lg:h-11 lg:w-11 rounded-2xl object-cover shadow-sm shrink-0"
              decoding="async"
            />
          </picture>
          <span className="hidden sm:flex flex-col min-w-0 leading-tight">
            <span className="text-sm font-bold text-white tracking-tight truncate">{brand.shortName}</span>
            <span className="text-[10px] font-semibold text-white/75 uppercase tracking-[0.14em]">
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
          <Button
            size="sm"
            className="font-semibold bg-white text-primary hover:bg-white/90 border-0"
            asChild
          >
            <a href={`mailto:${navigation.contactEmail}`} aria-label="Email us">
              Email Us
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-white/10 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-primary z-40 border-t border-white/10">
          <nav className="container-content flex flex-col gap-1 py-6">
            {navigation.links.map((link) => (
              <Link key={link.href} href={link.href} className={mobileNavLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full font-semibold bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href={`mailto:${navigation.contactEmail}`} aria-label="Email us">
                  Email Us
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
