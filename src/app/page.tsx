import HeroSection from "./components/sections/landing-page/hero-section/hero-section";
import HamburguerMenu from "./components/hamburguer-menu/hamburguer-menu";
import { ProductsSection } from "./components/sections/landing-page/products-section/products-section";
import { StorySection } from "./components/sections/landing-page/story-section/story-section";
import { InspirationSection } from "./components/sections/landing-page/inspiration-section/inspiration-section";
import { AboutSection } from "./components/sections/landing-page/about-section/about-section";

export default function Home() {
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
