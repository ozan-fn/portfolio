"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { ReactNode } from "react";

export default function Providers(props: { children: ReactNode }) {
    return (
        <>
            <ThemeProvider>
                <AuthProvider>
                    <>{props.children}</>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}
