import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";

type ParamsType = { params: { slug: string } };

const ImagePage = ({ params }: ParamsType) => {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);

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
