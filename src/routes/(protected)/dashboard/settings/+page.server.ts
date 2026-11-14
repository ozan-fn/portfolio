import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { uploadImage, deleteFile } from '$lib/storage';
import { auth } from '$lib/auth';
import prisma from '$lib/prisma';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const load: PageServerLoad = async ({ locals }) => {
    return {
        user: locals.user,
    };
};

export const actions: Actions = {
    updateProfile: async ({ request, locals }) => {
        if (!locals.user) return fail(401, { message: 'Gak ada session, login dulu dek.' });

        const formData = await request.formData();
        const name = formData.get('name') as string;

        if (!name || name.trim().length < 2) {
            return fail(400, { message: 'Nama kependekan atau kosong tuh dek.' });
        }

        try {
            await prisma.user.update({
                where: { id: locals.user.id },
                data: { name: name.trim() },
            });

            return { success: true, message: 'Nama berhasil diupdate! Makin tamvan.' };
        } catch (e) {
            return fail(500, { message: 'DB lagi pusing, coba lagi nanti dek.' });
        }
    },

    updateEmail: async ({ request, locals }) => {
        if (!locals.user) return fail(401, { message: 'Gak ada session, login dulu dek.' });

        const formData = await request.formData();
        const email = String(formData.get('email') ?? '').trim().toLowerCase();
        const currentPassword = String(formData.get('currentPassword') ?? '');

        if (!EMAIL_PATTERN.test(email)) {
            return fail(400, { message: 'Format email-nya gak bener dek.' });
        }
        if (email === locals.user.email.toLowerCase()) {
            return fail(400, { message: 'Email-nya sama kayak yang sekarang dek.' });
        }
        if (!currentPassword) {
            return fail(400, { message: 'Isi password sekarang buat konfirmasi ganti email.' });
        }

        try {
            // Konfirmasi password, bukan flow changeEmail better-auth yang
            // butuh pengiriman email verifikasi (project ini tanpa mailer).
            await auth.api.verifyPassword({
                body: { password: currentPassword },
                headers: request.headers,
            });
        } catch {
            return fail(400, { message: 'Password sekarang salah.' });
        }

        try {
            const taken = await prisma.user.findFirst({
                where: { email, NOT: { id: locals.user.id } },
                select: { id: true },
            });
            if (taken) {
                return fail(400, { message: 'Email itu sudah dipakai akun lain.' });
            }

            // Email baru belum terverifikasi sampai dibuktikan pemiliknya.
            await prisma.user.update({
                where: { id: locals.user.id },
                data: { email, emailVerified: false },
            });

            return { success: true, message: 'Email berhasil diganti!' };
        } catch (e) {
            console.error('Change email error:', e);
            return fail(500, { message: 'DB lagi pusing, coba lagi nanti dek.' });
        }
    },

    uploadAvatar: async ({ request, locals }) => {
        if (!locals.user) return fail(401, { message: 'Gak ada session, login dulu dek.' });

        const formData = await request.formData();
        const avatar = formData.get('avatar') as File;

        if (!avatar || avatar.size === 0) {
            return fail(400, { message: 'Mana fotonya dek? Kosong tuh.' });
        }

        // Validasi tipe file (Security)
        if (!avatar.type.startsWith('image/')) {
            return fail(400, { message: 'Harus gambar ya dek, jangan aneh-aneh.' });
        }

        try {
            const buffer = Buffer.from(await avatar.arrayBuffer());
            const newImageKey = await uploadImage(buffer, 'profile', avatar.type);

            // Simpan foto lama untuk dihapus nanti jika update DB sukses
            const oldImageKey = locals.user.image;

            await prisma.user.update({
                where: { id: locals.user.id },
                data: { image: newImageKey },
            });

            // Hapus file lama hanya jika update DB berhasil
            if (oldImageKey) {
                await deleteFile(oldImageKey).catch((err) => console.error('S3 Cleanup Error:', err));
            }

            return { success: true, message: 'Foto profil diganti! S3 udah bersih dek.' };
        } catch (e) {
            return fail(500, { message: 'Storage lagi penuh atau meriang dek.' });
        }
    },
};
