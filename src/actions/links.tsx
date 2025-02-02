"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { nanoid } from "nanoid";

export const createShortLink = async (url: string, custom: string = "") => {
    z.string().url().parse(url);

    const shortUrl = custom || nanoid(4);

    const res = await prisma.link.create({
        data: {
            original_url: url,
            short_code: shortUrl,
        },
    });

    return res;
};

export const getOriginalUrl = async (shortUrl: string) => {
    const res = await prisma.link.findUnique({
        where: {
            short_code: shortUrl,
        },
    });

    return res?.original_url || null; // Mengembalikan URL asli atau null jika tidak ditemukan
};
