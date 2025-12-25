"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Layout(props: { children: ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await authClient.signOut();
            router.push("/");
        } catch (error) {
            setLoading(false);
            // Optionally handle the error (e.g. show a notification)
        }
    };

    return (
        <>
            <div className="fixed h-screen w-screen pl-64 pt-16 top-0 left-0 flex">
                <div className="flex-1 overflow-auto flex flex-col">{props.children}</div>
            </div>

            <div className="fixed flex flex-col h-screen w-64 border-r bg-background top-0 left-0">
                <div className="mt-auto p-3">
                    <Button onClick={handleLogout} disabled={loading} variant="outline" className="w-full ">
                        {loading && <Loader2Icon className="w-4 h-4 animate-spin" />}
                        {loading ? "Logging out..." : "logout coy"}
                    </Button>
                </div>
            </div>

            <div className="fixed w-screen h-16 pl-64 border-b bg-background top-0 left-0"></div>
        </>
    );
}
