import {
	IconBrandBluesky,
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandX,
	IconMail,
} from "@tabler/icons-react";
import { css } from "styled-system/css";
import { container } from "@/lib/styles";

const icons = {
	github: IconBrandGithub,
	linkedin: IconBrandLinkedin,
	x: IconBrandX,
	mail: IconMail,
	bluesky: IconBrandBluesky,
};

interface ContactCardProps {
	icon: keyof typeof icons;
	title: string;
	subtitle: string;
	href: string;
}

function ContactCard(props: ContactCardProps) {
	const Icon = icons[props.icon];

	return (
		<a
			className={css({
				borderRadius: "2xl",
				bg: "neutral.950",
				p: "10",
				transition: "all",
				_hover: {
					bg: "yellow.950",
					boxShadow: "inset 0 2px 4px 0 {colors.yellow.900/25}",
				},
				_active: { transform: "translateY(0.25rem)" },
			})}
			href={props.href}
			target="_blank"
			rel="noreferrer"
		>
			<div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
				<Icon className={css({ color: "neutral.100", w: "6", h: "6" })} />
				<h3
					className={css({
						fontSize: "md",
						fontWeight: "semibold",
						lineHeight: "1.75rem",
						color: "neutral.100",
					})}
				>
					{props.title}
				</h3>
			</div>
			<div
				className={css({
					mt: "3",
					spaceY: "1",
					fontSize: "sm",
					lineHeight: "1.5rem",
					color: "neutral.600",
				})}
			>
				<div className={css({ fontWeight: "semibold", color: "yellow.300" })}>
					{props.subtitle}
				</div>
			</div>
		</a>
	);
}

const contactCards: ContactCardProps[] = [
	{
		icon: "mail",
		title: "Mail",
		subtitle: "mail@chalifoux.dev",
		href: "mailto:mail@chalifoux.dev",
	},
	{
		icon: "github",
		title: "GitHub",
		subtitle: "/davidchalifoux",
		href: "https://github.com/davidchalifoux",
	},
	{
		icon: "linkedin",
		title: "LinkedIn",
		subtitle: "/david-chalifoux",
		href: "https://www.linkedin.com/in/david-chalifoux/",
	},
	{
		icon: "bluesky",
		title: "Bluesky",
		subtitle: "@chalifoux.dev",
		href: "https://bsky.app/profile/chalifoux.dev",
	},
];

export const Contact: React.FC = () => {
	return (
		<div className={css(container, { py: "64" })} id="contact">
			<div
				className={css({
					display: "grid",
					gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
					columnGap: "2rem",
					rowGap: "2.5rem",
					lg: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
				})}
			>
				<div>
					<h2
						className={css({
							fontSize: "3xl",
							fontWeight: "bold",
							letterSpacing: "tight",
							color: "neutral.100",
						})}
					>
						Contact
					</h2>
					<p
						className={css({
							mt: "4",
							lineHeight: "1.75rem",
							color: "neutral.400",
						})}
					>
						Get in touch.
					</p>
				</div>
				<div
					className={css({
						display: "grid",
						gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
						gap: "1.5rem",
						sm: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
						lg: { gridColumn: "span 2 / span 2", gap: "2rem" },
					})}
				>
					{contactCards.map((card) => {
						return <ContactCard key={card.title} {...card} />;
					})}
				</div>
			</div>
		</div>
	);
};
