import type { ComponentProps } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export type MarketingButtonLinkProps = Omit<
  ComponentProps<typeof Button>,
  "asChild"
> & {
  href: string;
  children: React.ReactNode;
};

/** Hash router `Link` for in-app paths; plain `<a>` for absolute URLs (e.g. app host). */
export function MarketingButtonLink({
  href,
  children,
  ...btnProps
}: MarketingButtonLinkProps) {
  if (href.startsWith("http")) {
    return (
      <Button asChild {...btnProps}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }
  return (
    <Button asChild {...btnProps}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
