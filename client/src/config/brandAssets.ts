import { publicAsset } from "@/lib/publicAsset";

/**
 * Central map of logo / brand image files under `client/public/`.
 * Swap files here when refreshing brand assets.
 */
export const brandAssets = {
  logo96: {
    png: "logo-96.png",
    webp: "logo-96.webp",
  },
  logo192: {
    png: "logo-192.png",
    webp: "logo-192.webp",
  },
} as const;

export type BrandLogoSize = "nav" | "footer";

export const brandLogoSizes: Record<
  BrandLogoSize,
  { width: number; height: number; className: string; asset: keyof typeof brandAssets }
> = {
  nav: {
    width: 44,
    height: 44,
    className: "h-10 w-10 lg:h-11 lg:w-11 rounded-2xl object-cover shadow-sm shrink-0",
    asset: "logo96",
  },
  footer: {
    width: 48,
    height: 48,
    className: "h-12 w-12 rounded-2xl object-cover shadow-md shrink-0",
    asset: "logo96",
  },
};

export function brandLogoUrl(
  size: "96" | "192" = "192",
  format: "png" | "webp" = "png",
): string {
  const key = size === "96" ? "logo96" : "logo192";
  return publicAsset(brandAssets[key][format]);
}
