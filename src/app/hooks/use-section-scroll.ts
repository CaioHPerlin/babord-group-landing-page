import { useEffect, useRef, useState } from "react";

const TOTAL_SECTIONS = 6;

type UseSectionScrollOptions = {
	sectionHeight: number; // Height of each section
	easeOutDuration: number; // Duration of scroll animation in ms
	throttle: number; // Throttle time in ms
};

export function useSectionScroll(options: UseSectionScrollOptions) {
	const { sectionHeight, easeOutDuration = 800, throttle = 500 } = options;
	const [currentSection, setCurrentSection] = useState(0);
	const isScrollingRef = useRef(false);
	const lastScrollTimeRef = useRef(0);

	const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

	const scrollToSection = (sectionIndex: number) => {
		const now = Date.now();

		if (now - lastScrollTimeRef.current < throttle) return;
		lastScrollTimeRef.current = now;

		if (isScrollingRef.current) return;

		isScrollingRef.current = true;
		const startY = window.scrollY;
		const endY = sectionIndex * sectionHeight;
		const startTime = Date.now();

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / easeOutDuration, 1);
			const easeProgress = easeOutCubic(progress);

			window.scrollTo(0, startY + (endY - startY) * easeProgress);

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				isScrollingRef.current = false;
				setCurrentSection(sectionIndex);
			}
		};

		animate();
	};

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			// Only handle on desktop
			e.preventDefault();

			const direction = e.deltaY > 0 ? 1 : -1;
			const nextSection = currentSection + direction;

			// Ignore scrolls at boundaries
			if (nextSection < 0 || nextSection >= TOTAL_SECTIONS - 1) {
				return;
			}

			scrollToSection(nextSection);
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				const nextSection = currentSection + 1;

				// Ignore scroll down at last section
				if (nextSection >= TOTAL_SECTIONS - 1) {
					return;
				}

				scrollToSection(nextSection);
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				const nextSection = currentSection - 1;

				// Ignore scroll up at first section
				if (nextSection < 0) {
					return;
				}

				scrollToSection(nextSection);
			}
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentSection, sectionHeight]);

	return { currentSection, scrollToSection };
}
