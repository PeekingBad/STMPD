
import { ApiResponse, Article } from "./types";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

export async function getArticles(): Promise<ApiResponse<Article[]>> {
  const response = await fetch(`${STRAPI_URL}/api/articles`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

export async function getArticleBySlug(slug: string): Promise<ApiResponse<Article[]>> {
  const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=deep`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch article with slug ${slug}`);
  }
  return response.json();
}
