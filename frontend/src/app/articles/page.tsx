
import Link from "next/link";
import { getArticles } from "@/lib/api";
import { Article } from "@/lib/types";

export default async function ArticlesPage() {
  let articles: Article[] = [];
  let hasError = false;

  try {
    const { data } = await getArticles();
    articles = data;
  } catch (error) {
    hasError = true;
  }

  if (hasError) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        <p className="text-red-500">Failed to load articles.</p>
        <Link href="/" className="text-blue-500 mt-8 inline-block">
          Go back home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="grid gap-8">
        {articles.map((article: Article) => (
          <div key={article.id} className="border rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/articles/${article.attributes.slug}`} className="hover:underline">
                {article.attributes.title}
              </Link>
            </h2>
            <p>{article.attributes.description}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="text-blue-500 mt-8 inline-block">
        Go back home
      </Link>
    </main>
  );
}
