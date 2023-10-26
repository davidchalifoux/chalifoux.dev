import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import classNames from "classnames";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chalifoux.dev"),
  title: "Chalifoux.dev - David Chalifoux",
  description:
    "David Chalifoux is a developer who loves the web. This is his personal site.",
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(font.className, "bg-neutral-900")}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
