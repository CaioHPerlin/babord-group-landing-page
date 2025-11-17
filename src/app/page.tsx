import HeroSection from "./components/sections/hero-section/hero-section";
import HamburguerMenu from "./components/hamburguer-menu/hamburguer-menu";

export default function Home() {
	return (
		<div>
			<HamburguerMenu />
			<HeroSection />
		</div>
	);
}
