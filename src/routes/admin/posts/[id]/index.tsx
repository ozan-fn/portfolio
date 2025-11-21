"use client";

import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Editor } from "@/components/blocks/editor-x/editor";
import type { SerializedEditorState } from "lexical";

interface Post {
    id: string;
    title: string;
    content: string; // stored JSON string
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

function PostDetail({ id }: { id: string }) {
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        async function load() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/posts/${id}`);
                if (!res.ok) {
                    throw new Error(res.status === 404 ? "Post not found" : "Failed fetching post");
                }
                const data = await res.json();
                if (active) setPost(data);
            } catch (e: any) {
                if (active) setError(e.message || "Unexpected error");
            } finally {
                if (active) setLoading(false);
            }
        }
        load();
        return () => {
            active = false;
        };
    }, [id]);

    const handlePublishToggle = async () => {
        if (!post) return;
        try {
            const res = await fetch(`/api/posts/${post.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ published: !post.published }),
            });
            if (res.ok) {
                const updated = await res.json();
                setPost(updated);
            } else {
                alert("Failed to update publish status");
            }
        } catch (e) {
            console.error(e);
            alert("Error updating publish status");
        }
    };

    const handleDelete = async () => {
        if (!post) return;
        if (!confirm("Delete this post?")) return;
        try {
            const res = await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
            if (res.status === 204) {
                navigate({ to: "/admin/posts" });
            } else {
                alert("Failed to delete");
            }
        } catch (e) {
            console.error(e);
            alert("Error deleting post");
        }
    };

    const editorState: SerializedEditorState | null = post?.content ? (JSON.parse(post.content) as SerializedEditorState) : null;

    if (loading) {
        return (
            <div className="mx-auto max-w-4xl p-6">
                <div className="py-8 text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" />
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Loading post...</p>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="mx-auto max-w-4xl p-6">
                <div className="py-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{error || "Post not found"}</h1>
                    <button onClick={() => navigate({ to: "/admin/posts" })} className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                        Back to Posts
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
                    <div className="mt-2 flex items-center gap-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${post.published ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`}>{post.published ? "Published" : "Draft"}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={handlePublishToggle} className={`rounded-md px-4 py-2 text-white transition-colors ${post.published ? "bg-yellow-600 hover:bg-yellow-700" : "bg-green-600 hover:bg-green-700"}`}>
                        {post.published ? "Unpublish" : "Publish"}
                    </button>
                    <button onClick={() => navigate({ to: `/admin/posts/${post.id}/edit` })} className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                        Edit
                    </button>
                    <button onClick={handleDelete} className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700">
                        Delete
                    </button>
                    <button onClick={() => navigate({ to: "/admin/posts" })} className="rounded-md bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700">
                        Back
                    </button>
                </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                {editorState && (
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <Editor editorSerializedState={editorState} />
                    </div>
                )}
            </div>
        </div>
    );
}

export const Route = createFileRoute("/admin/posts/[id]" as any)({
    component: PostDetail as any,
});
