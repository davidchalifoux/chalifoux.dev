import { css } from "styled-system/css";
import { container } from "@/lib/styles";

type Props = {
	title: string;
	description: string;
	id?: string;
};

export const Header: React.FC<Props> = (props) => {
	return (
		<div className={css({ pt: "32", pb: "16" })} id={props.id}>
			<div className={css(container)}>
				<h2
					className={css({
						fontSize: "3xl",
						fontWeight: "bold",
						letterSpacing: "tight",
						color: "neutral.50",
					})}
				>
					{props.title}
				</h2>
				<p
					className={css({
						mt: "4",
						lineHeight: "1.75rem",
						color: "neutral.400",
					})}
				>
					{props.description}
				</p>
			</div>
		</div>
	);
};
