import { studio } from "@/lib/studio";

export function Footer() {
	return (
		<footer className={studio.footer}>
			<div className={studio.footerInner}>
				<div className={studio.footerRow}>
					<span>
						David Chalifoux<span className={studio.brandDot}>.</span>
					</span>
					<nav aria-label="Social and contact links">
						<a href="mailto:mail@chalifoux.dev">Email ↗</a>
						<a href="https://github.com/davidchalifoux">GitHub ↗</a>
						<a href="https://bsky.app/profile/chalifoux.dev">Bluesky ↗</a>
						<a href="https://x.com/chalifouxdev">X ↗</a>
						<a href="https://www.linkedin.com/in/david-chalifoux/">
							LinkedIn ↗
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}
