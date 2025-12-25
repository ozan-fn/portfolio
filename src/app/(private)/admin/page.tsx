"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Admin() {
    return (
        <>
            <div className="flex flex-col justify-center items-center flex-1">
                <div className="text-xl font-bold">Admin Panel</div>
                <div className="text-sm text-muted-foreground">Welcome, Admin!</div>
            </div>
        </>
    );
}
