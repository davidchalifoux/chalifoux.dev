import { ArrowUpRightIcon } from "@/components/ArrowUpRightIcon";
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
						<a href="mailto:mail@chalifoux.dev">
							Email
							<ArrowUpRightIcon />
						</a>
						<a href="https://github.com/davidchalifoux">
							GitHub
							<ArrowUpRightIcon />
						</a>
						<a href="https://bsky.app/profile/chalifoux.dev">
							Bluesky
							<ArrowUpRightIcon />
						</a>
						<a href="https://x.com/chalifouxdev">
							X<ArrowUpRightIcon />
						</a>
						<a href="https://www.linkedin.com/in/david-chalifoux/">
							LinkedIn
							<ArrowUpRightIcon />
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}
