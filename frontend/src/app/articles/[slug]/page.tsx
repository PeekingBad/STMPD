
import Link from "next/link";
import { getArticleBySlug } from "@/lib/api";
import { Article } from "@/lib/types";

interface ArticlePageParams {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageParams) {
  const { slug } = params;

  let article: Article | null = null;
  let hasError = false;

  try {
    const { data } = await getArticleBySlug(slug);
    article = data[0];
  } catch (error) {
    hasError = true;
  }

  if (hasError) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Error</h1>
        <p className="text-red-500">Failed to load article.</p>
        <Link href="/articles" className="text-blue-500 mt-8 inline-block">
          Back to articles
        </Link>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Article not found</h1>
        <Link href="/articles" className="text-blue-500 mt-8 inline-block">
          Back to articles
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.attributes.title}</h1>
      <p className="text-lg mb-8">{article.attributes.description}</p>
      <Link href="/articles" className="text-blue-500 mt-8 inline-block">
        Back to articles
      </Link>
    </main>
  );
}
