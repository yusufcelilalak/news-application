"use client";

import { useRouter } from "next/navigation";
import { Dialog } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";

interface DialogModalProps {
  children: ReactNode;
}

const DialogModal = ({ children }: DialogModalProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          if (open) router.back();
          setOpen(!open);
        }}
      >
        {children}
      </Dialog>
    </>
  );
};

export default DialogModal;
