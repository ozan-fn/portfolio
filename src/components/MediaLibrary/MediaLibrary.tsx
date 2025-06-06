'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { toast } from 'sonner';
import { UploadCloud, Trash2, CheckCircle, XCircle, Image as ImageIcon, AlertTriangle } from 'lucide-react';

// Asumsi MediaGallery diimpor dari path yang benar dan merupakan versi yang ada di Canvas
import MediaGallery from './MediaGallery';
// Tombol dari shadcn/ui
import { Button } from '@/components/ui/button';

// Hapus atau sesuaikan jika Anda tidak lagi menggunakan file SCSS ini
// import './style.scss';

export interface ImageData {
	id?: string; // Akan berisi S3 Key, penting untuk delete
	url: string;
	created_at?: string;
	bytes?: number;
	format: string;
	display_name: string;
	width?: number;
	height?: number;
}

interface MediaLibraryProps {
	onInsert?: (image: ImageData) => void;
	onClose?: () => void;
}

const MediaLibrary: React.FC<MediaLibraryProps> = ({ onInsert, onClose }) => {
	const [loading, setLoading] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [images, setImages] = useState<ImageData[]>([]);
	const [previews, setPreviews] = useState<ImageData[]>([]);
	const [selected, setSelected] = useState<ImageData | null>(null);
	const fileInput = useRef<HTMLInputElement>(null);

	const fetchImages = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch('/api/images'); // Sesuaikan dengan nama API route Anda
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: 'Failed to fetch images.' }));
				throw new Error(errorData.message || `Failed to fetch images: ${response.statusText}`);
			}
			const data = await response.json();
			setImages(Array.isArray(data) ? data : []);
		} catch (error: any) {
			console.error('Error fetching images:', error);
			toast.error('Gagal memuat gambar.', { description: error.message });
			setImages([]);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchImages();
	}, [fetchImages]);

	const handleUploadClick = () => {
		const confirmUpload = window.confirm(
			'Mohon hindari mengunggah terlalu banyak gambar yang tidak perlu untuk menghemat ruang penyimpanan. Pastikan juga gambar Anda mematuhi aturan hak cipta. Apakah Anda ingin melanjutkan?',
		);
		if (confirmUpload) {
			fileInput.current?.click();
		}
	};

	const loadImageForPreview = (file: File): Promise<ImageData | null> => {
		return new Promise((resolve) => {
			if (!file.type.startsWith('image/')) {
				toast.error(`File "${file.name}" bukan format gambar yang didukung.`);
				resolve(null); // Kembalikan null jika bukan gambar
				return;
			}
			const url = URL.createObjectURL(file);
			const image = new Image();
			image.onload = () => {
				resolve({
					url,
					width: image.width,
					height: image.height,
					format: file.type.split('/')[1] || 'unknown',
					display_name: file.name,
				});
			};
			image.onerror = () => {
				URL.revokeObjectURL(url);
				toast.error(`Gagal memuat preview untuk "${file.name}".`);
				resolve(null); // Kembalikan null jika gagal load
			};
			image.src = url;
		});
	};

	const uploadImageToServer = async (file: File): Promise<ImageData | null> => {
		if (!file.type.startsWith('image/')) return null;

		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('/api/images', {
				method: 'POST',
				body: formData,
			});
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ error: `Gagal mengunggah ${file.name}.` }));
				throw new Error(errorData.error || `Failed to upload ${file.name}`);
			}
			return await response.json();
		} catch (error: any) {
			console.error(`Upload error for ${file.name}:`, error);
			toast.error(`Gagal mengunggah "${file.name}".`, { description: error.message });
			return null;
		}
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const filesArray = e.target.files ? Array.from(e.target.files) : [];
		if (filesArray.length === 0) return;

		setUploading(true);
		setSelected(null);

		const previewPromises = filesArray.map(loadImageForPreview);
		const loadedPreviews = (await Promise.all(previewPromises)).filter((p) => p !== null) as ImageData[];
		setPreviews(loadedPreviews);

		const uploadedImagesData: ImageData[] = [];
		for (const file of filesArray) {
			if (file.type.startsWith('image/')) {
				// Hanya upload jika benar-benar gambar
				const result = await uploadImageToServer(file);
				if (result) {
					uploadedImagesData.push(result);
				}
			}
		}

		loadedPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
		setPreviews([]);

		if (uploadedImagesData.length > 0) {
			setImages((prev) => [...uploadedImagesData, ...prev.filter((img) => !uploadedImagesData.find((upImg) => upImg.id === img.id))]);
			toast.success(`${uploadedImagesData.length} gambar berhasil diunggah!`);
		}
		setUploading(false);
		if (fileInput.current) {
			// Reset input file
			fileInput.current.value = '';
		}
	};

	const handleFinish = () => {
		if (selected && onInsert) {
			onInsert(selected);
			// toast.success(`Gambar "${selected.display_name}" berhasil dipilih.`); // Mungkin tidak perlu toast di sini
		} else if (!selected) {
			toast.warning('Pilih gambar terlebih dahulu untuk dimasukkan.');
		}
	};

	const handleDeleteImage = async (imageId: string, imageName: string) => {
		if (!imageId) {
			toast.error('ID gambar tidak valid untuk dihapus.');
			return;
		}
		const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus gambar "${imageName}"? Tindakan ini tidak dapat dibatalkan.`);
		if (!confirmDelete) return;

		const promise = () =>
			new Promise(async (resolve, reject) => {
				try {
					const response = await fetch(`/api/images?key=${encodeURIComponent(imageId)}`, {
						method: 'DELETE',
					});
					if (!response.ok) {
						const errorData = await response.json().catch(() => ({ error: `Gagal menghapus gambar.` }));
						reject(new Error(errorData.error || `Failed to delete ${imageName}`));
						return;
					}
					resolve(await response.json());
				} catch (error) {
					reject(error);
				}
			});

		toast.promise(promise(), {
			loading: `Menghapus gambar "${imageName}"...`,
			success: () => {
				setImages((prevImages) => prevImages.filter((img) => img.id !== imageId));
				if (selected?.id === imageId) setSelected(null);
				return `Gambar "${imageName}" berhasil dihapus.`;
			},
			error: (err: any) => {
				console.error('Error deleting image:', err);
				return `Gagal menghapus gambar "${imageName}". ${err.message || ''}`;
			},
		});
	};

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
			<div className="flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-background text-foreground shadow-xl md:max-h-[700px]">
				<header className="flex shrink-0 items-center justify-between border-b p-4">
					<h2 className="flex items-center text-lg font-semibold">
						<ImageIcon className="mr-2 h-5 w-5 text-primary" />
						Galeri Media
					</h2>
					<Button disabled={loading || uploading} onClick={handleUploadClick} variant="default" size="sm">
						<UploadCloud className="mr-2 h-4 w-4" />
						Unggah Gambar
					</Button>
				</header>

				<div className="flex-grow overflow-y-auto p-4">
					{loading && (
						<div className="flex h-full flex-col items-center justify-center text-muted-foreground">
							<div className="mb-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
							Memuat gambar...
						</div>
					)}
					{!loading && uploading && previews.length === 0 && (
						<div className="flex h-full flex-col items-center justify-center text-muted-foreground">
							<div className="mb-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
							Mengunggah file...
						</div>
					)}
					{!loading && (images.length > 0 || previews.length > 0) ? (
						<MediaGallery data={[...previews, ...images]} selected={selected} onSelect={setSelected} onDelete={handleDeleteImage} isUploading={uploading} />
					) : (
						!loading &&
						!uploading && ( // Hanya tampilkan jika tidak loading dan tidak uploading
							<div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
								<ImageIcon size={48} className="mb-4 opacity-50" />
								<p className="text-lg font-medium">Belum Ada Gambar</p>
								<p className="text-sm">Klik tombol "Unggah Gambar" untuk menambahkan aset baru.</p>
							</div>
						)
					)}
				</div>

				<footer className="flex shrink-0 items-center justify-end gap-3 border-t bg-muted/30 p-4">
					<Button variant="outline" onClick={onClose}>
						<XCircle className="mr-2 h-4 w-4" />
						Batal
					</Button>
					<Button disabled={!selected || loading || uploading} onClick={handleFinish}>
						<CheckCircle className="mr-2 h-4 w-4" />
						Sisipkan Gambar
					</Button>
				</footer>

				<input style={{ display: 'none' }} type="file" multiple accept="image/*" ref={fileInput} onChange={handleFileChange} aria-hidden="true" />
			</div>
		</div>
	);
};

export default MediaLibrary;
