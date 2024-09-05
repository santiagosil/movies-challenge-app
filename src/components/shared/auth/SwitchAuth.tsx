import type { Dispatch, SetStateAction } from "react";

import { cn } from "@/utils";
interface SwitchAuthProps {
  check: boolean;
  setCheck: Dispatch<SetStateAction<boolean>>;
}

export function SwitchAuth({ check, setCheck }: SwitchAuthProps) {
  return (
    <label className="flex w-full cursor-pointer items-center justify-center">
      <input
        checked={check}
        className="hidden"
        type="checkbox"
        onClick={() => setCheck((prev) => !prev)}
      />
      <div className="relative grid w-1/2 max-w-[15rem] select-none grid-cols-2 justify-between rounded-3xl bg-neutral-850 py-2 font-semibold  text-white [&_span]:z-20">
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-1/2  rounded-3xl bg-yellow-400 transition-transform",
            {
              "translate-x-full": check,
            },
          )}
        />
        <span
          className={cn("text-center transition-colors", {
            "text-white": !check,
          })}
        >
          Sign Up
        </span>
        <span
          className={cn("text-center transition-colors", {
            "text-white": check,
          })}
        >
          Log In
        </span>
      </div>
    </label>
  );
}
