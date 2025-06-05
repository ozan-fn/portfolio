'use client';

import React from 'react';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react'; // <-- 1. Impor useSession

// Aset Anda
import ThemeSwitcher from './ThemeSwitcher';
import Logo from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';

const Header = () => {
	const pathname = usePathname();
	const params = useParams();
	const { data: session, status } = useSession(); // <-- 2. Dapatkan data sesi

	const isAuthenticated = status === 'authenticated';

	// --- 3. Logika yang Diperbaiki ---
	// Cek apakah kita berada di path editor manapun (termasuk /new atau /[slug])
	const isOnEditorPath = pathname.startsWith('/blog/edit');

	// Dapatkan slug dari parameter URL jika ada
	const slug = params.slug as string | undefined;

	// Cek apakah kita sedang mengedit post spesifik (bukan membuat baru)
	const isEditingSpecificPost = isOnEditorPath && slug && slug !== 'new';

	return (
		<header className="sticky top-0 z-50 border-b border-neutral-300 bg-white/20 px-6 backdrop-blur-lg dark:border-neutral-700 dark:bg-[#0d101820]">
			<div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between gap-6">
				<Link href="/blog">
					<Logo width={100} />
				</Link>

				{/* --- 4. Tombol Dinamis Berdasarkan Konteks & Login --- */}
				{isAuthenticated && (
					<>
						{
							isEditingSpecificPost ? (
								// Jika sedang mengedit post, tampilkan tombol "View Post"
								<Link href={`/posts/${slug}`} className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
									View Post
								</Link>
							) : !isOnEditorPath ? (
								// Jika TIDAK di halaman editor, tampilkan tombol "New Post"
								<Link href="/blog/edit/new" className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
									New Post
								</Link>
							) : null /* Jika di halaman /edit/new, jangan tampilkan tombol apa-apa */
						}
					</>
				)}

				<div className="flex items-center gap-5">
					<ThemeSwitcher />
					<Link href="https://github.com/ndtrung341/next-tiptap">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
