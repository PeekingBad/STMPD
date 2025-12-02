
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
      <p className="text-lg mb-8">
        This is the frontend for our Strapi application.
      </p>
      <Link href="/articles" className="text-blue-500 hover:underline">
        View Articles
      </Link>
    </main>
  );
}
