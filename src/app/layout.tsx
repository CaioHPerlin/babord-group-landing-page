import { bluuSuperstarFont, maisonNeueFont } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Babord Group - Harbour to home",
	description: "Babord Group landing page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bluuSuperstarFont.variable} ${maisonNeueFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
