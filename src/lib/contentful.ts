import * as contentfulSdk from "contentful";

export const contentful = contentfulSdk.createClient({
	space: "5fcqcmwae8kw",
	accessToken: "ktED50FEgOP3Urd0dsHlVk8qEAYhElUFbckSdqtn_G4",
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
