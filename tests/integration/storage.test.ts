import { afterAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";
import { headObject } from "$lib/storage";
import { getFileUrl } from "$lib/storage.client";

// Read-only: hanya HEAD/GET, tidak pernah upload atau hapus objek.
const enabled = !!process.env.INTEGRATION;

afterAll(async () => {
  await prisma.$disconnect();
});

describe.skipIf(!enabled)("tigris integration (read-only)", () => {
  it("reports a missing object as not existing", async () => {
    const result = await headObject(`tmp/diag-missing-${Date.now()}.txt`);

    expect(result.exists).toBe(false);
    expect(result.size).toBeNull();
  });

  it("finds a real stored asset and reports its size", async () => {
    const project = await prisma.project.findFirst({
      where: { thumbnail: { not: null } },
      select: { thumbnail: true },
    });
    if (!project?.thumbnail) return;

    const result = await headObject(project.thumbnail);

    expect(result.exists).toBe(true);
    expect(result.size).toBeGreaterThan(0);
  });

  it("serves a stored asset through the public bucket url", async () => {
    const project = await prisma.project.findFirst({
      where: { thumbnail: { not: null } },
      select: { thumbnail: true },
    });
    if (!project?.thumbnail) return;

    const res = await fetch(getFileUrl(project.thumbnail), { method: "HEAD" });

    expect(res.status).toBe(200);
  });

  it("maps keys to the public bucket base url", () => {
    expect(getFileUrl("projects/x.png")).toBe("https://zan68.t3.tigrisfiles.io/projects/x.png");
  });
});
