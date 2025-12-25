import Link from "next/link";
import { ReactNode } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Layout(props: { children: ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role !== "admin") {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1>You do not have permission to access this page.</h1>
            </div>
        );
    }

    return (
        <>
            <div className="fixed h-screen w-screen pl-64 pt-16 top-0 left-0 flex">
                <div className="flex-1 overflow-auto flex flex-col">{props.children}</div>
            </div>

            <div className="fixed flex flex-col h-screen pt-16 w-64 border-r bg-background top-0 left-0">
                <div className="p-3">
                    <h2 className="text-lg font-semibold">Admin Panel</h2>
                    <nav className="space-y-2 mt-4">
                        <Link href="/admin" className="block p-2 rounded hover:bg-accent">
                            Dashboard
                        </Link>
                        <Link href="/admin/posts" className="block p-2 rounded hover:bg-accent">
                            Posts
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-3">
                    <LogoutButton />
                </div>
            </div>

            <div className="fixed w-screen h-16 pl-64 border-b bg-background top-0 left-0"></div>
        </>
    );
}
