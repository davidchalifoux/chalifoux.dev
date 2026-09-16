import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { css } from "styled-system/css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: "#171717",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://www.chalifoux.dev"),
	title: "David Chalifoux",
	description:
		"David Chalifoux is a developer who loves the web. This is his personal site.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<div className={css({ isolation: "isolate" })}>
					<Navbar />
					{children}
					<Footer />
				</div>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
