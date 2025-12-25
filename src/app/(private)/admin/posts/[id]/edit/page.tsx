import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface EditPostPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const id = (await params).id;
    const post = await prisma.post.findUnique({
        where: { id: id },
        include: { author: true },
    });

    if (!post) {
        notFound();
    }

    // Check if user is the author
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session?.user?.id || session.user.id !== post.authorId) {
        throw new Error("Unauthorized");
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
            <form action={updatePost} className="space-y-4">
                <input type="hidden" name="id" value={post.id} />
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        Title
                    </label>
                    <input type="text" id="title" name="title" defaultValue={post.title} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium">
                        Content
                    </label>
                    <textarea id="content" name="content" defaultValue={post.content} required rows={10} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="flex items-center">
                        <input type="checkbox" name="published" defaultChecked={post.published} className="mr-2" />
                        Published
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Update Post
                </button>
            </form>
        </div>
    );
}

async function updatePost(formData: FormData) {
    "use server";

    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const published = formData.has("published");

    // Get current user
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    // Check ownership
    const post = await prisma.post.findUnique({
        where: { id },
    });
    if (!post || post.authorId !== session.user.id) {
        throw new Error("Unauthorized");
    }

    await prisma.post.update({
        where: { id },
        data: {
            title,
            content,
            published,
        },
    });

    revalidatePath("/admin/posts");
    redirect("/admin/posts");
}
