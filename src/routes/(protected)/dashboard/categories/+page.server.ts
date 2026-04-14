import prisma from "$lib/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
    orderBy: {
      order: "desc",
    },
  });

  return {
    categories,
  };
};

export const actions: Actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const namesString = formData.get("names") as string;
    const singleName = formData.get("singleName") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    let names = namesString ? namesString.split(",").map((n) => n.trim()) : [];
    if (singleName && singleName.trim()) {
      names.push(singleName.trim());
    }

    names = [...new Set(names)].filter((n) => n.length >= 1);

    if (names.length === 0) {
      return fail(400, { message: "Category name must be at least 1 character" });
    }

    try {
      const results = await Promise.allSettled(
        names.map((name) => {
          const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

          return prisma.category.create({
            data: { name, slug, order },
          });
        }),
      );

      const failed = results.filter((r) => r.status === "rejected");
      if (failed.length > 0) {
        console.error("Some categories failed to create:", failed);
        if (failed.length === names.length) {
          return fail(500, { message: "All categories failed to create (likely duplicates)" });
        }
        return { success: true, message: `Created ${names.length - failed.length} categories. Some failed (likely duplicates).` };
      }

      return { success: true };
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to create category" });
    }
  },

  update: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const order = parseInt(formData.get("order") as string);

    if (!id || !name || name.length < 2) {
      return fail(400, { message: "Invalid category data" });
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    try {
      await prisma.category.update({
        where: { id },
        data: {
          name,
          slug,
          order: isNaN(order) ? undefined : order,
        },
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to update category" });
    }
  },

  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id") as string;

    if (!id) {
      return fail(400, { message: "ID is required" });
    }

    try {
      // Check if category has posts
      const category = await prisma.category.findUnique({
        where: { id },
        include: { _count: { select: { posts: true } } },
      });

      if (category?._count.posts && category._count.posts > 0) {
        return fail(400, { message: "Cannot delete category that has blog posts" });
      }

      await prisma.category.delete({
        where: { id },
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Failed to delete category" });
    }
  },
};
