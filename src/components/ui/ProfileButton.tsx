"use client";
import { CircleUser } from "lucide-react";
import { ModalAuth } from "../shared/auth/ModalAuth";
import { useState } from "react";

export const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer p-1.5 rounded-full transition-colors hover:bg-neutral-600 w-fit"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <CircleUser className="size-10" />
      </button>
      <ModalAuth isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
