import { Markdown } from "@/components/Markdown";
import { type PostEntry, contentful } from "@/lib/contentful";
import { notFound } from "next/navigation";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function BlogPost(props: Props) {
	const params = await props.params;
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			limit: 1,
			"fields.slug": params.slug,
		},
	);

	if (posts.items.length === 0) {
		return notFound();
	}

	const post = posts.items[0];

	return (
		<div className={"container py-32 text-neutral-100"}>
			<p className="text-base/7 font-semibold text-yellow-300">
				{post.fields.tags.map((r) => {
					if (!r) {
						return null;
					}

					return <span key={r.sys.id}>{r.fields.title}</span>;
				})}
			</p>
			<h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-100 sm:text-5xl">
				{post.fields.title}
			</h1>
			<p className="mt-6 text-xl/8 text-neutral-400">{post.fields.excerpt}</p>
			<article className="mt-10 max-w-2xl prose prose-neutral scheme-dark dark:prose-invert">
				<Markdown>{post.fields.body}</Markdown>
				{/*<Markdown*/}
				{/*	components={{*/}
				{/*		code(props) {*/}
				{/*			const { children, className, node, ...rest } = props;*/}
				{/*			const match = /language-(\w+)/.exec(className || "");*/}
				{/*			return match ? (*/}
				{/*				// @ts-ignore*/}
				{/*				<CodeBlock lang={match[1]}>{String(children)}</CodeBlock>*/}
				{/*			) : (*/}
				{/*				<code {...rest} className={className}>*/}
				{/*					{children}*/}
				{/*				</code>*/}
				{/*			);*/}
				{/*		},*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{post.fields.body}*/}
				{/*</Markdown>*/}
			</article>
		</div>
	);
}
