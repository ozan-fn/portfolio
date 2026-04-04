import prisma from '../src/lib/prisma';

export async function main() {
    try {
        // Melakukan 'ping' ke database
        await prisma.$connect();
        console.log('✅ Koneksi database berhasil!');
    } catch (error) {
        console.error('❌ Koneksi database gagal:', error.message);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
