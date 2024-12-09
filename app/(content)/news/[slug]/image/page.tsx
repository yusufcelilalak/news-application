import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsItem } from "@/lib/news";

type ParamsType = { params: { slug: string } };

const ImagePage = async ({ params }: ParamsType) => {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="w-10/12 mx-auto mt-16">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        layout="responsive"
        width={16}
        height={9}
        className="rounded-md object-cover"
      />
    </div>
  );
};

export default ImagePage;
