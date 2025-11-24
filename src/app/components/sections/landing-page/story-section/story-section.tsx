import Image from "next/image";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./story-section.module.css";

export function StorySection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				<Image
					src="/background-story.jpg"
					width={2816}
					height={1760}
					alt="Story background"
				/>
			</div>

			<section className={style.storySection}>
				<h1 className={style.title}>An unsung bauta</h1>

				<h2 className={style.subtitle}>A celebrated hero</h2>

				<a href="#" className={`${style.link} ${style.arrow}`}>
					Explore the Babord story
				</a>
			</section>
		</SectionWrapper>
	);
}

export default StorySection;
