"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Image from "next/image";
import { css } from "styled-system/css";
import headshotImage from "@/assets/headshot.png";
import { container } from "@/lib/styles";

export const Hero: React.FC = () => {
	return (
		<div
			className={css({
				overflow: "hidden",
				backgroundImage: "linear-gradient(to bottom, #171717 50%, #0a0a0a)",
			})}
		>
			<div className={css(container, { py: "32", lg: { py: "64" } })}>
				<div
					className={css({
						mx: "auto",
						maxWidth: "42rem",
						lg: {
							mx: "0",
							display: "grid",
							maxWidth: "none",
							gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
							columnGap: "4rem",
							rowGap: "1.5rem",
						},
						xl: { columnGap: "2rem" },
					})}
				>
					<div>
						<h1
							className={css({
								maxWidth: "42rem",
								fontSize: "4xl",
								fontWeight: "bold",
								letterSpacing: "tight",
								color: "neutral.100",
								sm: { fontSize: "6xl" },
								lg: { gridColumn: "span 2 / span 2" },
								xl: { gridColumn: "auto" },
							})}
						>
							Hey there!
						</h1>
						<div
							className={css({
								mt: "6",
								maxWidth: "36rem",
								xl: { gridColumnEnd: "1", gridRowStart: "1" },
							})}
						>
							<p
								className={css({
									fontSize: "lg",
									lineHeight: "2rem",
									color: "neutral.400",
								})}
							>
								My name is David Chalifoux.
							</p>
							<p
								className={css({
									fontSize: "lg",
									lineHeight: "2rem",
									color: "neutral.400",
								})}
							>
								I&apos;m a developer who loves the web.
							</p>
							<p
								className={css({
									fontSize: "lg",
									lineHeight: "2rem",
									color: "neutral.400",
								})}
							>
								You can learn more about my work below.
							</p>
							<ArrowDownIcon
								className={css({
									mt: "6",
									h: "6",
									w: "6",
									color: "yellow.300",
									animation: "bounce",
								})}
							/>
						</div>
					</div>

					<motion.div
						initial={{ translateY: 600 }}
						animate={{ translateY: 0 }}
						className={css({ perspective: "1200px" })}
					>
						<Image
							src={headshotImage}
							priority
							quality={75}
							alt="Headshot of David Chalifoux"
							className={css({
								transformStyle: "preserve-3d",
								_hover: { transform: "scaleZ(0.9)" },
								mt: "12",
								aspectRatio: "6/5",
								w: "full",
								borderRadius: "2xl",
								objectFit: "cover",
								boxShadow: "xl",
								maxWidth: "32rem",
								xl: {
									gridRow: "span 2 / span 2",
									gridRowEnd: "2",
									mt: "42",
									mx: "auto",
								},
							})}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
