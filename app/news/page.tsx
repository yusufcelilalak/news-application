import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <div className="w-8/12 mx-auto my-32">
      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;
