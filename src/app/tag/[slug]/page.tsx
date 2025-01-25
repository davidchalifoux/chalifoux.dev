interface Props {
	params: Promise<{ slug: string }>;
}

export default function TagPage(props: Props) {
	return (
		<div className={"py-96 text-neutral-100 text-center"}>
			<p>
				This currently a work in-progress. <br /> Try again later.
			</p>
		</div>
	);
}
