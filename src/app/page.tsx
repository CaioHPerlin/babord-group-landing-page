"use client";

import HamburguerMenu from "./components/hamburguer-menu/hamburguer-menu";
import { AboutSection } from "./components/sections/landing-page/about-section/about-section";
import HeroSection from "./components/sections/landing-page/hero-section/hero-section";
import { InspirationSection } from "./components/sections/landing-page/inspiration-section/inspiration-section";
import { ProductsSection } from "./components/sections/landing-page/products-section/products-section";
import { StorySection } from "./components/sections/landing-page/story-section/story-section";
import { useSectionScroll } from "./hooks/use-section-scroll";
import { useEffect } from "react";

export default function Home() {
	useSectionScroll({
		sectionHeight: typeof window !== "undefined" ? window.innerHeight : 0,
		easeOutDuration: 800,
		throttle: 500,
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<HamburguerMenu />
			<HeroSection />
			<ProductsSection />
			<StorySection />
			<InspirationSection />
			<AboutSection />
		</div>
	);
}
