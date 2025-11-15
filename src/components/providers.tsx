"use client";

import { ThemeProvider } from "@/lib/theme-context";
import { ReactNode } from "react";

export default function Providers(props: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider>
				<>{props.children}</>
			</ThemeProvider>
		</>
	);
}
