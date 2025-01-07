import {
	IconBrandBluesky,
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandX,
	IconMail,
} from "@tabler/icons-react";

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
			className="rounded-2xl bg-neutral-950 p-10 hover:bg-yellow-950 transition-all hover:shadow-inner hover:shadow-yellow-900/25 active:translate-y-1"
			href={props.href}
			target="_blank"
			rel="noreferrer"
		>
			<div className="flex items-center gap-2">
				<Icon className="text-neutral-100 w-6 h-6" />
				<h3 className="text-base font-semibold leading-7 text-neutral-100">
					{props.title}
				</h3>
			</div>
			<div className="mt-3 space-y-1 text-sm leading-6 text-neutral-600">
				<div className="font-semibold text-yellow-300">{props.subtitle}</div>
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
	{
		icon: "x",
		title: "X",
		subtitle: "@davidchalifoux",
		href: "https://x.com/DavidChalifoux",
	},
];

export const Contact: React.FC = () => {
	return (
		<div className="container py-64" id="contact">
			<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-neutral-100">
						Contact
					</h2>
					<p className="mt-4 leading-7 text-neutral-400">Get in touch.</p>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
					{contactCards.map((card) => {
						return <ContactCard key={card.title} {...card} />;
					})}
				</div>
			</div>
		</div>
	);
};
