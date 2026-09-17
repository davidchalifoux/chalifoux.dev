import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { css, cx } from "styled-system/css";
import { Markdown } from "@/components/Markdown";
import { blog } from "@/lib/blog";
import { contentful, type PostEntry } from "@/lib/contentful";

export async function generateStaticParams() {
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			select: ["fields.slug"],
			limit: 1000,
		},
	);

	return posts.items.map((post) => ({
		slug: post.fields.slug,
	}));
}

export async function generateMetadata(
	props: PageProps<"/post/[slug]">,
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

export default async function BlogPost(props: PageProps<"/post/[slug]">) {
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
		<div className={blog.postPage}>
			<div className={css({ maxWidth: "65ch", mx: "auto" })}>
				<p
					className={css({
						fontSize: "md",
						lineHeight: "1.75rem",
						fontWeight: "semibold",
						color: "yellow.300",
					})}
				>
					{post.fields.tags?.map((r) => {
						if (!r) {
							return null;
						}

						return <span key={r.sys.id}>{r.fields.title}</span>;
					})}
				</p>

				<h1
					className={css({
						mt: "2",
						fontSize: "4xl",
						fontWeight: "semibold",
						letterSpacing: "tight",
						textWrap: "pretty",
						color: "neutral.100",
						sm: { fontSize: "5xl" },
					})}
				>
					{post.fields.title}
				</h1>

				<p
					className={css({
						mt: "6",
						fontSize: "lg",
						lineHeight: "2rem",
						color: "neutral.400",
					})}
				>
					{post.fields.excerpt}
				</p>

				<p className={css({ mt: "6", fontSize: "xs", color: "neutral.400" })}>
					<time>{post.fields.date}</time>
				</p>

				<article className={cx("prose", css({ mt: "10" }))}>
					<Markdown>{post.fields.body}</Markdown>
				</article>
			</div>
		</div>
	);
}
