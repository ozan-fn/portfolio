import prisma from "$lib/prisma";
import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { deleteFile } from "$lib/storage";

export const load: PageServerLoad = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    projects,
  };
};

export const actions: Actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id") as string;

    if (!id) {
      return fail(400, { message: "Project ID is required" });
    }

    try {
      const project = await prisma.project.findUnique({
        where: { id },
        select: { thumbnail: true },
      });

      if (project?.thumbnail) {
        await deleteFile(project.thumbnail);
      }

      await prisma.project.delete({
        where: { id },
      });
      return { success: true };
    } catch (error) {
      console.error("Delete project error:", error);
      return fail(500, { message: "Failed to delete project" });
    }
  },
};
