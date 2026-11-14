import { afterAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";
import { GET } from "../../src/routes/api/files/[...uploadUrl]/+server";

// Read-only: route ini hanya membaca record + melempar redirect/error.
const enabled = !!process.env.INTEGRATION;

afterAll(async () => {
  await prisma.$disconnect();
});

const call = (uploadUrl: string) =>
  (GET as any)({
    params: { uploadUrl },
    url: new URL(`http://localhost/api/files/${uploadUrl}`),
  });

describe.skipIf(!enabled)("GET /api/files/[...uploadUrl] (read-only)", () => {
  it("redirects a live file straight to Tigris", async () => {
    const record = await prisma.temporaryFile.findFirst({
      where: { expiresAt: { gt: new Date() }, password: null },
      orderBy: { createdAt: "desc" },
    });
    if (!record) return;

    await expect(call(record.uploadUrl)).rejects.toMatchObject({
      status: 302,
      location: expect.stringContaining("tigrisfiles.io"),
    });
  });

  it("returns 404 for an unknown upload url", async () => {
    await expect(call(`tmp/does-not-exist-${Date.now()}.bin`)).rejects.toMatchObject({
      status: 404,
    });
  });

  it("returns 410 for an expired record", async () => {
    const record = await prisma.temporaryFile.findFirst({
      where: { expiresAt: { lt: new Date() }, password: null },
      orderBy: { createdAt: "desc" },
    });
    if (!record) return;

    await expect(call(record.uploadUrl)).rejects.toMatchObject({ status: 410 });
  });

  it("asks for a password on a protected record", async () => {
    const record = await prisma.temporaryFile.findFirst({
      where: { expiresAt: { gt: new Date() }, password: { not: null } },
    });
    if (!record) return;

    const res = await call(record.uploadUrl);
    expect(res.status).toBe(401);
    expect(await res.text()).toContain("Password");
  });
});
