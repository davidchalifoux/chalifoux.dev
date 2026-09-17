import { Header } from "@/components/Header";
import { studio } from "@/lib/studio";

const links = [
	{
		title: "Email",
		detail: "mail@chalifoux.dev",
		href: "mailto:mail@chalifoux.dev",
	},
	{
		title: "GitHub",
		detail: "/davidchalifoux",
		href: "https://github.com/davidchalifoux",
	},
	{
		title: "Bluesky",
		detail: "@chalifoux.dev",
		href: "https://bsky.app/profile/chalifoux.dev",
	},
	{
		title: "X",
		detail: "@chalifouxdev",
		href: "https://x.com/chalifouxdev",
	},
	{
		title: "LinkedIn",
		detail: "/david-chalifoux",
		href: "https://www.linkedin.com/in/david-chalifoux/",
	},
];

export function Links() {
	return (
		<section
			id="links"
			aria-labelledby="links-heading"
			className={studio.section}
		>
			<Header
				id="links-heading"
				title="Links"
				description="Where you can find me online."
			/>
			<div className={studio.linksGrid}>
				{links.map((link) => (
					<a className={studio.linkCard} href={link.href} key={link.title}>
						<h3>
							{link.title} <span aria-hidden="true">↗</span>
						</h3>
						<p>{link.detail}</p>
					</a>
				))}
			</div>
		</section>
	);
}
