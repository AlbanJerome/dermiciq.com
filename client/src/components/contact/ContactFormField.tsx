import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContactFormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optionalHint?: string;
  error?: string;
  children: (props: {
    id: string;
    className: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
  }) => ReactNode;
};

export function contactFieldClassName(hasError: boolean): string {
  return cn(
    "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground",
    "placeholder:text-muted-foreground/70",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    hasError ? "border-destructive" : "border-input",
  );
}

export function ContactFormField({
  id,
  label,
  required = false,
  optionalHint,
  error,
  children,
}: ContactFormFieldProps) {
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}{" "}
        {required ? (
          <>
            <span aria-hidden>*</span>
            <span className="sr-only">(required)</span>
          </>
        ) : null}
        {optionalHint ? (
          <span className="font-normal text-muted-foreground">{optionalHint}</span>
        ) : null}
      </label>
      {children({
        id,
        className: contactFieldClassName(hasError),
        "aria-invalid": hasError,
        "aria-describedby": hasError ? errorId : undefined,
      })}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-destructive-foreground">
          {error}
        </p>
      ) : null}
    </div>
  );
}
