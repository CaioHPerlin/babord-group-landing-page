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
		title: "White fish",
		slug: "cod",
		image: product1Image,
		alt: "Cod fish prepared on a grill with herbs and specialties",
		description:
			"White fish prepared as fine fillets, loins, in portions, tails and B&P. Can also be supplied whole. Available fresh, frozen or chilled in a variety of packaging options.",
	},
	{
		title: "Pink fish",
		slug: "salmon",
		image: product2Image,
		alt: "Salmon fish served with vegetables and lemon",
		description:
			"Pink fish prepared as fine fillets A-F trim, portions on required specification or blocks of B&P and bellies. Available fresh, frozen or chilled in a variety of packaging options.",
	},
	{
		title: "Breaded fish",
		slug: "breaded-fish",
		image: product3Image,
		alt: "Breaded fish sticks served with lemon and sauce",
		description:
			"A varied selection of breaded products including fish fingers, burgers, fish fillets and many more. Available frozen in a variety of packaging options.",
	},
	{
		title: "Babord Specials",
		slug: "trout",
		image: product4Image,
		alt: "Trout fish served with herbs",
		description: "Seafood specialties from Babord",
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
