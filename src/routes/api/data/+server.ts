import { json, type RequestHandler } from '@sveltejs/kit';

// Menangani request GET
export const GET: RequestHandler = async () => {
    const data = {
        nama: 'Ozan',
        role: 'Developer',
        status: 'Online',
    };

    // Fungsi json() otomatis mengatur Header Content-Type: application/json
    return json(data);
};
