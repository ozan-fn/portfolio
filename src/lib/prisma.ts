import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const DATABASE_URL = process.env.DATABASE_URL;

const adapter = new PrismaNeon({ connectionString: DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;
