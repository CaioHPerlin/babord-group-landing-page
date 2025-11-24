import type { NextConfig } from "next";

// @TODO allow only one local host in production
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
