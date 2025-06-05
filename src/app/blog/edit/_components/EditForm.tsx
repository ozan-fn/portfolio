'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner'; // Impor toast dari sonner

// Komponen Form dari shadcn/ui
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Komponen UI Lainnya
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MultiSelectCombobox, type Option } from '@/components/MultiSelectCombobox';
import TiptapEditor, { type TiptapEditorRef } from '@/components/TiptapEditor';

// Fungsi Service API
import { getPost, savePost, createPost, getCategories, createCategory, getTags, createTag } from '@/services/post';

// Definisi tipe data untuk form
interface PostForm {
	title: string;
	content: string;
	tags: string[];
	categories: string[];
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
		defaultValues: { title: '', content: '', tags: [], categories: [] },
	});
	const { reset, watch, setValue, handleSubmit, control } = form;

	// Logika dan handler
	const getWordCount = useCallback(() => editorRef.current?.getInstance()?.storage.characterCount.words() ?? 0, []);

	useEffect(() => {
		Promise.all([getCategories(), getTags()]).then(([categories, tags]) => {
			setCategoryOptions(categories.map((c: any) => ({ value: c.id, label: c.name })));
			setTagOptions(tags.map((t: any) => ({ value: t.id, label: t.name })));
		});

		if (isCreateMode) {
			reset({ title: '', content: '', categories: [], tags: [] });
			setIsLoading(false);
		} else {
			getPost(slug).then((post) => {
				if (post) {
					reset({
						title: post.title,
						content: post.body,
						categories: post.categories?.map((c: any) => c.id) || [],
						tags: post.tags?.map((t: any) => t.id) || [],
					});
				} else if (slug !== 'new') {
					console.warn(`Post dengan slug "${slug}" tidak ditemukan.`);
				}
				setIsLoading(false);
			});
		}
	}, [slug, isCreateMode, reset]);

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
		const postData = { ...data, content: data.content, wordCount: getWordCount() };

		const promise = () =>
			new Promise(async (resolve, reject) => {
				try {
					if (isCreateMode) {
						const newPost = await createPost(postData);
						resolve(newPost);
					} else {
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
					router.push(`/dashboard/posts/edit/${post.slug}`);
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

				<FormField
					control={control}
					name="categories"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="dark:text-white">Categories</FormLabel>
							<FormControl>
								<MultiSelectCombobox options={categoryOptions} value={field.value || []} onChange={field.onChange} onCreate={handleCreateCategory} placeholder="Select or create categories..." />
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
								<MultiSelectCombobox options={tagOptions} value={field.value || []} onChange={field.onChange} onCreate={handleCreateTag} placeholder="Select or create tags..." />
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
