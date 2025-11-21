"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

export const Route = createFileRoute("/admin" as any)({
    component: PostsListPage,
});

function PostsListPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("/api/posts");
            if (response.ok) {
                const data = await response.json();
                setPosts(data.posts);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleView = (postId: string) => {
        navigate({ to: `/admin/posts/${postId}` });
    };

    const handleEdit = (postId: string) => {
        navigate({ to: `/admin/posts/${postId}/edit` });
    };

    const handleDelete = async (postId: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchPosts(); // Refresh list
            } else {
                alert("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error deleting post");
        }
    };

    const handleCreate = () => {
        navigate({ to: "/admin/posts/create" });
    };

    if (loading) {
        return (
            <div className="mx-auto max-w-6xl p-6">
                <div className="py-8 text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Loading posts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Posts</h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Manage your blog posts</p>
                </div>
                <button onClick={handleCreate} className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                    + Create Post
                </button>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Posts ({posts.length})</h2>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {posts.length === 0 ? (
                        <div className="px-6 py-12 text-center">
                            <div className="mb-4 text-gray-400 dark:text-gray-500">
                                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">No posts yet</h3>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Get started by creating your first post!</p>
                            <button onClick={handleCreate} className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                                Create Your First Post
                            </button>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id} className="px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-lg font-medium text-gray-900 dark:text-white">{post.title}</h3>
                                        <div className="mt-1 flex items-center gap-4">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${post.published ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`}>{post.published ? "Published" : "Draft"}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex gap-2">
                                        <button onClick={() => handleView(post.id)} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" title="View post">
                                            View
                                        </button>
                                        <button onClick={() => handleEdit(post.id)} className="inline-flex items-center rounded-md border border-blue-300 bg-white px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-600 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" title="Edit post">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(post.id)} className="inline-flex items-center rounded-md border border-red-300 bg-white px-3 py-1.5 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 dark:border-red-600 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" title="Delete post">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
