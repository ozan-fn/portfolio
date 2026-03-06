import { PrismaClient } from "@prisma/client";
import { env } from "$env/dynamic/private";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: env["DATABASE_URL"] });

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        // log: ["query"],
    });

export default prisma;

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
