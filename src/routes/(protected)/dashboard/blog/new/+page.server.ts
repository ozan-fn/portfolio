import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { uploadImage } from "$lib/storage";

export const load: PageServerLoad = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return {
    categories,
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const imageFile = formData.get("image") as File;
    const categoryId = formData.get("categoryId") as string;
    const tags = formData.get("tags") as string;
    const published = formData.get("published") === "true";
    const featured = formData.get("featured") === "on";

    // Basic validation
    if (!title || !slug || !content || !categoryId) {
      return fail(400, {
        error: "Title, slug, content, and category are required",
        values: { title, slug, content, categoryId, tags, published, featured },
      });
    }

    let image = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        image = await uploadImage(buffer, "blog", imageFile.type);
      } catch (error) {
        console.error("Upload image error:", error);
      }
    }

    try {
      await prisma.blogPost.create({
        data: {
          title,
          slug,
          content,
          image,
          tags,
          published,
          featured,
          categoryId,
        },
      });
    } catch (err) {
      console.error(err);
      return fail(500, { error: "Failed to create blog post. Ensure slug is unique." });
    }

    throw redirect(303, "/dashboard/blog");
  },
};
