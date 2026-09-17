import { studio } from "@/lib/studio";

type Props = { title: string; description: string; id?: string };

export function Header(props: Props) {
	return (
		<div className={studio.sectionHeading}>
			<div>
				<h2 id={props.id}>{props.title}</h2>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
