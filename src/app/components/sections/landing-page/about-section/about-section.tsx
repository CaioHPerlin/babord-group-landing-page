import SectionWrapper from "@/app/components/section-wrapper/section-wrapper";
import style from "./about-section.module.css";
import Image from "next/image";

import backgroundImage from "@/app/assets/images/about-section/background.jpg";

export function AboutSection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				<Image src={backgroundImage} alt="About Section background image" />
			</div>
			<section className={style.aboutSection}>
				<h1>About</h1>
				<div className={style.main}>
					<p className={style.mainText}>
						Trust, traceability, tradition – this trinity ensures we always deliver
						superior Norwegian seafood, responsibly harvested and carefully
						processed, from harbour to home.
					</p>
					<a className={style.arrow} href="#">
						Explore the babord brand
					</a>
					<div className={style.info}>
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
					</div>
				</div>
			</section>
		</SectionWrapper>
	);
}
