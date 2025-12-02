
import Link from "next/link";
import { getArticleBySlug } from "@/lib/api";
import { Article } from "@/lib/types";
import { draftMode } from "next/headers";

interface ArticlePageParams {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageParams) {
  const { slug } = params;
  const { isEnabled } = draftMode();

  try {
    const { data } = await getArticleBySlug(slug, isEnabled ? "preview" : undefined);
    const article: Article = data[0];

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
        <div className="prose lg:prose-xl">
          <pre>{JSON.stringify(article.attributes.blocks, null, 2)}</pre>
        </div>
        <Link href="/articles" className="text-blue-500 mt-8 inline-block">
          Back to articles
        </Link>
      </main>
    );
  } catch (error) {
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
}
