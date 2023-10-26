import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import classNames from "classnames";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chalifoux.dev - David Chalifoux",
  description: "David Chalifoux is a developer who loves the web.",
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
      </body>
    </html>
  );
}
