import { PostListItem } from "@/components/PostListItem";
import { getRecentPosts } from "@/lib/fetchers";

export const RecentPosts: React.FC = async () => {
  const posts = await getRecentPosts();

  return (
    <div className="container py-64" id="contact">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-100">
            Recent Posts
          </h2>
          <p className="mt-4 leading-7 text-neutral-400">My latest writings.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:gap-8">
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
  );
};
