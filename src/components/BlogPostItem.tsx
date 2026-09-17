import type { Entry } from "contentful";
import { DateTime } from "luxon";
import Link from "next/link";
import { blog } from "@/lib/blog";
import type { PostEntry } from "@/lib/contentful";

type Props = {
	post: Entry<PostEntry, "WITHOUT_UNRESOLVABLE_LINKS", string>;
};

export function BlogPostItem({ post }: Props) {
	const { title, date, slug, excerpt, tags } = post.fields;
	const publishedDate = date ? DateTime.fromISO(date).toISODate() : null;
	return (
		<article className={blog.post}>
			<div className={blog.meta}>
				{publishedDate && <time dateTime={date}>{publishedDate}</time>}
				{tags?.map(
					(tag) =>
						tag && (
							<Link
								key={tag.sys.id}
								className={blog.tag}
								href={`/tag/${tag.fields.slug}`}
							>
								{tag.fields.title}
							</Link>
						),
				)}
			</div>
			<h2 className={blog.postTitle}>
				<Link className={blog.postLink} href={`/post/${slug}`}>
					{title}
				</Link>
			</h2>
			{excerpt && <p className={blog.excerpt}>{excerpt}</p>}
		</article>
	);
}
