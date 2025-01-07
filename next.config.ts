import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			// Redirect Blog
			{
				source: "/blog/:slug",
				destination: `${process.env.NEXT_PUBLIC_GHOST_URL}/:slug`,
				permanent: true,
			},
			{
				source: "/blog",
				destination: `${process.env.NEXT_PUBLIC_GHOST_URL}`,
				permanent: true,
			},
			{
				source: "/blog/tag/:slug",
				destination: `${process.env.NEXT_PUBLIC_GHOST_URL}/tag/:slug`,
				permanent: true,
			},
		];
	},
};

export default nextConfig;
