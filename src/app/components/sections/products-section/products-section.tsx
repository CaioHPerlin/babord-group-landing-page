import SectionWrapper from "../../section-wrapper/section-wrapper";
import style from "./products-section.module.css";

export default function ProductsSection() {
	return (
		<SectionWrapper className={style.productsSectionWrapper}>
			<section className={style.productsSection}>secao produtos</section>
		</SectionWrapper>
	);
}
