import { css } from "styled-system/css";

export const blog = {
	page: css({
		width: "full",
		maxWidth: "860px",
		mx: "auto",
		px: { base: "5", md: "9" },
		pb: { base: "16", md: "24" },
		"& + footer": {
			bg: "transparent",
			"& > div": { maxWidth: "860px" },
			"& > div > div": { borderTop: "none" },
		},
	}),
	hero: css({ pt: { base: "12", md: "16" }, pb: { base: "10", md: "14" } }),
	title: css({
		fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
		fontWeight: "600",
		letterSpacing: "-0.04em",
		lineHeight: "1.1",
	}),
	intro: css({
		color: "neutral.400",
		fontSize: "17px",
		lineHeight: "1.6",
		maxWidth: "540px",
		mt: "5",
	}),
	list: css({ borderBottom: "1px solid {colors.neutral.800}" }),
	post: css({
		borderTop: "1px solid {colors.neutral.800}",
		py: { base: "7", md: "9" },
	}),
	meta: css({
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
		gap: "4",
		fontSize: "12px",
		color: "neutral.400",
		mb: "3",
	}),
	tag: css({
		_hover: {
			color: "neutral.100",
			textDecoration: "underline",
			textUnderlineOffset: "4px",
		},
	}),
	postLink: css({
		_hover: {
			textDecoration: "underline",
			textUnderlineOffset: "5px",
			textDecorationThickness: "1px",
		},
	}),
	postTitle: css({
		fontSize: { base: "23px", md: "26px" },
		fontWeight: "600",
		letterSpacing: "-0.6px",
		lineHeight: "1.3",
		textWrap: "pretty",
	}),
	excerpt: css({
		color: "neutral.400",
		fontSize: "15px",
		lineHeight: "1.7",
		mt: "3",
	}),
	empty: css({ color: "neutral.400", fontSize: "17px", py: "8" }),
};
