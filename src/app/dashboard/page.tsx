"use client";

import React from "react";
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function dashboard() {
    const { user } = useKindeBrowserClient();
    return (
        <div>
            {JSON.stringify(user)}
            <LogoutLink>Logout</LogoutLink>
        </div>
    );
}
