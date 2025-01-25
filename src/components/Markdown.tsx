import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

interface Props {
	children: string;
}

export async function Markdown(props: Props) {
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeShiki, {
			inline: "tailing-curly-colon",
			theme: "material-theme-darker",
		})
		.use(rehypeStringify)
		.process(props.children);

	// biome-ignore lint/security/noDangerouslySetInnerHtml: Yeehaw
	return <div dangerouslySetInnerHTML={{ __html: String(file) }} />;
}
