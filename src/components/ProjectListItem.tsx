"use client";

import { Tooltip } from "@base-ui/react/tooltip";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { css } from "styled-system/css";

type Props = {
	image: StaticImageData;
	title: string;
	description: string;
	technologies: string[];
	websiteUrl?: string;
	repoUrl?: string;
};

function IconTooltipLink({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger
				render={<Link href={href} target="_blank" />}
				aria-label={label}
				className={css({
					mr: "4",
					display: "inline-block",
					_hover: { color: "yellow.300" },
				})}
			>
				{children}
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Positioner side="top" sideOffset={8}>
					<Tooltip.Popup
						className={css({
							borderRadius: "md",
							bg: "neutral.800",
							px: "2.5",
							py: "1.5",
							fontSize: "xs",
							color: "neutral.100",
							boxShadow: "lg",
						})}
					>
						{label}
					</Tooltip.Popup>
				</Tooltip.Positioner>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
}

export const ProjectListItem: React.FC<Props> = (props) => {
	return (
		<Tooltip.Provider>
			<div>
				<Image
					className={css({
						aspectRatio: "4/3",
						w: "full",
						borderRadius: "lg",
						objectFit: "cover",
						borderWidth: "1px",
						borderColor: "neutral.800",
					})}
					src={props.image}
					alt="Project image"
				/>
				<div
					className={css({
						mt: "6",
						fontSize: "xl",
						fontWeight: "semibold",
						lineHeight: "2rem",
						color: "neutral.100",
					})}
				>
					{props.title}
				</div>
				<div
					className={css({
						fontSize: "sm",
						lineHeight: "1.75rem",
						color: "neutral.500",
					})}
				>
					{props.technologies.join(" • ")}
				</div>
				<div
					className={css({
						mt: "4",
						fontSize: "md",
						lineHeight: "1.75rem",
						color: "neutral.400",
					})}
				>
					{props.description}
				</div>
				<div className={css({ mt: "4", color: "neutral.400" })}>
					{props.websiteUrl && (
						<IconTooltipLink href={props.websiteUrl} label="Visit website">
							<GlobeAltIcon
								className={css({ display: "inline-block", h: "5", w: "5" })}
							/>
						</IconTooltipLink>
					)}
					{props.repoUrl && (
						<IconTooltipLink href={props.repoUrl} label="View source code">
							<CodeBracketIcon
								className={css({ display: "inline-block", h: "5", w: "5" })}
							/>
						</IconTooltipLink>
					)}
				</div>
			</div>
		</Tooltip.Provider>
	);
};
