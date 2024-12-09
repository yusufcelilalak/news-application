import { getNewsItem } from "@/lib/news";
import { formatDate } from "@/utils/formats";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ParamsType = { params: { slug: string } };

const NewsDetailPage = async ({ params }: ParamsType) => {
  const newsSlug = params.slug;
  const news = await getNewsItem(newsSlug);

  if (!news) {
    notFound();
  }

  return (
    <article className="w-10/12 mx-auto mt-16">
      <div className="ml-3">
        <header className="mb-4">
          <h1 className="text-2xl font-bold mb-1">{news.title}</h1>
          <time className="text-sm font-medium text-primary/50">
            {formatDate(news.date)}
          </time>
        </header>
        <div className="">
          <Link href={`/news/${news.slug}/image`}>
            <Image
              src={`/images/news/${news.image}`}
              alt={news.title}
              style={{
                width: "30%",
                height: "auto",
              }}
              width={500}
              height={300}
              className="rounded-md object-cover float-left mr-6 mb-16"
            />
          </Link>
          <p>{news.content}</p>
        </div>
      </div>
    </article>
  );
};

export default NewsDetailPage;
