import type { TagEntry } from "@/lib/contentful";
import type { Entry } from "contentful";
import { DateTime } from "luxon";
import Link from "next/link";

type Props = {
	title: string;
	published_at: string;
	tags: (Entry<TagEntry, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[];
	slug: string;
	excerpt: string;
};

export const PostListItem: React.FC<Props> = (props) => {
	return (
		<article className="flex max-w-xl flex-col items-start">
			<div className="flex items-center gap-x-4 text-xs">
				<time
					dateTime={props.published_at ?? undefined}
					className="text-neutral-500"
				>
					{DateTime.fromISO(props.published_at).toISODate()}
				</time>

				{props.tags.map((tag) => {
					if (!tag) {
						return null;
					}

					return (
						<Link
							key={tag.sys.id}
							href={`/tag/${tag.fields.slug}`}
							className="relative rounded-full bg-neutral-800 px-3 py-1.5 font-medium text-neutral-400 hover:bg-neutral-950"
						>
							{tag.fields.title}
						</Link>
					);
				})}
			</div>

			<div className="group relative">
				<h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-100 group-hover:underline underline-offset-4">
					<Link href={`/post/${props.slug}`}>
						<span className="absolute inset-0" />
						{props.title}
					</Link>
				</h3>
				<p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-400">
					{props.excerpt}
				</p>
			</div>
		</article>
	);
};
