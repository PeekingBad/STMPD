
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getArticleBySlug } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Invalid slug", { status: 400 });
  }

  const { data } = await getArticleBySlug(slug, "preview");
  const article = data[0];

  if (!article) {
    return new Response("Invalid slug", { status: 400 });
  }

  draftMode().enable();

  redirect(`/articles/${article.attributes.slug}`);
}
