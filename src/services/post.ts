// services/post.ts

// Mengambil satu post berdasarkan ID/slug-nya
export const getPost = async (identifier: string): Promise<any> => {
	const res = await fetch(`/api/posts/${identifier}`); // Bisa ID atau slug
	if (!res.ok) {
		// Jika post tidak ditemukan (404), kembalikan null agar form tahu ini post baru
		if (res.status === 404) return null;
		throw new Error('Failed to fetch post');
	}
	return res.json();
};

// Menyimpan/update post berdasarkan ID/slug dan data
export const savePost = async (identifier: string, data: any): Promise<any> => {
	const res = await fetch(`/api/posts/${identifier}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) {
		throw new Error('Failed to save post');
	}
	return res.json();
};

// --- BARU: Membuat post baru ---
export const createPost = async (data: any): Promise<any> => {
	const res = await fetch('/api/posts', {
		// Endpoint umum untuk POST
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) {
		throw new Error('Failed to create post');
	}
	return res.json();
};

// Mengambil semua kategori yang tersedia
export const getCategories = async (): Promise<any[]> => {
	const res = await fetch('/api/categories');
	if (!res.ok) throw new Error('Failed to fetch categories');
	return res.json();
};

// --- BARU: Membuat kategori baru ---
export const createCategory = async (data: { name: string }): Promise<any> => {
	const res = await fetch('/api/categories', {
		// Endpoint umum untuk POST
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	if (!res.ok) throw new Error('Failed to create category');
	return res.json();
};

// Mengambil semua tag yang tersedia
export const getTags = async (): Promise<any[]> => {
	const res = await fetch('/api/tags');
	if (!res.ok) throw new Error('Failed to fetch tags');
	return res.json();
};

// Membuat tag baru
export const createTag = async (data: { name: string }): Promise<any> => {
	const res = await fetch('/api/tags', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	if (!res.ok) throw new Error('Failed to create tag');
	return res.json();
};
