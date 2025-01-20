"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { nanoid } from "nanoid";

export const createShortLink = async (url: string, custom: string = "") => {
    z.string().url().parse(url);
    if (custom) z.string().min(1).max(20).parse(custom);

    const shortUrl = custom || nanoid(4);

    const res = await prisma.link.create({
        data: {
            original_url: url,
            short_url: shortUrl,
        },
    });

    return res;
};

export const getOriginalUrl = async (shortUrl: string) => {
    const res = await prisma.link.findUnique({
        where: {
            short_url: shortUrl,
        },
    });

    return res?.original_url || null; // Mengembalikan URL asli atau null jika tidak ditemukan
};
