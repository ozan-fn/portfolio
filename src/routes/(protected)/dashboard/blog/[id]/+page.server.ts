import prisma from "$lib/prisma";
import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { uploadFile, deleteFile } from "$lib/storage";

export const load: PageServerLoad = async ({ params }) => {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
    include: {
      category: true,
    },
  });

  if (!post) {
    throw error(404, "Blog post not found");
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return {
    post,
    categories,
  };
};

export const actions: Actions = {
  update: async ({ request, params }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const imageFile = formData.get("image") as File;
    const categoryId = formData.get("categoryId") as string;
    const tags = formData.get("tags") as string;
    const published = formData.get("published") === "true";
    const featured = formData.get("featured") !== null;

    if (!title || !content || !categoryId || !slug) {
      return fail(400, {
        error: "Title, slug, content, and category are required",
      });
    }

    try {
      const currentPost = await prisma.blogPost.findUnique({
        where: { id: params.id },
      });

      if (!currentPost) {
        return fail(404, { error: "Blog post not found" });
      }

      let imageUrl = currentPost.image;

      if (imageFile && imageFile.size > 0) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileName = `blog/${slug}-${Date.now()}.${imageFile.name.split(".").pop()}`;
        imageUrl = await uploadFile(buffer, fileName, imageFile.type);

        if (currentPost.image) {
          await deleteFile(currentPost.image);
        }
      }

      // Simple slug generation/validation
      let finalSlug = slug;
      const existingPost = await prisma.blogPost.findFirst({
        where: {
          slug: finalSlug,
          NOT: { id: params.id },
        },
      });

      if (existingPost) {
        finalSlug = `${slug}-${Math.floor(Math.random() * 1000)}`;
      }

      await prisma.blogPost.update({
        where: { id: params.id },
        data: {
          title,
          slug: finalSlug,
          content,
          image: imageUrl,
          tags,
          published,
          featured,
          categoryId,
        },
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to update blog post" });
    }

    throw redirect(303, "/dashboard/blog");
  },

  delete: async ({ params }) => {
    try {
      const post = await prisma.blogPost.findUnique({
        where: { id: params.id },
        select: { image: true },
      });

      if (post?.image) {
        await deleteFile(post.image);
      }

      await prisma.blogPost.delete({
        where: { id: params.id },
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to delete blog post" });
    }

    throw redirect(303, "/dashboard/blog");
  },
};
