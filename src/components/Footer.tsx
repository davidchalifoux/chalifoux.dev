import { css } from "styled-system/css";
import { container } from "@/lib/styles";

export const Footer: React.FC = () => {
	return (
		<footer
			className={css(container, {
				py: "12",
				fontSize: "xs",
				lineHeight: "1.25rem",
				color: "neutral.500",
			})}
		>
			<p>Built by David Chalifoux with Next.js and PandaCSS.</p>
			<p>
				Source code available on{" "}
				<a href="https://github.com/davidchalifoux/chalifoux.dev">GitHub</a>.
			</p>
		</footer>
	);
};
