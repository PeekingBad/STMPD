import { flattenAttributes } from "@/lib/utils";

export async function fetchData(url: string) {
  const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },

    next: { revalidate: 10 },
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
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  }
}
