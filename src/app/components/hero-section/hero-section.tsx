import style from "./hero-section.module.css";

export default function HeroSection() {
	return (
		<div className={style.heroSectionWrapper}>
			<section className={style.heroSection}>
				<div className={style.content}>
					<h1 className={style.title}>Harbour to home</h1>

					<p className={style.lead}>
						Trust, traceability, tradition – this trinity ensures we always deliver
						superior seafood, responsibly harvested and carefully processed, from
						harbour to home.
					</p>

					<h3>Watch the brand film</h3>
				</div>
			</section>
			<div className={style.videoWrapper}>
				<video autoPlay muted loop playsInline>
					<source src="/hero-section-video.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
