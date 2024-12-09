import { notFound } from "next/navigation";
import Image from "next/image";
import { DialogContent } from "@/components/ui/dialog";
import DialogModal from "@/components/dialog-modal";
import { getNewsItem } from "@/lib/news";

type ParamsType = { params: { slug: string } };

const InterceptedImagePage = async ({ params }: ParamsType) => {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <DialogModal>
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
      </DialogModal>
    </>
  );
};

export default InterceptedImagePage;
