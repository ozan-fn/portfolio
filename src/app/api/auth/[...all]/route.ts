import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "nodejs";

const handler = toNextJsHandler(auth);

export async function GET(req: Request) {
    try {
        return await handler.GET(req);
    } catch (e) {
        console.error("GET /api/auth", e);
        return new Response(String(e), { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        return await handler.POST(req);
    } catch (e) {
        console.error("POST /api/auth", e);
        return new Response(String(e), { status: 500 });
    }
}
