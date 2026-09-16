"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { css } from "styled-system/css";
import logo from "@/assets/logo.svg";
import { container } from "@/lib/styles";

const navigation = [
	{ name: "Work", href: "/#work" },
	{ name: "Projects", href: "/#projects" },
	{ name: "Contact", href: "/#contact" },
	{ name: "Blog", href: "/blog" },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header
			className={css({
				position: "sticky",
				top: "0",
				zIndex: "50",
				bg: "neutral.900/80",
				borderBottomWidth: "1px",
				borderBottomColor: "neutral.800",
			})}
		>
			<nav
				className={css(container, {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					p: "6",
					backdropFilter: "blur(4px)",
				})}
				aria-label="Global"
			>
				<div className={css({ display: "flex", lg: { flex: "1" } })}>
					<Link href="/" className={css({ m: "-1.5", p: "1.5" })}>
						<Image
							className={css({ h: "8", w: "auto" })}
							src={logo}
							alt="David Chalifoux's Logo"
						/>
					</Link>
				</div>
				<div className={css({ display: "flex", lg: { display: "none" } })}>
					<button
						type="button"
						className={css({
							m: "-2.5",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "md",
							p: "2.5",
							color: "neutral.400",
						})}
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className={css({ srOnly: true })}>Open main menu</span>
						<Bars3Icon className={css({ h: "6", w: "6" })} aria-hidden="true" />
					</button>
				</div>
				<div
					className={css({
						display: "none",
						lg: { display: "flex", columnGap: "12" },
					})}
				>
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={css({
								fontSize: "sm",
								fontWeight: "semibold",
								lineHeight: "1.5rem",
								color: "neutral.400",
								transition: "color",
								_hover: { color: "neutral.100" },
							})}
						>
							{item.name}
						</Link>
					))}
				</div>
				<div
					className={css({
						display: "none",
						lg: { display: "flex", flex: "1", justifyContent: "flex-end" },
					})}
				/>
			</nav>
			<Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
				<Dialog.Portal>
					<Dialog.Popup
						className={css({
							position: "fixed",
							insetBlock: "0",
							right: "0",
							zIndex: "50",
							w: "full",
							overflowY: "auto",
							bg: "neutral.900",
							px: "6",
							py: "6",
							sm: { maxWidth: "24rem", borderLeftWidth: "1px" },
							borderLeftColor: "white/10",
						})}
					>
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							})}
						>
							<Link href="#" className={css({ m: "-1.5", p: "1.5" })}>
								<Image
									className={css({ h: "8", w: "auto" })}
									src={logo}
									alt="David Chalifoux's Logo"
								/>
							</Link>
							<Dialog.Close
								className={css({
									m: "-2.5",
									borderRadius: "md",
									p: "2.5",
									color: "neutral.400",
								})}
							>
								<span className={css({ srOnly: true })}>Close menu</span>
								<XMarkIcon
									className={css({ h: "6", w: "6" })}
									aria-hidden="true"
								/>
							</Dialog.Close>
						</div>
						<div className={css({ mt: "6" })}>
							<div
								className={css({
									my: "-6",
									"& > * + *": {
										borderTopWidth: "1px",
										borderTopColor: "neutral.500/25",
									},
								})}
							>
								<div className={css({ spaceY: "2", py: "6" })}>
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={css({
												mx: "-3",
												display: "block",
												borderRadius: "lg",
												px: "3",
												py: "2",
												fontSize: "md",
												fontWeight: "semibold",
												lineHeight: "1.75rem",
												color: "white",
												_hover: { bg: "neutral.800" },
											})}
										>
											{item.name}
										</Link>
									))}
								</div>
								<div className={css({ py: "6" })} />
							</div>
						</div>
					</Dialog.Popup>
				</Dialog.Portal>
			</Dialog.Root>
		</header>
	);
}
