"use client";

import Image from "next/image";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./story-section.module.css";
import { motion, useMotionValue, animate } from "motion/react";
import { useState, useEffect } from "react";
import { ANIMATIONS } from "@/app/utils/constants";

export function StorySection() {
	const [isRightSide, setIsRightSide] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [dragConstraints, setDragConstraints] = useState({ left: -2000, right: 0 });
	const x = useMotionValue(0);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 1024);
			setDragConstraints({ left: -window.innerWidth * 2, right: 0 });
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleDragEnd = (_: Event, __: object) => {
		const threshold = 20;
		const currentX = x.get();

		// drag from left side
		if (currentX < -threshold && !isRightSide) {
			animate(x, -window.innerWidth * 2, {
				duration: 1.5,
				ease: "easeInOut",
				onComplete: () => setIsRightSide(true),
			});
		}
		// drag from right side
		else if (currentX > -window.innerWidth * 2 + threshold && isRightSide) {
			animate(x, 0, {
				duration: 1.5,
				ease: "easeInOut",
				onPlay: () => setIsRightSide(false),
			});
		}
		// snap back to position
		else {
			animate(x, isRightSide ? -window.innerWidth * 2 : 0, {
				duration: 0.5,
				ease: "easeInOut",
			});
		}
	};

	return (
		<SectionWrapper>
			<motion.div className={style.imageWrapper} style={{ x: isMobile ? x : 0 }}>
				<Image
					src="/background-story.jpg"
					width={2816}
					height={1760}
					alt="Story background"
				/>
			</motion.div>

			<motion.section className={style.storySection} style={{ x: isMobile ? x : 0 }}>
				<motion.h1
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: ANIMATIONS.DURATION.DEFAULT,
						delay: ANIMATIONS.DELAY.DEFAULT * 0,
						ease: "easeOut",
					}}
					className={style.title}
				>
					An unsung bauta
				</motion.h1>

				<motion.h2
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: ANIMATIONS.DURATION.DEFAULT,
						delay: ANIMATIONS.DELAY.DEFAULT * 1,
						ease: "easeOut",
					}}
					className={style.subtitle}
				>
					A celebrated hero
				</motion.h2>

				<motion.a
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: ANIMATIONS.DURATION.DEFAULT,
						delay: ANIMATIONS.DELAY.DEFAULT * 2,
						ease: "easeOut",
					}}
					href="#"
					className={`${style.link} ${style.arrow}`}
				>
					Explore the Babord story
				</motion.a>
			</motion.section>
			<motion.span
				className={style.swipeArrow}
				animate={{ opacity: isRightSide && isMobile ? 0 : 0.5 }}
				transition={{ duration: 0.3 }}
			>
				Swipe
			</motion.span>
			<motion.a
				href="#"
				className={`${style.link} ${style.arrowSmall}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: isRightSide && isMobile ? 1 : 0 }}
				transition={{ duration: 0.3 }}
				style={{ pointerEvents: isRightSide && isMobile ? "auto" : "none" }}
			>
				Explore the Babord story
			</motion.a>

			{isMobile && (
				<motion.div
					className={style.dragOverlay}
					drag="x"
					dragConstraints={dragConstraints}
					dragElastic={0}
					onDrag={(_event, info) => {
						const newX = isRightSide
							? -window.innerWidth * 2 + info.offset.x
							: info.offset.x;
						x.set(newX);
					}}
					onDragEnd={handleDragEnd}
				/>
			)}
		</SectionWrapper>
	);
}

export default StorySection;
