import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{ts,tsx}"],
	exclude: [],
	outdir: "styled-system",
	jsxFramework: "react",
	theme: {
		extend: {
			tokens: {
				fonts: {
					sans: { value: "var(--font-geist-sans), sans-serif" },
					mono: { value: "var(--font-geist-mono), monospace" },
				},
				colors: {
					neutral: {
						50: { value: "#fafafa" },
						100: { value: "#f5f5f5" },
						200: { value: "#e5e5e5" },
						300: { value: "#d4d4d4" },
						400: { value: "#a3a3a3" },
						500: { value: "#737373" },
						600: { value: "#525252" },
						700: { value: "#404040" },
						800: { value: "#262626" },
						900: { value: "#171717" },
						950: { value: "#0a0a0a" },
					},
					yellow: {
						300: { value: "#fde047" },
						900: { value: "#713f12" },
						950: { value: "#422006" },
					},
					indigo: {
						600: { value: "#4f46e5" },
					},
				},
				animations: {
					bounce: { value: "bounce 1s infinite" },
				},
			},
			keyframes: {
				bounce: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "none",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
		},
	},
	globalCss: {
		html: {
			colorScheme: "dark",
		},
		body: {
			fontFamily: "sans",
			bg: "neutral.900",
			color: "neutral.100",
			position: "relative",
		},
		"code, pre, kbd, samp": {
			fontFamily: "mono",
		},
		"code:not(pre > code)": {
			bg: "neutral.800",
			px: "1.5",
			py: "1",
			borderRadius: "sm",
			whiteSpace: "break-spaces",
			fontSize: "85%",
		},
		".prose": {
			color: "neutral.300",
			lineHeight: "1.75",
			"& :where(h1, h2, h3, h4)": {
				color: "neutral.100",
				fontWeight: "600",
				scrollMarginTop: "6rem",
			},
			"& h1": {
				fontSize: "2.25em",
				fontWeight: "800",
				lineHeight: "1.1111111",
				marginTop: "0",
				marginBottom: "0.8888889em",
			},
			"& h2": {
				fontSize: "1.5em",
				fontWeight: "700",
				lineHeight: "1.3333333",
				marginTop: "2em",
				marginBottom: "1em",
			},
			"& h3": {
				fontSize: "1.25em",
				lineHeight: "1.6",
				marginTop: "1.6em",
				marginBottom: "0.6em",
			},
			"& h4": {
				fontSize: "1em",
				lineHeight: "1.5",
				marginTop: "1.5em",
				marginBottom: "0.5em",
			},
			"& p": {
				marginTop: "1.25em",
				marginBottom: "1.25em",
			},
			"& a": {
				color: "neutral.100",
				fontWeight: "500",
				textDecoration: "underline",
				textUnderlineOffset: "2px",
			},
			"& strong": {
				color: "neutral.100",
				fontWeight: "600",
			},
			"& ol, & ul": {
				marginTop: "1.25em",
				marginBottom: "1.25em",
				paddingInlineStart: "1.625em",
			},
			"& ol": {
				listStyleType: "decimal",
			},
			"& ul": {
				listStyleType: "disc",
			},
			"& li": {
				marginTop: "0.5em",
				marginBottom: "0.5em",
			},
			"& li > p": {
				marginTop: "0.75em",
				marginBottom: "0.75em",
			},
			"& blockquote": {
				fontWeight: "500",
				fontStyle: "italic",
				color: "neutral.100",
				borderInlineStartWidth: "0.25rem",
				borderInlineStartColor: "neutral.700",
				marginTop: "1.6em",
				marginBottom: "1.6em",
				paddingInlineStart: "1em",
			},
			"& code": {
				color: "neutral.100",
				fontWeight: "600",
				fontSize: "0.875em",
			},
			"& pre": {
				marginTop: "1.7142857em",
				marginBottom: "1.7142857em",
				borderRadius: "lg",
			},
			"& pre code": {
				background: "transparent",
				borderWidth: "0",
				borderRadius: "0",
				padding: "0",
				fontWeight: "inherit",
				color: "inherit",
				fontSize: "inherit",
				fontFamily: "inherit",
				lineHeight: "inherit",
			},
			"& table": {
				width: "100%",
				tableLayout: "auto",
				textAlign: "left",
				marginTop: "2em",
				marginBottom: "2em",
				fontSize: "0.875em",
				lineHeight: "1.7142857",
			},
			"& thead": {
				borderBottomWidth: "1px",
				borderBottomColor: "neutral.500",
			},
			"& thead th": {
				color: "neutral.100",
				fontWeight: "600",
				verticalAlign: "bottom",
				paddingInline: "0.5714286em",
				paddingBottom: "0.5714286em",
			},
			"& tbody tr": {
				borderBottomWidth: "1px",
				borderBottomColor: "neutral.700",
			},
			"& tbody td": {
				verticalAlign: "baseline",
				paddingTop: "0.5714286em",
				paddingInline: "0.5714286em",
				paddingBottom: "0.5714286em",
			},
			"& hr": {
				borderTopWidth: "1px",
				borderColor: "neutral.700",
				marginTop: "3em",
				marginBottom: "3em",
			},
			"& img": {
				marginTop: "2em",
				marginBottom: "2em",
				borderRadius: "lg",
			},
			"& figure": {
				marginTop: "2em",
				marginBottom: "2em",
			},
			"& figcaption": {
				color: "neutral.400",
				fontSize: "0.875em",
				lineHeight: "1.4285714",
				marginTop: "0.8571429em",
			},
			"& > :first-child": {
				marginTop: "0",
			},
			"& > :last-child": {
				marginBottom: "0",
			},
		},
	},
});
