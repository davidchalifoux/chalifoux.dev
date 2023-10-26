import { ghostApi } from "@/lib/ghost";
import { cache } from "react";

export const revalidate = 60;

/**
 * Fetches the 3 most recent posts from Ghost
 *
 * Sorted by published date, descending
 */
export const getRecentPosts = cache(async () => {
  return await ghostApi.posts.browse({
    limit: "3",
    order: "published_at DESC",
    filter: "visibility:public",
    include: "tags",
  });
});

/**
 * Fetches all posts from Ghost
 *
 * Sorts by published date, descending
 */
export const getAllPosts = cache(async () => {
  return await ghostApi.posts.browse({
    limit: "all",
    order: "published_at DESC",
    filter: "visibility:public",
    include: "tags",
  });
});

/**
 * Fetches all posts for a given tag
 *
 * Sorted by published date, descending
 */
export const getPostsByTag = cache(async (args: { tag: string }) => {
  return await ghostApi.posts.browse({
    limit: "all",
    order: "published_at DESC",
    filter: `visibility:public+tag:${args.tag}`,
    include: "tags",
  });
});

/**
 * Fetches a single post by slug
 */
export const getPostBySlug = cache(async (args: { slug: string }) => {
  return await ghostApi.posts.read(
    {
      slug: args.slug,
    },
    {
      include: "tags",
    }
  );
});

/**
 * Fetches a single tag by slug
 */
export const getTagBySlug = cache(async (args: { slug: string }) => {
  return await ghostApi.tags.read({ slug: args.slug });
});
