"use server";

import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";

export const createShortLink = async (url: string, custom = "") => {
	const res = await prisma.link.create({
		data: {
			original: url,
			shortUrl: custom ?? nanoid(4),
		},
	});
	return res;
};

export const getOriginalUrl = async (shortUrl: string) => {
	const res = await prisma.link.findUnique({
		where: {
			shortUrl: shortUrl,
		},
	});
	return res?.original || null; // Mengembalikan URL asli atau null jika tidak ditemukan
};
