"use server";

import type { PostOrPage } from "@tryghost/content-api";

/**
 * Fetches the 3 most recent posts from Ghost
 *
 * Sorted by published date, descending
 */
export const getRecentPosts = async (): Promise<PostOrPage[]> => {
  try {
    const params = new URLSearchParams({
      key: process.env.GHOST_KEY!,
      limit: "3",
      include: "tags",
      filter: "visibility:public",
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_GHOST_URL!}/ghost/api/content/posts?${params.toString()}`,
    );

    const body = (await res.json()) as {
      posts: PostOrPage[];
    };

    return body.posts ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
