import { isPlainObject } from "../../../shared/json";

type SiteverifyResult = {
  success: boolean;
  "error-codes"?: string[];
};

function isSiteverifyResult(value: unknown): value is SiteverifyResult {
  if (!isPlainObject(value) || typeof value.success !== "boolean") {
    return false;
  }
  if (!("error-codes" in value)) return true;
  const codes = value["error-codes"];
  return (
    codes === undefined ||
    (Array.isArray(codes) && codes.every((code) => typeof code === "string"))
  );
}

/**
 * Canonical Turnstile Siteverify call.
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
export async function verifyTurnstile(options: {
  secret: string;
  token: string;
  remoteIp: string | null;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const body = new URLSearchParams({
      secret: options.secret,
      response: options.token,
    });
    if (options.remoteIp) {
      body.set("remoteip", options.remoteIp);
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      console.error("turnstile_siteverify_http", { status: response.status });
      return { ok: false, error: "Turnstile verification failed" };
    }

    const raw: unknown = await response.json();
    if (!isSiteverifyResult(raw)) {
      console.error("turnstile_siteverify_malformed");
      return { ok: false, error: "Turnstile verification failed" };
    }

    if (raw.success !== true) {
      console.error("turnstile_siteverify_rejected", {
        errorCodes: raw["error-codes"] ?? [],
      });
      return { ok: false, error: "Turnstile verification failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error("turnstile_siteverify_error", {
      message: error instanceof Error ? error.message : "unknown",
    });
    return { ok: false, error: "Turnstile verification failed" };
  }
}
