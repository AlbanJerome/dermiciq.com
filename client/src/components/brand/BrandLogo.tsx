import { siteContent } from "@/config/siteContent";
import {
  brandAssets,
  brandLogoSizes,
  type BrandLogoSize,
} from "@/config/brandAssets";
import { publicAsset } from "@/lib/publicAsset";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  /** When true, alt is empty (decorative next to visible wordmark). */
  decorative?: boolean;
  loading?: "eager" | "lazy";
};

export function BrandLogo({
  size = "nav",
  className,
  decorative = false,
  loading = "eager",
}: BrandLogoProps) {
  const { brand } = siteContent;
  const config = brandLogoSizes[size];
  const files = brandAssets[config.asset];

  return (
    <picture>
      <source type="image/webp" srcSet={publicAsset(files.webp)} />
      <img
        src={publicAsset(files.png)}
        alt={decorative ? "" : brand.shortName}
        width={config.width}
        height={config.height}
        className={cn(config.className, className)}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
