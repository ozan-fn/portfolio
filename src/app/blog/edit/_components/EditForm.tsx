import { useCallback, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TiptapEditor, { type TiptapEditorRef } from "@/components/TiptapEditor";
import { getPost, savePost } from "@/services/post";
import { Input } from "@/components/ui/input";

interface PostForm {
	title: string;
	content: string;
	tags: string[];
	categories: string[];
}

export default function EditForm() {
	const editorRef = useRef<TiptapEditorRef>(null);
	const [isLoading, setIsLoading] = useState(true);
	const { control, reset, watch } = useForm<PostForm>();

	const getWordCount = useCallback(() => editorRef.current?.getInstance()?.storage.characterCount.words() ?? 0, [editorRef.current]);

	useEffect(() => {
		getPost().then((post) => {
			reset({ ...post });
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		const subscription = watch((values, { type }) => {
			if (type === "change") {
				savePost({ ...values, wordCount: getWordCount() });
			}
		});

		return () => subscription.unsubscribe();
	}, [watch]);

	if (isLoading) return;

	return (
		<div className="flex flex-col gap-6">
			<div>
				<label className="inline-block font-medium dark:text-white mb-2">Title</label>
				<Controller control={control} name="title" render={({ field }) => <Input {...field} type="text" className="w-full px-4 py-2.5 shadow border border-[#d1d9e0] rounded-md bg-white  dark:border-[#3d444d] outline-none" placeholder="Enter post title..." />} />
			</div>

			<div>
				<label className="inline-block font-medium dark:text-white mb-2">Tags</label>
				<Controller control={control} name="tags" render={({ field }) => <Input {...field} type="text" className="w-full px-4 py-2.5 shadow border border-[#d1d9e0] rounded-md bg-white  dark:border-[#3d444d] outline-none" placeholder="Enter tags title..." />} />
			</div>

			<div>
				<label className="inline-block font-medium dark:text-white mb-2">Categories</label>
				<Controller control={control} name="categories" render={({ field }) => <Input {...field} type="text" className="w-full px-4 py-2.5 shadow border border-[#d1d9e0] rounded-md bg-white  dark:border-[#3d444d] outline-none" placeholder="Enter categories title..." />} />
			</div>

			<div>
				<label className="inline-block font-medium dark:text-white mb-2">Content</label>
				<Controller
					control={control}
					name="content"
					render={({ field }) => (
						<TiptapEditor
							ref={editorRef}
							ssr={true}
							output="html"
							placeholder={{
								paragraph: "Type your content here...",
								imageCaption: "Type caption for image (optional)",
							}}
							contentMinHeight={256}
							contentMaxHeight={640}
							onContentChange={field.onChange}
							initialContent={field.value}
						/>
					)}
				/>
			</div>
		</div>
	);
}
