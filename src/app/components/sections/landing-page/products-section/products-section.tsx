"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SectionWrapper from "../../../section-wrapper/section-wrapper";
import style from "./products-section.module.css";

import product1Image from "@/app/assets/images/products-section/product-1.jpg";
import product2Image from "@/app/assets/images/products-section/product-2.jpg";
import product3Image from "@/app/assets/images/products-section/product-3.jpg";
import product4Image from "@/app/assets/images/products-section/product-4.jpg";
import { useRef, useState } from "react";
import { useHover } from "@/app/hooks/use-hover";

const productCards: Omit<ProductCardProps, "index">[] = [
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
		alt: "Prepared salmon fish being presented on a cast iron pan with herbs and vegetables",
		description:
			"Pink fish prepared as fine fillets A-F trim, portions on required specification or blocks of B&P and bellies. Available fresh, frozen or chilled in a variety of packaging options.",
	},
	{
		title: "Breaded fish",
		slug: "breaded-fish",
		image: product3Image,
		alt: "Breaded fish sticks served with lemon and dipping sauce",
		description:
			"A varied selection of breaded products including fish fingers, burgers, fish fillets and many more. Available frozen in a variety of packaging options.",
	},
	{
		title: "Babord Specials",
		slug: "trout",
		image: product4Image,
		alt: "Seasoned trout prepared with herbs and lemon slices",
		description: "Seafood specialties from Babord.",
	},
];

export function ProductsSection() {
	return (
		<SectionWrapper className={style.productsSectionWrapper}>
			<section className={style.productsSection}>
				<h1>Products</h1>
				<ul>
					{productCards.map((productCard, index) => (
						<ProductCard
							key={index}
							index={index + 1}
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
	index: number;
	slug: string;
	title: string;
	image: StaticImageData;
	alt: string;
	description: string;
};

function ProductCard({ index, slug, title, image, alt, description }: ProductCardProps) {
	const productCardRef = useRef(null);
	const productImageWrapperRef = useRef(null);
	const isProductCardHovered = useHover(productCardRef);
	const isProductImageWrapperHovered = useHover(productImageWrapperRef);

	const href = `#products/${slug}`;
	const key = index.toString().padStart(2, "0");

	return (
		<li
			className={style.productCard}
			onMouseEnter={toggleCardHovered}
			onMouseLeave={toggleCardHovered}
		>
			<Link href={href} aria-label={`Open product ${title}`}>
				<div className={style.productHeader}>
					<span className={style.productKey}>{key}</span>
					<span className={style.productKeyLead}></span>
					<h2 className={style.productTitle}>{title}</h2>
				</div>
				<div
					className={style.productImageWrapper}
					onMouseEnter={(e) =>
						e.currentTarget.classList.add(style.productImageWrapperHover)
					}
					onMouseLeave={(e) =>
						e.currentTarget.classList.remove(style.productImageWrapperHover)
					}
				>
					<Image alt={alt} src={image} placeholder="blur" fill />
				</div>
				<div className={style.productFooter}>
					<p>{description}</p>
					<span className={style.goTo}>Go to product →</span>
				</div>
			</Link>
		</li>
	);
}
