import { type PostEntry, contentful } from "@/lib/contentful";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Blog(props: Props) {
	const params = await props.params;
	const posts = await contentful.withoutUnresolvableLinks.getEntries<PostEntry>(
		{
			content_type: "blogPost",
			order: ["-fields.date"],
			limit: 1,
			"fields.slug": params.slug,
		},
	);

	console.log(posts);

	return <div>Blog</div>;
}
