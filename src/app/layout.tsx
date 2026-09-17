import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { studio } from "@/lib/studio";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
	display: "swap",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
	display: "swap",
});

export const viewport: Viewport = {
	themeColor: "#0a0a0a",
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
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>
				<div className={studio.site}>
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
