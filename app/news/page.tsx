import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <div className="w-8/12 mx-auto my-32">
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
