"use client";

import Link from "next/link";
import { css } from "styled-system/css";

export default function ErrorPage() {
	return (
		<div className={css({ textAlign: "center", py: "32" })}>
			<p
				className={css({
					fontSize: "md",
					fontWeight: "semibold",
					color: "yellow.300",
				})}
			>
				ERROR
			</p>
			<h1
				className={css({
					mt: "4",
					fontSize: "3xl",
					fontWeight: "bold",
					letterSpacing: "tight",
					color: "neutral.100",
					sm: { fontSize: "5xl" },
				})}
			>
				Something went wrong.
			</h1>
			<p
				className={css({
					mt: "6",
					fontSize: "md",
					lineHeight: "1.75rem",
					color: "neutral.400",
				})}
			>
				Sorry, an error was thrown while rendering.
			</p>
			<div
				className={css({
					mt: "10",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					columnGap: "6",
				})}
			>
				<Link
					href="/"
					className={css({
						borderRadius: "md",
						bg: "neutral.100",
						px: "3.5",
						py: "2.5",
						fontSize: "sm",
						fontWeight: "semibold",
						color: "neutral.900",
						boxShadow: "xs",
						_hover: { bg: "neutral.300" },
						_focusVisible: {
							outline: "2px solid {colors.indigo.600}",
							outlineOffset: "2px",
						},
					})}
				>
					Go back home
				</Link>
			</div>
		</div>
	);
}
