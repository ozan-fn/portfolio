"use client";

import { useEffect } from "react";
import { getOriginalUrl } from "@/actions/links";
import { Loader2Icon } from "lucide-react";

export default function Page({ params }: { params: Promise<{ short_url: string }> }) {
    useEffect(() => {
        const fetchOriginalUrl = async () => {
            const { short_url } = await params;
            const original_url = await getOriginalUrl(short_url);
            if (original_url) {
                window.location.href = original_url;
            } else {
                console.error("URL tidak ditemukan. Pastikan URL yang anda masukkan benar.");
            }
        };

        fetchOriginalUrl();
    }, []);

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <Loader2Icon className="h-8 w-8 animate-spin" />
        </div>
    );
}
