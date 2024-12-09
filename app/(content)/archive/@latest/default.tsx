import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <NewsList news={latestNews} />
    </div>
  );
}
