import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
    },
    include: {
      category: true,
    },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  return {
    posts,
  };
};
