"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleGoogleSignin = async () => {
        setLoading(true);

        const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
        await authClient.signIn.social(
            {
                provider: "google",
                callbackURL: returnUrl || "/admin",
            },
            {
                onError: () => {
                    setLoading(false);
                },
            },
        );
    };

    const handleBack = () => {
        router.push("/");
    };

    return (
        <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center bg-background relative">
            {/* Back button top left */}
            <div className="absolute top-12 left-12">
                <Button variant="ghost" size="sm" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
            </div>
            {/* Main content */}
            <div className="text-center max-w-md mx-auto px-4">
                <Button onClick={handleGoogleSignin} variant="outline" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Continue with Google
                </Button>
            </div>
        </div>
    );
}
