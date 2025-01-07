const GHOST_URL = process.env.NEXT_PUBLIC_GHOST_URL;

if (!GHOST_URL) {
	throw new Error("GHOST_URL is required");
}

export const CLIENT_ENV = {
	GHOST_URL,
};
