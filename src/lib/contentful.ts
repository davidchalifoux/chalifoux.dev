import * as contentfulSdk from "contentful";
import { SERVER_ENV } from "@/lib/SERVER_ENV";

export const contentful = contentfulSdk.createClient({
	space: SERVER_ENV.CONTENTFUL_SPACE_ID,
	accessToken: SERVER_ENV.IS_PRODUCTION
		? SERVER_ENV.CONTENTFUL_API_KEY
		: SERVER_ENV.CONTENTFUL_PREVIEW_API_KEY,
	host: SERVER_ENV.IS_PRODUCTION ? undefined : "preview.contentful.com",
});

export interface TagEntry {
	contentTypeId: "tag";
	fields: {
		title: contentfulSdk.EntryFieldTypes.Symbol;
		slug: contentfulSdk.EntryFieldTypes.Symbol;
	};
}

export interface PostEntry {
	contentTypeId: "blogPost";
	fields: {
		title: contentfulSdk.EntryFieldTypes.Symbol;
		slug: contentfulSdk.EntryFieldTypes.Symbol;
		date: contentfulSdk.EntryFieldTypes.Date;
		body: contentfulSdk.EntryFieldTypes.Text;
		excerpt: contentfulSdk.EntryFieldTypes.Text;
		tags: contentfulSdk.EntryFieldTypes.Array<
			contentfulSdk.EntryFieldTypes.EntryLink<TagEntry>
		>;
	};
}
