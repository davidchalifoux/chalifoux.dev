import type { Metadata } from "next";
import { BlogPostItem } from "@/components/BlogPostItem";
import { blog } from "@/lib/blog";
import { contentful, type PostEntry } from "@/lib/contentful";

export const metadata: Metadata = {
	title: "Blog · David Chalifoux",
	description:
		"Things I’m learning, ideas I’m exploring, and notes from building on the web.",
};

export default async function Blog() {
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			order: ["-fields.date"],
			select: [
				"metadata",
				"fields.date",
				"fields.excerpt",
				"fields.slug",
				"fields.tags",
				"fields.title",
			],
		},
	);

	return (
		<main className={blog.page}>
			<header className={blog.hero}>
				<h1 className={blog.title}>Things I’ve learned.</h1>
				<p className={blog.intro}>
					Ideas I’m exploring, problems I’ve worked through, and notes from
					building on the web.
				</p>
			</header>
			<section aria-label="Blog posts">
				{posts.items.length > 0 ? (
					<div className={blog.list}>
						{posts.items.map((post) => (
							<BlogPostItem key={post.sys.id} post={post} />
						))}
					</div>
				) : (
					<p className={blog.empty}>Nothing published yet. Check back soon.</p>
				)}
			</section>
		</main>
	);
}
