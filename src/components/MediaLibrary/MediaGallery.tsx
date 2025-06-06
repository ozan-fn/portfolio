'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Utilitas untuk menggabungkan className
import { Button } from '@/components/ui/button'; // Tombol dari shadcn/ui
import { Trash2, CheckCircle } from 'lucide-react'; // Ikon

// Impor tipe data ImageData dari MediaLibrary.tsx
// Pastikan path ini sesuai dengan struktur folder Anda
// Misalnya, jika MediaGallery.tsx ada di components/shared/MediaGallery.tsx
// dan MediaLibrary.tsx ada di components/MediaLibrary.tsx
// pathnya bisa jadi '../MediaLibrary'
import type { ImageData } from './MediaLibrary';

// Definisikan interface props untuk MediaGallery
export interface MediaGalleryProps {
	data: ImageData[];
	selected: ImageData | null;
	isUploading: boolean;
	onSelect: (image: ImageData) => void;
	onDelete: (imageId: string, imageName: string) => Promise<void>; // Fungsi untuk menghapus gambar
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ data, selected, onSelect, onDelete, isUploading }) => {
	if (!data || data.length === 0) {
		// Tampilan jika tidak ada gambar sama sekali (setelah loading selesai dan tidak ada preview)
		// Ini bisa dikosongkan jika Anda sudah menanganinya di MediaLibrary
		return null;
	}

	return (
		<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
			{data.map((image) => (
				<div
					key={image.id || image.url} // Gunakan image.id jika tersedia (dari server), atau image.url untuk preview
					className={cn(
						'group relative aspect-square cursor-pointer overflow-hidden rounded-md border-2',
						selected?.id === image.id || selected?.url === image.url ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent hover:border-primary/50',
						isUploading && !image.id ? 'animate-pulse opacity-60' : '', // Efek untuk item preview saat uploading
					)}
					onClick={() => onSelect(image)}
				>
					{/* Gunakan tag img standar untuk URL objek atau URL dari server */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={image.url}
						alt={image.display_name}
						className={cn('h-full w-full object-cover transition-transform duration-200 ease-in-out', selected?.id === image.id || selected?.url === image.url ? 'scale-100' : 'group-hover:scale-105')}
						// Tambahkan error handler jika gambar gagal dimuat
						onError={(e) => {
							// Anda bisa mengganti src dengan placeholder atau menyembunyikan gambar
							(e.target as HTMLImageElement).style.display = 'none';
							// Atau (e.target as HTMLImageElement).src = '/placeholder-image.png';
						}}
					/>

					{/* Tombol Hapus hanya untuk gambar yang sudah diupload (memiliki ID) */}
					{image.id && (
						<Button
							variant="destructive"
							size="icon"
							className="absolute right-1.5 top-1.5 z-10 h-7 w-7 p-1 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
							onClick={(e) => {
								e.stopPropagation(); // Mencegah trigger onSelect pada parent div
								onDelete(image.id!, image.display_name); // Panggil fungsi onDelete
							}}
							aria-label={`Hapus gambar ${image.display_name}`}
						>
							<Trash2 className="h-4 w-4" />
						</Button>
					)}

					{/* Tanda centang untuk item yang terpilih */}
					{(selected?.id === image.id || selected?.url === image.url) && (
						<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/30">
							<CheckCircle className="h-10 w-10 text-white drop-shadow-lg" />
						</div>
					)}

					{/* Overlay gelap saat hover untuk kontras tombol delete (jika diperlukan) */}
					<div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 ease-in-out group-hover:bg-black/10"></div>
				</div>
			))}
		</div>
	);
};

export default MediaGallery;
