import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const returnUrl = request.nextUrl.pathname;

    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
    if (!session && returnUrl !== "/sign-in") {
        return NextResponse.redirect(new URL(`/sign-in?returnUrl=${encodeURIComponent(returnUrl)}`, request.url));
    }

    // Jika ada session dan user mencoba ke /sign-in → redirect ke /admin
    if (session && returnUrl === "/sign-in") {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    runtime: "nodejs",
    matcher: ["/sign-in", "/admin"],
};
