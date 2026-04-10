import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { uploadImage } from "$lib/storage";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const thumbnailFile = formData.get("thumbnail") as File;
    const githubUrl = formData.get("githubUrl") as string;
    const demoUrl = formData.get("demoUrl") as string;
    const env = formData.get("env") as string;
    const status = formData.get("status") as any;
    const techStackString = formData.get("techStack") as string;

    // Basic validation
    if (!title || !description) {
      return fail(400, {
        message: "Title and description are required",
        data: { title, description, content, githubUrl, demoUrl, env, status, techStackString },
      });
    }

    let thumbnail = null;
    if (thumbnailFile && thumbnailFile.size > 0) {
      try {
        const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
        thumbnail = await uploadImage(buffer, "projects", thumbnailFile.type);
      } catch (error) {
        console.error("Upload thumbnail error:", error);
      }
    }

    // Process tech stack from comma separated string
    const techStack = techStackString
      ? techStackString
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== "")
      : [];

    try {
      await prisma.project.create({
        data: {
          title,
          description,
          content,
          thumbnail,
          githubUrl,
          demoUrl,
          env,
          status,
          techStack,
        } as any,
      });
    } catch (error) {
      console.error("Create project error:", error);
      return fail(500, {
        message: "Could not create project",
        data: { title, description, content, githubUrl, demoUrl, env, status, techStackString },
      });
    }

    throw redirect(303, "/dashboard/projects");
  },
};
