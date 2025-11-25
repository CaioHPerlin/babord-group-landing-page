import SectionWrapper from "@/app/components/section-wrapper/section-wrapper";
import style from "./about-section.module.css";
import Image from "next/image";

import backgroundImage from "@/app/assets/images/about-section/background.jpg";
import { motion } from "motion/react";
import { ANIMATIONS } from "@/app/utils/constants";

export function AboutSection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				<Image src={backgroundImage} alt="About Section background image" />
			</div>
			<section className={style.aboutSection}>
				<h1>About</h1>
				<div className={style.main}>
					<motion.p
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.mainText}
					>
						Trust, traceability, tradition – this trinity ensures we always deliver
						superior Norwegian seafood, responsibly harvested and carefully
						processed, from harbour to home.
					</motion.p>
					<motion.a
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.arrow}
						href="#"
					>
						Explore the babord brand
					</motion.a>
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: ANIMATIONS.DURATION.DEFAULT,
							delay: ANIMATIONS.DELAY.DEFAULT * 0,
							ease: "easeOut",
						}}
						className={style.info}
					>
						<p>
							Visit us at
							<br />
							Maritim Park, Nedrevegen 108
							<br />
							Pb. 84
							<br />
							6707 Raudeberg, Norway
						</p>
						<p>
							<a href="tel:004757848890">Tel: +47 57 84 88 90</a>
							<br />
							<a href="mailto:office@babord.no">office@babord.no</a>
						</p>
					</motion.div>
				</div>
			</section>
		</SectionWrapper>
	);
}
