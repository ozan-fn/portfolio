"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-togle";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar Fixed */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-card shadow-lg border-r">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between h-16 px-4 bg-primary text-primary-foreground">
                        <h1 className="text-xl font-bold">Admin Panel</h1>
                        <ModeToggle />
                    </div>
                    <nav className="flex-1 px-4 py-6">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/admin" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/images" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
                                    Images
                                </Link>
                            </li>
                            <li>
                                <a href="/admin/settings" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
                                    Back to Site
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-6">{children}</main>
        </div>
    );
}
