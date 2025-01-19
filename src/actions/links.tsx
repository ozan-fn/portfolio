"use server";

import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";

export const createShortLink = async (url: string, custom: string = "") => {
    // Validasi URL menggunakan RegExp sederhana
    const urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name and extension
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i",
    ); // fragment locator

    if (!urlPattern.test(url)) {
        throw new Error("URL tidak valid.");
    }

    // Validasi URL pendek kustom agar hanya mengandung karakter alfanumerik
    if (custom && !/^[a-zA-Z0-9_-]+$/.test(custom)) {
        throw new Error("URL pendek kustom tidak valid. Hanya boleh mengandung karakter alfanumerik, tanda minus (-), atau underscore (_).");
    }

    const shortUrl = custom || nanoid(4); // Gunakan short-circuit evaluation untuk default value

    try {
        const res = await prisma.link.create({
            data: {
                original_url: url,
                short_url: shortUrl,
            },
        });
        return res;
    } catch (error) {
        console.error("Error creating short link:", error);
        throw error; // Lempar error untuk penanganan lebih lanjut di bagian pemanggil
    }
};

export const getOriginalUrl = async (shortUrl: string) => {
    const res = await prisma.link.findUnique({
        where: {
            short_url: shortUrl,
        },
    });
    return res?.original_url || null; // Mengembalikan URL asli atau null jika tidak ditemukan
};
