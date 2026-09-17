import { createThemeCss } from "@tanstack/highlight/theme";
import { oneDarkProTheme } from "@tanstack/highlight/themes/one-dark-pro";
import { Markdown as TanStackMarkdown } from "@tanstack/markdown/react";

import { highlightMarkdownCode } from "@/lib/highlight";

interface Props {
	children: string;
}

const themeCss = `${createThemeCss({
	dark: oneDarkProTheme,
	darkSelector: ".prose",
	codeBlockSelector: ".prose pre.tm-code",
	lineNumbersSelector: ".prose .tm-code--line-numbers",
})}
.prose .tm-code-frame > pre {
	margin: 0;
}
.prose .tm-code-frame > figcaption {
	margin: 0;
	padding: 0.5rem 1rem;
	border-bottom: 1px solid #3f3f46;
	color: #a3a3a3;
	font-size: 0.8125rem;
}`;

export function Markdown(props: Props) {
	return (
		<>
			<style>{themeCss}</style>
			<TanStackMarkdown highlighter={highlightMarkdownCode}>
				{props.children}
			</TanStackMarkdown>
		</>
	);
}
