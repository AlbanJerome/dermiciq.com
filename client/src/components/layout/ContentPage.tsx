import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentPageHeaderProps = {
  title: string;
  children?: ReactNode;
  className?: string;
  /** Override the default mint header wash when needed. */
  washClassName?: string;
  titleTestId?: string;
};

/** Site-default content page header: compact padding + soft mint wash. */
export function ContentPageHeader({
  title,
  children,
  className,
  washClassName = "page-header-wash",
  titleTestId,
}: ContentPageHeaderProps) {
  return (
    <header className={cn("page-header", washClassName, className)}>
      <div className="container-content max-w-3xl">
        <h1
          className="text-balance text-foreground text-section mb-3 lg:text-section-lg"
          data-testid={titleTestId}
        >
          {title}
        </h1>
        {children}
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
      <div className={cn("container-content page-stack", contentClassName ?? "max-w-3xl")}>
        {children}
      </div>
    </Tag>
  );
}
