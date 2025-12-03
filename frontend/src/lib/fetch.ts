import { flattenAttributes } from "@/lib/utils";

// Check of we in build mode zijn zonder Strapi
const isBuildTime = process.env.NODE_ENV === "production" && typeof window === "undefined";

export async function fetchData(url: string, authToken?: string) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    
    if (!response.ok) {
      console.error(`Failed to fetch data from ${url}: ${response.status}`);
      // Return null instead of throwing during build
      return null;
    }
    
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    // During build time without Strapi, return null instead of crashing
    console.warn(`⚠️ Could not fetch from ${url}:`, error instanceof Error ? error.message : error);
    
    if (isBuildTime) {
      console.warn(`📦 Build mode: returning null for ${url}`);
      return null;
    }
    
    // In development, you might still want to see the error
    return null;
  }
}