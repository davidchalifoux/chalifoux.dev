import { PostListItem } from "@/components/PostListItem";
import { getPostBySlug, getPostsByTag, getTagBySlug } from "@/lib/fetchers";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const tag = await getTagBySlug({ slug: params.slug });

    const posts = await getPostsByTag({ tag: params.slug });

    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
              {tag.name}
            </h2>
            <p className="mt-2 text-lg leading-8 text-neutral-400">
              {tag.description}
            </p>
            <div className="mt-16 space-y-16 border-t border-neutral-800 pt-10">
              {posts.map((post) => (
                <PostListItem
                  key={post.id}
                  title={post.title ?? ""}
                  published_at={post.published_at ?? ""}
                  tags={post.tags ?? []}
                  slug={post.slug}
                  excerpt={post.excerpt ?? ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
