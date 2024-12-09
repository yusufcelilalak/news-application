import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

type ParamsType = { archive: ReactNode; latest: ReactNode };

export default function ArchiveLayout({ archive, latest }: ParamsType) {
  return (
    <div className="w-8/12 mx-auto">
      <h1 className=" text-2xl font-bold mb-4">News Archive</h1>
      <section>{archive}</section>
      <Separator className="my-8" />
      <section>{latest}</section>
    </div>
  );
}
