type SiteverifyResult = {
  success: boolean;
  "error-codes"?: string[];
};

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

    const result = (await response.json()) as SiteverifyResult;
    if (result.success !== true) {
      console.error("turnstile_siteverify_rejected", {
        errorCodes: result["error-codes"] ?? [],
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
