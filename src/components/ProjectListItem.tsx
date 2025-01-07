import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import classNames from "classnames";
import { ProjectListItemTooltips } from "./ProjectListemItemTooltips";

type Props = {
	image: StaticImageData;
	title: string;
	description: string;
	technologies: string[];
	websiteUrl?: string;
	repoUrl?: string;
};

export const ProjectListItem: React.FC<Props> = (props) => {
	return (
		<div>
			<ProjectListItemTooltips />
			<Image
				className="aspect-[4/3] w-full rounded-lg object-cover border border-neutral-800"
				src={props.image}
				alt="Project image"
			/>
			<div className="mt-6 text-xl font-semibold leading-8 text-neutral-100">
				{props.title}
			</div>
			<div className="text-sm leading-7 text-neutral-500">
				{props.technologies.join(" • ")}
			</div>
			<div className="mt-4 text-base leading-7 text-neutral-400">
				{props.description}
			</div>
			<div className="mt-4 text-neutral-400">
				{props.websiteUrl && (
					<Link
						href={props.websiteUrl}
						className={classNames(
							"hover:text-yellow-300 mr-4",
							"anchor-website",
						)}
						target="_blank"
					>
						<GlobeAltIcon className="inline-block h-5 w-5" />
					</Link>
				)}
				{props.repoUrl && (
					<Link
						href={props.repoUrl}
						className={classNames("hover:text-yellow-300 mr-4", "anchor-repo")}
						target="_blank"
					>
						<CodeBracketIcon className="inline-block h-5 w-5" />
					</Link>
				)}
			</div>
		</div>
	);
};
