"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { studio } from "@/lib/studio";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const updateScroll = () => setScrolled(window.scrollY > 0);
		updateScroll();
		window.addEventListener("scroll", updateScroll, { passive: true });
		return () => window.removeEventListener("scroll", updateScroll);
	}, []);

	return (
		<header className={studio.nav} data-scrolled={scrolled ? "" : undefined}>
			<div className={studio.navInner}>
				<Link href="/" className={studio.wordmark}>
					David Chalifoux<span>.</span>
				</Link>
				<nav aria-label="Main navigation" className={studio.navLinks}>
					<Link href="/#work">Work</Link>
					<Link href="/#projects">Projects</Link>
					<Link href="/#links">Links</Link>
					<Link href="/blog">Writing</Link>
				</nav>
			</div>
		</header>
	);
}
