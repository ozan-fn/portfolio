'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import cslug from 'slug';

// Komponen Form dari shadcn/ui
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Komponen UI Lainnya
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MultiSelect, type Option } from '@/components/MultiSelect';
import TiptapEditor, { type TiptapEditorRef } from '@/components/TiptapEditor';

// Fungsi Service API
// [BARU] Asumsikan Anda punya service untuk upload gambar
import { getPost, savePost, createPost, getCategories, createCategory, getTags, createTag, uploadImage } from '@/services/post';

// Definisi tipe data untuk form
interface PostForm {
	title: string;
	content: string;
	tags: string[];
	categories: string[];
	cover: string; // [BARU] Menambahkan properti cover
}

export default function EditForm() {
	const params = useParams();
	const router = useRouter();

	const slug = params.slug as string;
	const isCreateMode = slug === 'new';

	// State management
	const editorRef = useRef<TiptapEditorRef>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);
	const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);
	const [tagOptions, setTagOptions] = useState<Option[]>([]);

	// Inisialisasi React Hook Form
	const form = useForm<PostForm>({
		// [DIUBAH] Menambahkan cover ke defaultValues
		defaultValues: { title: '', content: '', tags: [], categories: [], cover: '' },
	});
	const { reset, watch, setValue, handleSubmit, control } = form;

	// Logika dan handler
	const getWordCount = useCallback(() => editorRef.current?.getInstance()?.storage.characterCount.words() ?? 0, []);

	// [BARU] Handler untuk upload gambar cover
	const handleCoverUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const toastId = toast.loading('Mengunggah gambar cover...');

		try {
			// Panggil service upload Anda di sini.
			// Service ini harusnya mengembalikan URL gambar yang telah diunggah.
			const imageUrl = await uploadImage(file);

			// Set nilai 'cover' di form dengan URL yang didapat
			setValue('cover', imageUrl, { shouldValidate: true });
			toast.success('Cover berhasil diunggah!', { id: toastId });
		} catch (error) {
			console.error('Gagal mengunggah cover:', error);
			toast.error('Gagal mengunggah cover.', { id: toastId });
		}
	};

	useEffect(() => {
		Promise.all([getCategories(), getTags()]).then(([categories, tags]) => {
			setCategoryOptions(categories.map((c: any) => ({ value: c.id, label: c.name })));
			setTagOptions(tags.map((t: any) => ({ value: t.id, label: t.name })));
		});

		if (isCreateMode) {
			// [DIUBAH] Reset dengan field cover
			reset({ title: '', content: '', categories: [], tags: [], cover: '' });
			setIsLoading(false);
		} else {
			getPost(slug).then((post) => {
				if (post) {
					// [DIUBAH] Reset form dengan data cover dari post
					reset({
						title: post.title,
						content: post.body,
						categories: post.categories?.map((c: any) => c.id) || [],
						tags: post.tags?.map((t: any) => t.id) || [],
						cover: post.cover || '', // Ambil URL cover dari data post
					});
				} else if (slug !== 'new') {
					console.warn(`Post dengan slug "${slug}" tidak ditemukan.`);
				}
				setIsLoading(false);
			});
		}
	}, [slug, isCreateMode, reset]);

	// ... (Fungsi handleCreateTag dan handleCreateCategory tetap sama) ...
	const handleCreateTag = async (tagName: string) => {
		try {
			const newTag = await createTag({ name: tagName });
			if (newTag) {
				const newOption = { value: newTag.id, label: newTag.name };
				setTagOptions((prev) => [...prev, newOption]);
				const currentTags = watch('tags') || [];
				setValue('tags', [...currentTags, newTag.id]);
				toast.success(`Tag "${tagName}" berhasil dibuat!`);
			}
		} catch (error) {
			console.error('Failed to create tag:', error);
			toast.error('Gagal membuat tag baru.');
		}
	};

	const handleCreateCategory = async (categoryName: string) => {
		try {
			const newCategory = await createCategory({ name: categoryName });
			if (newCategory) {
				const newOption = { value: newCategory.id, label: newCategory.name };
				setCategoryOptions((prev) => [...prev, newOption]);
				const currentCategories = watch('categories') || [];
				setValue('categories', [...currentCategories, newCategory.id]);
				toast.success(`Kategori "${categoryName}" berhasil dibuat!`);
			}
		} catch (error) {
			console.error('Failed to create category:', error);
			toast.error('Gagal membuat kategori baru.');
		}
	};

	const onSubmit = async (data: PostForm) => {
		setIsSaving(true);
		// [DIUBAH] data sudah mengandung 'cover', jadi tidak perlu diubah di sini
		const postData = { ...data, content: data.content, wordCount: getWordCount() };

		const promise = () =>
			new Promise(async (resolve, reject) => {
				try {
					if (isCreateMode) {
						const newPost = await createPost(postData);
						resolve(newPost);
					} else {
						// Pastikan service `savePost` bisa handle field `cover`
						const updatedPost = await savePost(slug, postData);
						resolve(updatedPost);
					}
				} catch (error) {
					reject(error);
				}
			});

		toast.promise(promise(), {
			loading: 'Menyimpan postingan...',
			success: (post: any) => {
				setIsSaving(false);
				if (isCreateMode) {
					router.push(`/blog/edit/${post.slug}`);
				}
				if (slug !== post.slug) {
					router.push(`/blog/edit/${post.slug}`);
				}
				return `Postingan berhasil ${isCreateMode ? 'dibuat' : 'disimpan'}!`;
			},
			error: (err) => {
				setIsSaving(false);
				console.error(err);
				return 'Gagal menyimpan postingan.';
			},
		});
	};

	if (isLoading) return <div className="p-8 text-center">Loading editor...</div>;

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
				<FormField
					control={control}
					name="title"
					rules={{ required: 'Judul wajib diisi' }}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Title</FormLabel>
							<FormControl>
								<Input className="bg-background" placeholder="Enter post title..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* [BARU] FormField untuk Cover Image */}
				<FormField
					control={control}
					name="cover"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Cover Image</FormLabel>
							{/* Pratinjau Gambar */}
							{watch('cover') && (
								<div className="mt-2 overflow-hidden rounded-md border">
									<img src={watch('cover')} alt="Cover preview" className="h-auto w-full max-w-sm" />
								</div>
							)}
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									onChange={handleCoverUpload}
									className="cursor-pointer bg-background file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="categories"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Categories</FormLabel>
							<FormControl>
								<MultiSelect options={categoryOptions} value={field.value || []} onChange={field.onChange} onCreate={handleCreateCategory} placeholder="Select or create categories..." />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Tags</FormLabel>
							<FormControl>
								<MultiSelect options={tagOptions} value={field.value || []} onChange={field.onChange} onCreate={handleCreateTag} placeholder="Select or create tags..." />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Content</FormLabel>
							<FormControl>
								<TiptapEditor
									ref={editorRef}
									onContentChange={field.onChange}
									initialContent={field.value}
									ssr={true}
									output="html"
									placeholder={{
										paragraph: 'Type your content here...',
										imageCaption: 'Type caption for image (optional)',
									}}
									contentMinHeight={256}
									contentMaxHeight={640}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="mt-4 flex justify-end">
					<Button type="submit" disabled={isSaving}>
						{isSaving ? 'Menyimpan...' : isCreateMode ? 'Publikasikan Post' : 'Simpan Perubahan'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
