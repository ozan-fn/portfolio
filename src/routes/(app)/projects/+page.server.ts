import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ setHeaders }) => {
  // Cache for 5 minutes
  setHeaders({
    "Cache-Control": "public, max-age=300",
  });

  const projects = await prisma.project.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
  });

  return {
    projects,
  };
};
