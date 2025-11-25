import { ANIMATIONS } from "@/app/utils/constants";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./hero-section.module.css";
import { motion } from "motion/react";

export default function HeroSection() {
	return (
		<SectionWrapper>
			<motion.div
				className={style.videoWrapper}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: ANIMATIONS.DURATION.SLOWER,
					ease: "easeIn",
				}}
			>
				<video autoPlay muted loop playsInline>
					<source src="/hero-section-video.mp4" type="video/mp4" />
				</video>
			</motion.div>
			<section className={style.heroSection}>
				<div className={style.content}>
					<motion.h1
						className={style.title}
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeInOut",
						}}
					>
						Harbour to home
					</motion.h1>

					<motion.p
						className={style.lead}
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 1,
							ease: "easeInOut",
						}}
					>
						Trust, traceability, tradition – this trinity ensures we always deliver
						superior seafood, responsibly harvested and carefully processed, from
						harbour to home.
					</motion.p>

					<motion.h3
						initial={{ opacity: 0, x: 50, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 2,
							ease: "easeInOut",
						}}
					>
						Watch the brand film
					</motion.h3>
				</div>
			</section>
		</SectionWrapper>
	);
}
