"use server";

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        include: { author: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Posts</h1>
                <Link href="/admin/posts/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Post
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Title</th>
                            <th className="px-4 py-2 border-b">Author</th>
                            <th className="px-4 py-2 border-b">Published</th>
                            <th className="px-4 py-2 border-b">Created At</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-4 py-2 border-b">{post.title}</td>
                                <td className="px-4 py-2 border-b">{post.author.name}</td>
                                <td className="px-4 py-2 border-b">{post.published ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border-b">{post.createdAt.toLocaleDateString()}</td>
                                <td className="px-4 py-2 border-b">
                                    <Link href={`/admin/posts/${post.id}/edit`} className="text-blue-500 hover:underline mr-4">
                                        Edit
                                    </Link>
                                    <form action={deletePost} className="inline">
                                        <input type="hidden" name="id" value={post.id} />
                                        <button type="submit" className="text-red-500 hover:underline">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

async function deletePost(formData: FormData) {
    "use server";

    const id = formData.get("id") as string;
    await prisma.post.delete({
        where: { id },
    });

    revalidatePath("/admin/posts");
}
