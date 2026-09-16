import { css } from "styled-system/css";
import { PostListItem } from "@/components/PostListItem";
import { contentful, type PostEntry } from "@/lib/contentful";
import { container } from "@/lib/styles";

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
		<div className={css({ py: "24", sm: { py: "32" } })}>
			<div className={css(container)}>
				<div className={css({ mx: "auto", maxWidth: "42rem" })}>
					<h2
						className={css({
							fontSize: "4xl",
							fontWeight: "semibold",
							letterSpacing: "tight",
							textWrap: "balance",
							color: "neutral.100",
							sm: { fontSize: "5xl" },
						})}
					>
						Blog
					</h2>
					<p
						className={css({
							mt: "2",
							fontSize: "lg",
							lineHeight: "2rem",
							color: "neutral.400",
						})}
					>
						Things I've learned.
					</p>
				</div>
				<div
					className={css({
						mx: "auto",
						mt: "16",
						display: "grid",
						maxWidth: "42rem",
						gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
						rowGap: "16",
					})}
				>
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
