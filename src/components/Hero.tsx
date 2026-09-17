import Image from "next/image";
import Link from "next/link";
import headshot from "@/assets/headshot.png";
import { studio } from "@/lib/studio";

export function Hero() {
	return (
		<section className={studio.hero}>
			<div>
				<h1 className={studio.heroTitle}>
					A little curiosity.
					<br />
					<span>A lot of care.</span>
				</h1>
				<p className={studio.intro}>
					I’m David, a developer who loves the web.
					<br /> This is where I share what I build and what I learn.
				</p>
				<div className={studio.heroActions}>
					<a className={studio.primaryLink} href="#work">
						Explore my work <span aria-hidden="true">↓</span>
					</a>
					<Link className={studio.textLink} href="/blog">
						Read my blog
					</Link>
				</div>
			</div>
			<div className={studio.portraitFrame}>
				<Image
					src={headshot}
					alt="David Chalifoux"
					className={studio.portrait}
					sizes="(max-width: 768px) 90vw, 480px"
					priority
				/>
			</div>
		</section>
	);
}
