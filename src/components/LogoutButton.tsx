"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
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
        <Button onClick={handleLogout} disabled={loading} variant="outline" className="w-full ">
            {loading && <Loader2Icon className="w-4 h-4 animate-spin" />}
            {loading ? "Logging out..." : "logout coy"}
        </Button>
    );
}
