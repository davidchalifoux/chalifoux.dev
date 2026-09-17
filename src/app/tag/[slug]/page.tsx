import { css } from "styled-system/css";

export default function TagPage(_props: PageProps<"/tag/[slug]">) {
	return (
		<div
			className={css({ py: "96", color: "neutral.100", textAlign: "center" })}
		>
			<p>
				This currently a work in-progress. <br /> Try again later.
			</p>
		</div>
	);
}
