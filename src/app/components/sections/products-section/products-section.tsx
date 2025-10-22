import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SectionWrapper from "../../section-wrapper/section-wrapper";
import style from "./products-section.module.css";

import product1Image from "@/app/assets/images/products-section/product-1.jpg";
import product2Image from "@/app/assets/images/products-section/product-2.jpg";
import product3Image from "@/app/assets/images/products-section/product-3.jpg";
import product4Image from "@/app/assets/images/products-section/product-4.jpg";

const productCards: ProductCardProps[] = [
	{
		slug: "cod",
		title: "White Fish",
		image: product1Image,
		alt: "Cod fish prepared on a grill with herbs and specialties",
		description:
			"White fish prepared as fine fillets, loins, in portions, tails and B&P. Can also be supplied whole. Available fresh, frozen or chilled in a variety of packaging options.",
	},
];

export default function ProductsSection() {
	return (
		<SectionWrapper className={style.productsSectionWrapper}>
			<section className={style.productsSection}>
				<h1>Products</h1>
				<ul>
					{productCards.map((productCard) => (
						<ProductCard
							key={productCard.slug}
							slug={productCard.slug}
							title={productCard.title}
							image={productCard.image}
							alt={productCard.alt}
							description={productCard.description}
						/>
					))}
				</ul>
			</section>
		</SectionWrapper>
	);
}

type ProductCardProps = {
	slug: string;
	title: string;
	image: StaticImageData;
	alt: string;
	description: string;
};

function ProductCard({ slug, title, image, alt, description }: ProductCardProps) {
	const href = `#products/${slug}`;

	return (
		<li>
			<Link href={href} aria-label={`Open product ${title}`}>
				<h2>{title}</h2>
				<div className={style.productImageWrapper}>
					<Image alt={alt} src={image} placeholder="blur" />
				</div>
				<p>{description}</p>
				<span>Go to product →</span>
			</Link>
		</li>
	);
}
