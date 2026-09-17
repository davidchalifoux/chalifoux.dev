import Image, { type StaticImageData } from "next/image";
import { studio } from "@/lib/studio";

type Props = {
	image: StaticImageData;
	title: string;
	description: string;
	technologies: string[];
	websiteUrl?: string;
	repoUrl?: string;
	featured?: boolean;
};

export function ProjectListItem(props: Props) {
	return (
		<article
			className={studio.card}
			data-featured={props.featured ? "" : undefined}
		>
			<h3 className={studio.cardTitle}>{props.title}</h3>
			<p className={studio.technologies}>{props.technologies.join(" · ")}</p>
			<p className={studio.cardDescription}>{props.description}</p>
			<div className={studio.cardLinks}>
				{props.websiteUrl && (
					<a
						className={studio.textLink}
						href={props.websiteUrl}
						aria-label={`Explore ${props.title}`}
						target="_blank"
						rel="noreferrer"
					>
						Explore <span aria-hidden="true">↗</span>
					</a>
				)}
				{props.repoUrl && (
					<a
						className={studio.textLink}
						href={props.repoUrl}
						target="_blank"
						rel="noreferrer"
						aria-label={`View ${props.title} source code`}
					>
						Source code <span aria-hidden="true">↗</span>
					</a>
				)}
			</div>
			<Image
				src={props.image}
				alt={`${props.title} application interface`}
				className={studio.cardImage}
				data-featured={props.featured ? "" : undefined}
				sizes={
					props.featured
						? "(max-width: 768px) 90vw, 1000px"
						: "(max-width: 768px) 90vw, 520px"
				}
				loading={props.featured ? "eager" : "lazy"}
			/>
		</article>
	);
}
