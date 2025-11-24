import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./inspiration-section.module.css";
import Image from "next/image";

import sectionThumbnailImage from "@/app/assets/images/inspiration-section/thumb.jpg";
import wavePatternImage from "@/app/assets/images/wave-pattern.png";

export function InspirationSection() {
	return (
		<SectionWrapper>
			<section className={style.inspirationSection}>
				<div className={style.left}>
					<Image
						className={style.image}
						src={sectionThumbnailImage}
						alt="Inspiration"
						fill
					/>
				</div>

				<div className={style.right}>
					<div className={style.bgPink} />
					<Image
						className={style.bgImage}
						src={wavePatternImage}
						alt="Background"
						fill
					/>
					<div className={style.content}>
						<h2>Inspiration</h2>
						<h2>For the love of good</h2>

						<p>
							Longing to return to the harbour. Longing for your partner to return
							home. Longing is one of the names we have for love. But when you are
							longing for something good, you’re not waiting in vain. So for the
							love of good, we have prepared these tasty fish recipes. All exciting
							and easy combinations so you don’t have to wait too long. Enjoy.
						</p>
						<h3 className={style.arrow}>Explore the babord recipes</h3>
					</div>
				</div>
			</section>
		</SectionWrapper>
	);
}
