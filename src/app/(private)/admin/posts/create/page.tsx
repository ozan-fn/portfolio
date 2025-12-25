import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth"; // assuming auth is set up
import { headers } from "next/headers";

export default function CreatePostPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create Post</h1>
            <form action={createPost} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        Title
                    </label>
                    <input type="text" id="title" name="title" required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium">
                        Content
                    </label>
                    <textarea id="content" name="content" required rows={10} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="flex items-center">
                        <input type="checkbox" name="published" className="mr-2" />
                        Published
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Post
                </button>
            </form>
        </div>
    );
}

async function createPost(formData: FormData) {
    "use server";

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

    await prisma.post.create({
        data: {
            title,
            content,
            published,
            authorId: session.user.id,
        },
    });

    revalidatePath("/admin/posts");
    redirect("/admin/posts");
}
