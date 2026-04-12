import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const certificates = await prisma.certificate.findMany({
    orderBy: {
      issueDate: "desc",
    },
  });

  return {
    certificates: JSON.parse(JSON.stringify(certificates)),
  };
};
