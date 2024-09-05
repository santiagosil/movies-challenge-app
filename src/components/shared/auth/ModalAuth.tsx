"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { SwitchAuth } from "./SwitchAuth";
import Image from "next/image";
import { modalAuthConstants } from "@/constants/modal-auth-constants";
import { FormLogin } from "@/components/form/FormLogin";
import { FormSignUp } from "@/components/form/FormSignUp";
import { ArrowLeft, CircleChevronLeft } from "lucide-react";

interface ModalAuthProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalAuth = ({ isOpen, setIsOpen }: ModalAuthProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-start mt-24 justify-center p-4 text-white">
        <DialogPanel className="max-w-[66%] border rounded-lg bg-transparent p-4 backdrop-blur-xl relative">
          <div className="absolute top-0 left-0">
            <button
              className="flex w-fit m-4 items-center justify-center space-x-1 transition-colors hover:bg-black/30 rounded-lg p-1.5"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <CircleChevronLeft className="size-8" />
              <span>Back</span>
            </button>
          </div>
          <div className="flex">
            <section className="flex flex-col items-center justify-between py-24 text-center pr-4">
              <SwitchAuth check={isLogin} setCheck={setIsLogin} />
              {isLogin ? <FormLogin /> : <FormSignUp />}
              <p className="text-sm">
                For any questions, reach out to support@Quickbetdmovies.com
              </p>
            </section>
            <section className="bg-neutral-850 text-center flex flex-col items-center justify-between pt-12 px-6 space-y-12">
              <DialogTitle className="font-bold text-5xl">
                {isLogin
                  ? modalAuthConstants[0].title
                  : modalAuthConstants[1].title}
              </DialogTitle>
              <Description className={"text-lg"}>
                {isLogin
                  ? modalAuthConstants[0].description
                  : modalAuthConstants[1].description}
              </Description>
              <Image
                src={
                  isLogin
                    ? modalAuthConstants[0].image
                    : modalAuthConstants[1].image
                }
                alt="Logo"
                width={547}
                height={546}
                className="size-96"
              />
            </section>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
