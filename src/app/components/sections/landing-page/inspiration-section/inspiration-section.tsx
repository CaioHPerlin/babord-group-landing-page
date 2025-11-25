import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./inspiration-section.module.css";
import Image from "next/image";

import sectionThumbnailImage from "@/app/assets/images/inspiration-section/thumb.jpg";
import wavePatternImage from "@/app/assets/images/wave-pattern.png";
import { motion } from "motion/react";
import { ANIMATIONS } from "@/app/utils/constants";

export function InspirationSection() {
	return (
		<SectionWrapper>
			<section className={style.inspirationSection}>
				<motion.div
					className={style.left}
					initial={{ opacity: 0, x: -25, y: 0 }}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{
						duration: ANIMATIONS.DURATION.DEFAULT,
						ease: "easeInOut",
					}}
				>
					<Image
						className={style.image}
						src={sectionThumbnailImage}
						alt="Bowl with vegetables and rice"
						fill
					/>
				</motion.div>

				<div className={style.right}>
					<div className={style.bgPink} />
					<Image
						className={style.bgImage}
						src={wavePatternImage}
						alt="Background"
						fill
					/>
					<div className={style.content}>
						<motion.h2
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: ANIMATIONS.DURATION.DEFAULT,
								delay: (ANIMATIONS.DELAY.DEFAULT / 2) * 0,
								ease: "easeOut",
							}}
						>
							Inspiration
						</motion.h2>
						<motion.h2
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: ANIMATIONS.DURATION.DEFAULT,
								delay: (ANIMATIONS.DELAY.DEFAULT / 2) * 1,
								ease: "easeOut",
							}}
						>
							For the love of good
						</motion.h2>

						<motion.p
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: ANIMATIONS.DURATION.DEFAULT,
								delay: (ANIMATIONS.DELAY.DEFAULT / 2) * 2,
								ease: "easeOut",
							}}
						>
							Longing to return to the harbour. Longing for your partner to return
							home. Longing is one of the names we have for love. But when you are
							longing for something good, you’re not waiting in vain. So for the
							love of good, we have prepared these tasty fish recipes. All exciting
							and easy combinations so you don’t have to wait too long. Enjoy.
						</motion.p>
						<motion.h3
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: ANIMATIONS.DURATION.DEFAULT,
								delay: (ANIMATIONS.DELAY.DEFAULT / 2) * 3,
								ease: "easeOut",
							}}
							className={style.arrow}
						>
							Explore the babord recipes
						</motion.h3>
					</div>
				</div>
			</section>
		</SectionWrapper>
	);
}
