import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./story-section.module.css";

export function StorySection() {
	return (
		<SectionWrapper>
			<div className={style.imageWrapper}>
				{/* Usa a imagem em `public/background-story.jpg` conforme solicitado */}
				<img src="/background-story.jpg" alt="Story background" />
			</div>

			<section className={style.storySection}>
				{/* Conteúdo da seção (texto, botões, etc.) pode ser adicionado aqui por você */}
			</section>
		</SectionWrapper>
	);
}

export default StorySection;
