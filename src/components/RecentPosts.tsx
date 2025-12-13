import { PostListItem } from "@/components/PostListItem";
import { contentful, type PostEntry } from "@/lib/contentful";

export const RecentPosts: React.FC = async () => {
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			order: ["-fields.date"],
			limit: 3,
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
		<div className="container py-64" id="contact">
			<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-neutral-100">
						Recent Posts
					</h2>
					<p className="mt-4 leading-7 text-neutral-400">My latest writings.</p>
				</div>
				<div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:gap-8">
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
};
