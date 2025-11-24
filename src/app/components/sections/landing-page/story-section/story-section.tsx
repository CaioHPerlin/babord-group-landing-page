import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./story-section.module.css";

export function StorySection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				<img src="/background-story.jpg" alt="Story background" />
			</div>

			<section className={style.storySection}>
				<span className={style.title}>An unsung bauta</span>

				<span className={style.subtitle}>A celebrated hero</span>

				<a href="#" className={style.link}>
					Explore the Babord story
				</a>
			</section>
		</SectionWrapper>
	);
}

export default StorySection;
