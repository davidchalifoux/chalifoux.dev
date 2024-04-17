import { Tag } from "@tryghost/content-api";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  title: string;
  published_at: string;
  tags: Tag[];
  slug: string;
  excerpt: string;
};

export const PostListItem: React.FC<Props> = (props) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={props.published_at ?? undefined}
          className="text-neutral-500"
        >
          {dayjs(props.published_at).format("YYYY-MM-DD")}
        </time>

        {props.tags?.map((tag) => {
          return (
            <Link
              key={tag.id}
              href={`${process.env.NEXT_PUBLIC_GHOST_URL}/tag/${tag.slug}`}
              className="relative z-10 rounded-full bg-neutral-800 px-3 py-1.5 font-medium text-neutral-400 hover:bg-neutral-950"
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-100 group-hover:underline underline-offset-4">
          <Link href={`${process.env.NEXT_PUBLIC_GHOST_URL}/${props.slug}`}>
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
