import { flattenAttributes } from "@/lib/utils";

const isBuildTime =
  process.env.NODE_ENV === "production" && typeof window === "undefined";

export async function fetchData(
  url: string,
  authToken?: string,
  revalidate: number = 10 // default to 10 seconds
) {
  const options: RequestInit & { next?: { revalidate?: number } } = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    cache: "force-cache",       // <— ALLOW ISR
    next: { revalidate },       // <— REVALIDATE EVERY 10 SECONDS
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Failed to fetch data from ${url}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.warn(
      `⚠️ Could not fetch from ${url}:`,
      error instanceof Error ? error.message : error
    );

    if (isBuildTime) {
      console.warn(`📦 Build mode: returning null for ${url}`);
      return null;
    }

    return null;
  }
}
