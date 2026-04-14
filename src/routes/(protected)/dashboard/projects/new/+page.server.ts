import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { uploadImage } from "$lib/storage";

export const actions: Actions = {
  default: async ({ request }) => {
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

    // Basic validation
    if (!title || !slug || !description) {
      return fail(400, {
        message: "Title, slug, and description are required",
        data: { title, slug, description, content, githubUrl, demoUrl, env, status, techStackString, featured, order },
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
          slug,
          description,
          content,
          thumbnail,
          githubUrl,
          demoUrl,
          env,
          status,
          techStack,
          featured,
          order,
        } as any,
      });
    } catch (error) {
      console.error("Create project error:", error);
      return fail(500, {
        message: "Could not create project. Ensure slug is unique.",
        data: { title, slug, description, content, githubUrl, demoUrl, env, status, techStackString, featured, order },
      });
    }

    throw redirect(303, "/dashboard/projects");
  },
};
