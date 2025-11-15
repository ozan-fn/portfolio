"use client";

import { Link } from "waku";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle";
import { useTheme } from "@/lib/theme-context";
import { useCallback, useEffect, useState } from "react";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeToggle = () => {
		if (!(document as any).startViewTransition) {
			toggleTheme();
			return;
		}

		(document as any).startViewTransition(() => {
			toggleTheme();
		});
	};

	if (!mounted) {
		return null;
	}

	return (
		<header className="bg-background/80 fixed top-0 z-50 w-screen border-b px-4 backdrop-blur-sm" style={{ viewTransitionName: "none" }}>
			<div className="mx-auto flex h-16 w-full max-w-7xl flex-row items-center justify-between border-x px-4">
				<Link to="/" className="hover:text-primary text-lg font-semibold transition-colors">
					Ozan
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					<a href="#about" className="hover:text-primary text-sm font-medium transition-colors">
						About
					</a>
					<a href="#projects" className="hover:text-primary text-sm font-medium transition-colors">
						Projects
					</a>
					<a href="#skills" className="hover:text-primary text-sm font-medium transition-colors">
						Skills
					</a>
					<a href="#contact" className="hover:text-primary text-sm font-medium transition-colors">
						Contact
					</a>
				</nav>

				<div className="flex items-center gap-4">
					<div className="hidden items-center gap-3 md:flex">
						<a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
							<Github className="h-5 w-5" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
							<Linkedin className="h-5 w-5" />
						</a>
						<a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
							<Mail className="h-5 w-5" />
						</a>
					</div>

					<ThemeToggleButton theme={theme} onClick={handleThemeToggle} variant="polygon" />

					<button className="text-muted-foreground hover:text-foreground md:hidden">
						<Menu className="h-5 w-5" />
					</button>
				</div>
			</div>
		</header>
	);
};
