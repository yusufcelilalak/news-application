"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

type ParamsType = { params: { slug: string } };

const InterceptedImagePage = ({ params }: ParamsType) => {
  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  const [open, setOpen] = useState(true);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          if (open) router.back();
          setOpen(!open);
        }}
      >
        <DialogContent className="sm:max-w-[500px] p-10">
          <div className="relative w-full">
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              layout="responsive"
              width={16}
              height={9}
              className="rounded-md object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InterceptedImagePage;
