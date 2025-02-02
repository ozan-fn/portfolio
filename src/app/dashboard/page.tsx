"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function dashboard() {
    const { data } = useSession();

    return <div>{JSON.stringify(data?.user)}</div>;
}
