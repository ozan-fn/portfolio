"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Admin() {
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
            <Button onClick={handleLogout} disabled={loading} variant="outline" className="w-full max-w-xs">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Logging out..." : "logout coy"}
            </Button>
        </>
    );
}
