"use client";
import { CircleUser } from "lucide-react";
import { useState } from "react";

import { ModalAuth } from "../shared/auth/ModalAuth";

export function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-fit cursor-pointer rounded-full p-1.5 transition-colors hover:bg-neutral-600"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <CircleUser className="size-10" />
      </button>
      <ModalAuth isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
