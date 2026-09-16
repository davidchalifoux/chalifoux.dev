import { css } from "styled-system/css";
import { PostListItem } from "@/components/PostListItem";
import { contentful, type PostEntry } from "@/lib/contentful";
import { container } from "@/lib/styles";

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
		<div className={css(container, { py: "64" })} id="contact">
			<div
				className={css({
					display: "grid",
					gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
					columnGap: "2rem",
					rowGap: "2.5rem",
					lg: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
				})}
			>
				<div>
					<h2
						className={css({
							fontSize: "3xl",
							fontWeight: "bold",
							letterSpacing: "tight",
							color: "neutral.100",
						})}
					>
						Recent Posts
					</h2>
					<p
						className={css({
							mt: "4",
							lineHeight: "1.75rem",
							color: "neutral.400",
						})}
					>
						My latest writings.
					</p>
				</div>
				<div
					className={css({
						display: "grid",
						gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
						gap: "1.5rem",
						lg: { gridColumn: "span 2 / span 2", gap: "2rem" },
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
};
