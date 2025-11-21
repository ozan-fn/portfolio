"use client";

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

function Test() {
    const [first] = useState("second");

    return <div>{first}</div>;
}

export const Route = createFileRoute("/admin/posts/[id]/_test" as any)({
    component: Test as any,
});
