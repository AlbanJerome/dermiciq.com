import { useEffect, useRef, useState, type RefObject } from "react";
import { loadTurnstileScript } from "@/lib/turnstile";

type UseTurnstileWidgetOptions = {
  siteKey: string;
  theme?: "light" | "dark" | "auto";
};

type UseTurnstileWidgetResult = {
  widgetHostRef: RefObject<HTMLDivElement>;
  token: string;
  error: string | null;
  setError: (message: string | null) => void;
  reset: () => void;
};

export function useTurnstileWidget({
  siteKey,
  theme = "light",
}: UseTurnstileWidgetOptions): UseTurnstileWidgetResult {
  const widgetHostRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!siteKey || !widgetHostRef.current) return;

    let cancelled = false;

    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !widgetHostRef.current) return;
        if (widgetIdRef.current) {
          turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
        widgetIdRef.current = turnstile.render(widgetHostRef.current, {
          sitekey: siteKey,
          theme,
          callback: (nextToken) => {
            setToken(nextToken);
            setError(null);
          },
          "expired-callback": () => {
            setToken("");
            setError("Security check expired. Please complete it again.");
          },
          "error-callback": () => {
            setToken("");
            setError("Security check failed to load. Please refresh and try again.");
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setError("Security check failed to load. Please refresh and try again.");
        }
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme]);

  const reset = () => {
    setToken("");
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  return {
    widgetHostRef,
    token,
    error,
    setError,
    reset,
  };
}
