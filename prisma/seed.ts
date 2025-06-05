import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
	if (!process.env.ADMIN_NAME || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
		console.error('Missing environment variables for admin user creation.');
		return;
	}

	const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

	await prisma.user.create({
		data: {
			name: process.env.ADMIN_NAME,
			email: process.env.ADMIN_EMAIL,
			password: passwordHash,
			role: 'ADMIN',
		},
	});
}
seed();
