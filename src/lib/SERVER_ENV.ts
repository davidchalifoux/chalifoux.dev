import assert from "node:assert";

const GHOST_KEY = process.env.GHOST_KEY;

assert(GHOST_KEY, "GHOST_KEY is required");

export const SERVER_ENV = {
	GHOST_KEY,
};
