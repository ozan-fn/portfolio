import prisma from "$lib/prisma";
import { error, fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { uploadImage, deleteFile } from "$lib/storage";

export const load: PageServerLoad = async ({ params }) => {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
  });

  if (!project) {
    throw error(404, "Project not found");
  }

  return {
    project,
  };
};

export const actions: Actions = {
  update: async ({ params, request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const thumbnailFile = formData.get("thumbnail") as File;
    const githubUrl = formData.get("githubUrl") as string;
    const demoUrl = formData.get("demoUrl") as string;
    const env = formData.get("env") as string;
    const status = formData.get("status") as any;
    const featured = formData.get("featured") === "on";
    const order = parseInt(formData.get("order") as string) || 0;
    const techStackString = formData.get("techStack") as string;

    if (!title || !slug || !description) {
      return fail(400, {
        message: "Title, slug, and description are required",
      });
    }

    const techStack = techStackString
      ? techStackString
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== "")
      : [];

    try {
      const existingProject = await prisma.project.findUnique({
        where: { id: params.id },
        select: { thumbnail: true },
      });

      let thumbnail = undefined;
      if (thumbnailFile && thumbnailFile.size > 0) {
        const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
        thumbnail = await uploadImage(buffer, "projects", thumbnailFile.type);

        if (existingProject?.thumbnail) {
          await deleteFile(existingProject.thumbnail);
        }
      }

      await prisma.project.update({
        where: { id: params.id },
        data: {
          title,
          slug,
          description,
          content,
          ...(thumbnail && { thumbnail }),
          githubUrl,
          demoUrl,
          env,
          status,
          techStack,
          featured,
          order,
        } as any,
      });
    } catch (err) {
      console.error("Update project error:", err);
      return fail(500, { message: "Failed to update project. Ensure slug is unique." });
    }

    throw redirect(303, "/dashboard/projects");
  },

  delete: async ({ params }) => {
    try {
      const project = await prisma.project.findUnique({
        where: { id: params.id },
        select: { thumbnail: true },
      });

      if (project?.thumbnail) {
        await deleteFile(project.thumbnail);
      }

      await prisma.project.delete({
        where: { id: params.id },
      });
    } catch (err) {
      console.error("Delete project error:", err);
      return fail(500, { message: "Failed to delete project" });
    }

    throw redirect(303, "/dashboard/projects");
  },
};
