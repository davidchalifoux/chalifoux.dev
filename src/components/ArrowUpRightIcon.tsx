import { RiArrowRightUpLine } from "@remixicon/react";
import { css } from "styled-system/css";

export function ArrowUpRightIcon() {
	return (
		<RiArrowRightUpLine
			size="1em"
			color="currentColor"
			aria-hidden="true"
			focusable="false"
			className={css({
				display: "inline-block",
				marginInlineStart: "0.3em",
				verticalAlign: "-0.125em",
				flexShrink: "0",
			})}
		/>
	);
}
