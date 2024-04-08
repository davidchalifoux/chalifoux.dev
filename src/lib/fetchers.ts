"use server";

import { PostOrPage, Tag } from "@tryghost/content-api";
import { notFound } from "next/navigation";

/**
 * Fetches the 3 most recent posts from Ghost
 *
 * Sorted by published date, descending
 */
export const getRecentPosts = async () => {
  const params = new URLSearchParams({
    key: process.env.GHOST_KEY!,
    limit: "3",
    include: "tags",
    filter: "visibility:public",
  });

  const res = await fetch(
    `${process.env.GHOST_URL!}/ghost/api/content/posts?${params.toString()}`,
  );

  const body = (await res.json()) as {
    posts: PostOrPage[];
  };

  return body.posts;
};

/**
 * Fetches all posts from Ghost
 *
 * Sorts by published date, descending
 */
export const getAllPosts = async () => {
  const params = new URLSearchParams({
    key: process.env.GHOST_KEY!,
    limit: "all",
    include: "tags",
    filter: "visibility:public",
  });

  const res = await fetch(
    `${process.env.GHOST_URL!}/ghost/api/content/posts?${params.toString()}`,
  );

  const body = (await res.json()) as {
    posts: PostOrPage[];
  };

  return body.posts;
};

/**
 * Fetches all posts for a given tag
 *
 * Sorted by published date, descending
 */
export const getPostsByTag = async (args: { tag: string }) => {
  const params = new URLSearchParams({
    key: process.env.GHOST_KEY!,
    limit: "all",
    include: "tags",
    filter: `visibility:public+tag:${args.tag}`,
  });

  const res = await fetch(
    `${process.env.GHOST_URL!}/ghost/api/content/posts?${params.toString()}`,
  );

  const body = (await res.json()) as {
    posts: PostOrPage[];
  };

  return body.posts;
};

/**
 * Fetches a single post by slug
 */
export const getPostBySlug = async (args: { slug: string }) => {
  const params = new URLSearchParams({
    key: process.env.GHOST_KEY!,
    include: "tags",
    filter: "visibility:public",
  });

  const res = await fetch(
    `${process.env.GHOST_URL!}/ghost/api/content/posts/slug/${args.slug}?${params.toString()}`,
  );

  const body = (await res.json()) as {
    posts: PostOrPage[];
  };

  if (body.posts.length === 0) {
    return notFound();
  }

  return body.posts[0];
};

/**
 * Fetches a single tag by slug
 */
export const getTagBySlug = async (args: { slug: string }) => {
  const params = new URLSearchParams({
    key: process.env.GHOST_KEY!,
  });

  const res = await fetch(
    `${process.env.GHOST_URL!}/ghost/api/content/tags/slug/${args.slug}?${params.toString()}`,
  );

  const body = (await res.json()) as {
    tags: Tag[];
  };

  if (body.tags.length === 0) {
    return notFound();
  }

  return body.tags[0];
};
