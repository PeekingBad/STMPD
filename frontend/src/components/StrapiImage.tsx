import Image from "next/image";

interface StrapiImageProps {
  src?: string | null;
  alt?: string;
  height: number;
  width: number;
  className?: string;
}

export function StrapiImage({
  src,
  alt = "Image",
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) {
  // Environment variable for Strapi base URL
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

  // Build full URL or fallback
  const imageUrl = src
    ? src.startsWith("http")
      ? src
      : `${STRAPI_URL}${src}`
    : null;

  const imageFallback = `https://placehold.co/${width}x${height}?text=No+Image`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized={imageUrl?.includes("localhost")} // Next.js optimization doesn't work for localhost
    />
  );
}
