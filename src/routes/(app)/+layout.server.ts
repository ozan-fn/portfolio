import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const user = await prisma.user.findFirst({
    select: {
      image: true,
      name: true,
    },
  });

  return {
    user,
  };
};
