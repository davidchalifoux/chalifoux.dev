import { RecentPosts } from "@/components/RecentPosts";
import { getPostBySlug } from "@/lib/fetchers";
import dayjs from "dayjs";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug({ slug: props.params.slug });

    return {
      title: post.title,
      description: post.excerpt,
      authors: {
        name: "David Chalifoux",
      },
      category: post.tags ? post.tags[0].name : undefined,
    };
  } catch (error) {
    return {
      title: "Post not found",
    };
  }
}

export default async function Page(props: Props) {
  try {
    const post = await getPostBySlug({ slug: props.params.slug });

    return (
      <>
        <div className="container py-32">
          <div className="prose prose-neutral prose-invert mx-auto">
            <h1>{post.title}</h1>

            <p className="flex items-center gap-x-4 text-sm">
              <time
                dateTime={post.published_at ?? undefined}
                className="text-neutral-500"
              >
                {dayjs(post.published_at).format("YYYY-MM-DD")}
              </time>

              {post.tags?.map((tag) => {
                return (
                  <Link
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    className="rounded-full bg-neutral-800 px-3 py-1.5 font-medium text-neutral-400 hover:bg-neutral-950 no-underline"
                  >
                    {tag.name}
                  </Link>
                );
              })}
            </p>

            <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />
          </div>
        </div>
        <RecentPosts />
      </>
    );
  } catch (error) {
    return notFound();
  }
}
