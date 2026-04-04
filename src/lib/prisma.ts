import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const DATABASE_URL = await import('$env/static/private')
    .then((m) => m.DATABASE_URL) //
    .catch(() => process.env.DATABASE_URL);

const adapter = new PrismaNeon({ connectionString: DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;
