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
import React from "react";

type ParamsType = { news: NewsItem[] };

const NewsList = React.memo(({ news }: ParamsType) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`} className=" ">
            <Card key={newsItem.id}>
              <CardHeader>
                <AspectRatio ratio={4 / 3} className="bg-muted relative">
                  <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                    className="rounded-md object-cover w-full h-full"
                  />

                  <CardTitle className="absolute bottom-0 left-0 right-0 text-white m-2 drop-shadow-md z-10">
                    {newsItem.title}
                  </CardTitle>
                </AspectRatio>

                <CardDescription>{newsItem.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{newsItem.content.slice(0, 80)}...</p>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default NewsList;
