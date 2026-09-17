import type { Entry } from "contentful";
import { DateTime } from "luxon";
import Link from "next/link";
import { css, cx } from "styled-system/css";
import type { TagEntry } from "@/lib/contentful";

type Props = {
	title: string;
	published_at: string;
	tags: (Entry<TagEntry, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[];
	slug: string;
	excerpt: string;
};

export const PostListItem: React.FC<Props> = (props) => {
	return (
		<article
			className={css({
				display: "flex",
				maxWidth: "36rem",
				flexDirection: "column",
				alignItems: "flex-start",
			})}
		>
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					columnGap: "4",
					fontSize: "xs",
				})}
			>
				<time
					dateTime={props.published_at ?? undefined}
					className={css({ color: "neutral.500" })}
				>
					{DateTime.fromISO(props.published_at).toISODate()}
				</time>

				{props.tags?.map((tag) => {
					if (!tag) {
						return null;
					}

					return (
						<Link
							key={tag.sys.id}
							href={`/tag/${tag.fields.slug}`}
							className={css({
								position: "relative",
								borderRadius: "full",
								bg: "neutral.800",
								px: "3",
								py: "1.5",
								fontWeight: "medium",
								color: "neutral.400",
								_hover: { bg: "neutral.950" },
							})}
						>
							{tag.fields.title}
						</Link>
					);
				})}
			</div>

			<div className={cx("group", css({ position: "relative" }))}>
				<h3
					className={css({
						mt: "3",
						fontSize: "lg",
						fontWeight: "semibold",
						lineHeight: "1.5rem",
						color: "neutral.100",
						_groupHover: {
							textDecoration: "underline",
							textUnderlineOffset: "4px",
						},
					})}
				>
					<Link href={`/post/${props.slug}`}>
						<span className={css({ position: "absolute", inset: "0" })} />
						{props.title}
					</Link>
				</h3>
				<p
					className={css({
						mt: "5",
						lineClamp: 3,
						fontSize: "sm",
						lineHeight: "1.5rem",
						color: "neutral.400",
					})}
				>
					{props.excerpt}
				</p>
			</div>
		</article>
	);
};
