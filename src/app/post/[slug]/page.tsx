import { Markdown } from "@/components/Markdown";
import { type PostEntry, contentful } from "@/lib/contentful";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata(
	props: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const params = await props.params;
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			limit: 1,
			"fields.slug": params.slug,
			select: ["fields.title", "fields.excerpt", "fields.date"],
		},
	);

	const previousImages = (await parent).openGraph?.images || [];

	if (posts.items.length === 0) {
		return {
			title: "Not found",
			openGraph: {
				images: previousImages,
			},
		};
	}

	const post = posts.items[0];

	return {
		title: post.fields.title,
		description: post.fields.excerpt,
		openGraph: {
			type: "article",
			title: post.fields.title,
			description: post.fields.excerpt,
			images: previousImages,
			publishedTime: post.fields.date,
		},
	};
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
		<div className={"px-8 pt-32 pb-64"}>
			<div className={"max-w-[65ch] mx-auto"}>
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

				<p className="mt-6 text-lg/8 text-neutral-400">{post.fields.excerpt}</p>

				<p className="mt-6 text-xs text-neutral-400">
					<time>{post.fields.date}</time>
				</p>

				<article className="mt-10 prose prose-neutral scheme-dark dark:prose-invert">
					<Markdown>{post.fields.body}</Markdown>
				</article>
			</div>
		</div>
	);
}
