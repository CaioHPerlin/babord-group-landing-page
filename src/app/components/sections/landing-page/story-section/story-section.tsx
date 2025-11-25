"use client";

import Image from "next/image";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./story-section.module.css";
import { motion, useMotionValue, animate } from "motion/react";
import { useState, useEffect } from "react";

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

		// If dragging left (negative) from left side, go to right
		if (currentX < -threshold && !isRightSide) {
			animate(x, -window.innerWidth * 2, {
				duration: 1.5,
				ease: [0.42, 0, 0.58, 1], // ease-in-out
				onComplete: () => setIsRightSide(true),
			});
		}
		// If dragging right (positive) from right side, go back to left
		else if (currentX > -window.innerWidth * 2 + threshold && isRightSide) {
			animate(x, 0, {
				duration: 1.5,
				ease: [0.42, 0, 0.58, 1], // ease-in-out
				onPlay: () => setIsRightSide(false),
			});
		}
		// Snap back to current position
		else {
			animate(x, isRightSide ? -window.innerWidth * 2 : 0, {
				duration: 0.5,
				ease: [0.42, 0, 0.58, 1], // ease-in-out
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
				<h1 className={style.title}>An unsung bauta</h1>

				<h2 className={style.subtitle}>A celebrated hero</h2>

				<a href="#" className={`${style.link} ${style.arrow}`}>
					Explore the Babord story
				</a>
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
					dragElastic={0.1}
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
