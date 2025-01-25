import { PostListItem } from "@/components/PostListItem";
import { type PostEntry, contentful } from "@/lib/contentful";

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
		<div className="py-24 sm:py-32">
			<div className="container">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">
						Blog
					</h2>
					<p className="mt-2 text-lg/8 text-neutral-400">
						Things I've learned.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16">
					{posts.items.map((post) => (
						<PostListItem
							key={post.sys.id}
							title={post.fields.title}
							published_at={post.fields.date}
							tags={post.fields.tags}
							slug={post.fields.slug}
							excerpt={post.fields.excerpt}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
