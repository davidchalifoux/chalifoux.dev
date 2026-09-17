import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ArrowUpRightIcon";
import { PostListItem } from "@/components/PostListItem";
import { contentful, type PostEntry } from "@/lib/contentful";
import { studio } from "@/lib/studio";

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
		<section className={studio.writing} aria-labelledby="writing-heading">
			<div className={studio.writingInner}>
				<div>
					<h2 id="writing-heading" className={studio.writingTitle}>
						A place to think out loud.
					</h2>
					<p className={studio.writingCopy}>
						Things I’m learning, ideas I’m exploring, and notes from building on
						the web.
					</p>
					<Link className={studio.textLink} href="/blog">
						Read my blog
						<ArrowUpRightIcon />
					</Link>
				</div>
				<div className={studio.postGrid}>
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
		</section>
	);
};
