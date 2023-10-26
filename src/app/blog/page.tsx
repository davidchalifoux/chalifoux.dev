import { PostListItem } from "@/components/PostListItem";
import { getAllPosts } from "@/lib/fetchers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Chalifoux - Blog",
  description: "Things I've learned.",
};

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-neutral-400">
            Things I&apos;ve learned.
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
}
