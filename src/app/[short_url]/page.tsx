"use client";

import { useEffect } from "react";
import { getOriginalUrl } from "@/actions/links";

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

    return <div>Memproses redirect...</div>;
}
