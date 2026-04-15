import { hasBackendApi, apiUrl } from "@/lib/apiOrigin";

export function isUnauthorizedError(error: Error): boolean {
  return /^401: .*Unauthorized/.test(error.message);
}

// Redirect to login with a toast notification
export function redirectToLogin(toast?: (options: { title: string; description: string; variant: string }) => void) {
  if (toast) {
    toast({
      title: "Unauthorized",
      description: "You are logged out. Logging in again...",
      variant: "destructive",
    });
  }
  setTimeout(() => {
    if (hasBackendApi) {
      window.location.href = apiUrl("/api/login");
    } else {
      window.location.hash = "#/login";
    }
  }, 500);
}
