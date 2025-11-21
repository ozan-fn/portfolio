"use client";

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { SerializedEditorState } from "lexical";
import { Editor } from "@/components/blocks/editor-x/editor";

const initialValue = {
    root: {
        children: [
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: "Hello World 🚀",
                        type: "text",
                        version: 1,
                    },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1,
            },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "root",
        version: 1,
    },
} as unknown as SerializedEditorState;

function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content: editorState,
                }),
            });

            if (response.ok) {
                navigate({ to: "/admin/posts" });
            } else {
                alert("Failed to create post");
            }
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create New Post</h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Write and publish your blog post</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Title
                    </label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" placeholder="Enter post title..." required />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                    <div className="rounded-md border border-gray-300 dark:border-gray-600">
                        <Editor editorSerializedState={editorState} onSerializedChange={(value) => setEditorState(value)} />
                    </div>
                </div>

                <div className="flex gap-4">
                    <button type="submit" disabled={loading} className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
                        {loading ? "Creating..." : "Create Post"}
                    </button>
                    <button type="button" onClick={() => navigate({ to: "/admin/posts" })} className="rounded-md bg-gray-600 px-6 py-2 text-white transition-colors hover:bg-gray-700">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export const Route = createFileRoute("/admin/posts/create" as any)({
    component: CreatePostPage as any,
});
