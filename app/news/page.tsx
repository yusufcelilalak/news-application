import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 my-32">
      {DUMMY_NEWS.map((news) => (
        <Card key={news.id}>
          <CardHeader>
            <AspectRatio ratio={4 / 3} className="bg-muted flex items-end">
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                fill
                className="rounded-md object-cover"
              />
              <Link
                key={news.id}
                href={`/news/${news.slug}`}
                className=" relative text-white m-2 drop-shadow-md"
              >
                <CardTitle className=" z-10">{news.title}</CardTitle>
              </Link>
            </AspectRatio>
            <CardDescription>{news.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{news.content.slice(0, 80)}...</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsPage;
