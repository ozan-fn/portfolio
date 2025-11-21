"use client";

import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";

function Layout() {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            navigate({ to: `/admin` });
        }
    }, [user, navigate]);

    if (user) return null;

    return <Outlet />;
}

export const Route = createFileRoute("/(auth)/_layout" as any)({
    component: Layout as any,
});
