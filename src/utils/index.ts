import type {ClassValue} from "clsx";

import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const calculateColorRating = (percent: number, opacity = 1): string => {
  if (percent < 50) {
    return `rgba(239, 68, 68, ${opacity})`;
  } else if (percent < 80) {
    return `rgba(234, 179, 8, ${opacity})`;
  } else {
    return `rgba(34, 197, 94, ${opacity})`;
  }
};

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
