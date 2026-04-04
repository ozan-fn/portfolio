import 'dotenv/config';
import { auth } from '../src/lib/auth';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function main() {
    try {
        const user = await auth.api.signUpEmail({
            body: {
                name: 'Test User',
                email: 'test@example.com',
                password: 'password',
                image: 'https://i.ibb.co.com/FbxTx7D6/Kaguya.avif',
            },
        });

        console.log('user berhasil dibuat:', user);
    } catch (error) {
        console.error('gagal:', error instanceof Error ? error.message : error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
