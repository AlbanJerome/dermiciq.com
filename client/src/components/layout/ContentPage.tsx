import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentPageHeaderProps = {
  title: string;
  children?: ReactNode;
  className?: string;
  /** Override the default content max-width (centered within the site container). */
  contentClassName?: string;
  /** Override the default mint header wash when needed. */
  washClassName?: string;
  titleTestId?: string;
};

/** Site-default content page header: compact padding + soft mint wash. */
export function ContentPageHeader({
  title,
  children,
  className,
  contentClassName,
  washClassName = "page-header-wash",
  titleTestId,
}: ContentPageHeaderProps) {
  return (
    <header className={cn("page-header", washClassName, className)}>
      <div className="container-content">
        <div className={cn("mx-auto", contentClassName ?? "max-w-3xl")}>
          <h1
            className="text-balance text-foreground text-section mb-3 lg:text-section-lg"
            data-testid={titleTestId}
          >
            {title}
          </h1>
          {children}
        </div>
      </div>
    </header>
  );
}

type ContentPageBodyProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** Soft secondary wash behind body content. Default on. */
  wash?: boolean;
  as?: "article" | "div" | "section";
};

/** Site-default content body: compact vertical rhythm + light secondary wash. */
export function ContentPageBody({
  children,
  className,
  contentClassName,
  wash = true,
  as: Tag = "article",
}: ContentPageBodyProps) {
  return (
    <Tag className={cn("page-body", wash && "page-body-wash", className)}>
      <div className="container-content">
        <div className={cn("page-stack mx-auto", contentClassName ?? "max-w-3xl")}>
          {children}
        </div>
      </div>
    </Tag>
  );
}
