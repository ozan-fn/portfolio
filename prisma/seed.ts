import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const links = await prisma.link.findMany();

	console.log(links);
}

main();
