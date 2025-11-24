import { useEffect, useState } from "react";
import type { RefObject } from "react";

type UseHoverOptions = {
	onEnter?: () => void;
	onLeave?: () => void;
};

export function useHover<T extends HTMLElement>(
	elementRef: RefObject<T | null>,
	options?: UseHoverOptions,
): boolean {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const handleMouseEnter = () => {
			setIsHovered(true);
			options?.onEnter?.();
		};
		const handleMouseLeave = () => {
			setIsHovered(false);
			options?.onLeave?.();
		};

		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [elementRef, options]);

	return isHovered;
}
