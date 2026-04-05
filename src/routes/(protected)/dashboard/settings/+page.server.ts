import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { uploadImage, deleteFile } from '$lib/storage';
import prisma from '$lib/prisma';

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
