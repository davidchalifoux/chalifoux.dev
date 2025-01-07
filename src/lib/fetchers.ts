import type { PostOrPage } from "@tryghost/content-api";
import { CLIENT_ENV } from "./CLIENT_ENV";
import { SERVER_ENV } from "./SERVER_ENV";

/**
 * Fetches the 3 most recent posts from Ghost
 *
 * Sorted by published date, descending
 */
export const getRecentPosts = async (): Promise<PostOrPage[]> => {
	try {
		const params = new URLSearchParams({
			key: SERVER_ENV.GHOST_KEY,
			limit: "3",
			include: "tags",
			filter: "visibility:public",
		});

		const res = await fetch(
			`${CLIENT_ENV.GHOST_URL}/ghost/api/content/posts?${params.toString()}`,
			{ next: { revalidate: 1800 } },
		);

		if (!res.ok) {
			console.error(await res.json());
			throw new Error("Failed to fetch posts");
		}

		const body = (await res.json()) as {
			posts: PostOrPage[];
		};

		return body.posts ?? [];
	} catch (error) {
		console.error(error);
		return [];
	}
};
