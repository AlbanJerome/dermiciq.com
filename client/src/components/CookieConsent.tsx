import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  openCookieSettings,
  subscribeCookieSettingsOpen,
} from "@/lib/cookieConsent";
import { isPlainObject } from "@shared/json";

export { openCookieSettings, COOKIE_CONSENT_STORAGE_KEY };

type StoredConsent = {
  v: 1;
  all: boolean;
  updatedAt: number;
};

function parseStoredConsent(raw: string): StoredConsent | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (
      isPlainObject(value) &&
      value.v === 1 &&
      typeof value.all === "boolean" &&
      typeof value.updatedAt === "number"
    ) {
      return { v: 1, all: value.all, updatedAt: value.updatedAt };
    }
  } catch {
    /* ignore corrupt storage */
  }
  return null;
}

function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!raw) return null;
  return parseStoredConsent(raw);
}

function writeConsent(all: boolean) {
  const payload: StoredConsent = { v: 1, all, updatedAt: Date.now() };
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload));
}

export function CookieConsent() {
  const titleId = useId();
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeAll = () => {
    setBannerOpen(false);
    setModalOpen(false);
  };

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!getStoredConsent()) setBannerOpen(true);
    }, 800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    return subscribeCookieSettingsOpen(() => {
      setBannerOpen(true);
      setModalOpen(false);
    });
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const acceptAll = () => {
    writeConsent(true);
    closeAll();
  };

  const acceptEssentialOnly = () => {
    writeConsent(false);
    closeAll();
  };

  if (!bannerOpen) return null;

  const banner = (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-3 sm:p-4",
        "print:hidden"
      )}
      role="region"
      aria-label="Cookie notice"
    >
      <div
        className={cn(
          "pointer-events-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-border/80",
          "bg-card/95 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-5",
          "text-card-foreground"
        )}
      >
        <p className="text-sm leading-relaxed text-foreground sm:flex-1 sm:text-[15px]">
          We use cookies to improve your experience.{" "}
          <span className="text-muted-foreground">
            You can read more, choose essential cookies only, or set preferences.{" "}
            <Link
              className="font-medium text-primary underline-offset-2 hover:underline"
              href="/cookies"
              onClick={() => setBannerOpen(false)}
            >
              Cookie policy
            </Link>
            .
          </span>
        </p>
        <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
          <Button
            type="button"
            size="default"
            className="h-10 rounded-full font-semibold sm:min-w-[7.5rem]"
            onClick={acceptAll}
          >
            Accept All
          </Button>
          <Button
            type="button"
            size="default"
            variant="outline"
            className="h-10 rounded-full font-semibold border-border/80 sm:min-w-[10rem]"
            onClick={() => setModalOpen(true)}
          >
            Manage Preferences
          </Button>
        </div>
      </div>
    </div>
  );

  const modal =
    modalOpen &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        className="fixed inset-0 z-[110] flex items-end justify-center p-3 sm:items-center sm:p-4"
        role="presentation"
        aria-hidden={!modalOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-foreground/25 backdrop-blur-sm transition-opacity"
          aria-label="Close"
          onClick={() => setModalOpen(false)}
        />
        <div
          className="relative z-[1] w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mb-1 flex items-start justify-between gap-2">
            <h2 id={titleId} className="pr-2 text-lg font-semibold text-foreground">
              Cookie preferences
            </h2>
            <button
              type="button"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Essential cookies keep sign-in, security, and basic site features working. Optional cookies help
            us understand how people use the product. For full details, read our policy on the cookies page.
          </p>
          <Link
            className="mb-5 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
            href="/cookies"
            onClick={() => {
              setModalOpen(false);
              setBannerOpen(false);
            }}
          >
            Open cookie &amp; privacy details →
          </Link>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" className="rounded-full" onClick={acceptEssentialOnly}>
              Essential only
            </Button>
            <Button type="button" className="rounded-full font-semibold" onClick={acceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {banner}
      {modal}
    </>
  );
}
