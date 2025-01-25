import assert from "node:assert";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_API_KEY = process.env.CONTENTFUL_API_KEY;

assert(CONTENTFUL_API_KEY, "CONTENTFUL_API_KEY is required");

assert(CONTENTFUL_SPACE_ID, "CONTENTFUL_SPACE_ID is required");

export const SERVER_ENV = {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_API_KEY,
};
