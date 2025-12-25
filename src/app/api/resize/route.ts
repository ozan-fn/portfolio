import { imageOptimizer } from "next/dist/server/image-optimizer";

export async function GET() {
    console.log("Image optimizer engine:", imageOptimizer.name); // "squosh" kalau WASM
    return new Response(imageOptimizer.name);
}
