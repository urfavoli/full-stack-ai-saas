import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBackgroundHsl = () => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim()
    .split(" ")
    .map((v) => parseFloat(v.replace("%", "")));
};

