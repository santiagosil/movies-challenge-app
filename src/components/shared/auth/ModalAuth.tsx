"use client";
import { Dispatch, SetStateAction, useState } from "react";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import { CircleChevronLeft } from "lucide-react";

import { modalAuthConstants } from "@/constants/modal-auth-constants";
import { FormLogin } from "@/components/form/FormLogin";
import { FormSignUp } from "@/components/form/FormSignUp";

import { SwitchAuth } from "./SwitchAuth";

interface ModalAuthProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ModalAuth({ isOpen, setIsOpen }: ModalAuthProps) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 mt-24 flex w-screen items-start justify-center p-4 text-white">
        <DialogPanel className="relative max-w-[66%] rounded-lg border bg-transparent p-4 backdrop-blur-xl">
          <div className="absolute left-0 top-0">
            <button
              className="m-4 flex w-fit items-center justify-center space-x-1 rounded-lg p-1.5 transition-colors hover:bg-black/30"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <CircleChevronLeft className="size-8" />
              <span>Back</span>
            </button>
          </div>
          <div className="flex">
            <section className="flex flex-col items-center justify-between py-24 pr-4 text-center">
              <SwitchAuth check={isLogin} setCheck={setIsLogin} />
              {isLogin ? <FormLogin /> : <FormSignUp />}
              <p className="text-sm">
                For any questions, reach out to support@Quickbetdmovies.com
              </p>
            </section>
            <section className="flex flex-col items-center justify-between space-y-12 bg-neutral-850 px-6 pt-12 text-center">
              <DialogTitle className="text-5xl font-bold">
                {isLogin
                  ? modalAuthConstants[0].title
                  : modalAuthConstants[1].title}
              </DialogTitle>
              <Description className="text-lg">
                {isLogin
                  ? modalAuthConstants[0].description
                  : modalAuthConstants[1].description}
              </Description>
              <Image
                alt="Logo"
                className="size-96"
                height={546}
                src={
                  isLogin
                    ? modalAuthConstants[0].image
                    : modalAuthConstants[1].image
                }
                width={547}
              />
            </section>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
