import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...styles) {
	return twMerge(clsx(styles));
}
