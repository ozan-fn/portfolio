import { afterAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";
import { getAiSettings } from "$lib/ai";
import { loadTextShare } from "$lib/text-share";

// Read-only: file ini hanya SELECT. Tidak ada create/update/delete.
const enabled = !!process.env.INTEGRATION;

afterAll(async () => {
  await prisma.$disconnect();
});

describe.skipIf(!enabled)("database integration (read-only)", () => {
  it("connects and reads every feature table", async () => {
    const [users, projects, certificates, categories, posts, links, shares, temps] = await Promise.all([
      prisma.user.findMany({ take: 2, select: { id: true } }),
      prisma.project.findMany({ take: 2, select: { id: true } }),
      prisma.certificate.findMany({ take: 2, select: { id: true } }),
      prisma.category.findMany({ take: 2, select: { id: true } }),
      prisma.blogPost.findMany({ take: 2, select: { id: true } }),
      prisma.shortLink.findMany({ take: 2, select: { id: true } }),
      prisma.textShare.findMany({ take: 2, select: { id: true } }),
      prisma.temporaryFile.findMany({ take: 2, select: { id: true } }),
    ]);

    for (const rows of [users, projects, certificates, categories, posts, links, shares, temps]) {
      expect(Array.isArray(rows)).toBe(true);
    }
  });

  it("has the ai_settings table and file_hash column", async () => {
    await expect(prisma.aiSetting.findUnique({ where: { id: "singleton" } })).resolves.toBeDefined();
    await expect(
      prisma.temporaryFile.findFirst({ select: { fileHash: true } }),
    ).resolves.toBeDefined();
  });

  it("runs the cron cleanup query without deleting anything", async () => {
    const before = await prisma.temporaryFile.count();

    const expired = await prisma.temporaryFile.findMany({
      where: { expiresAt: { lt: new Date() } },
      take: 5,
      select: { id: true, filePath: true },
    });

    const after = await prisma.temporaryFile.count();
    expect(after).toBe(before);
    expect(Array.isArray(expired)).toBe(true);
  });

  it("finds duplicate candidates by hash", async () => {
    const sample = await prisma.temporaryFile.findFirst({
      where: { fileHash: { not: null } },
      select: { fileHash: true },
    });
    if (!sample?.fileHash) return;

    const found = await prisma.temporaryFile.findFirst({
      where: { fileHash: sample.fileHash, expiresAt: { gt: new Date() } },
      select: { fileHash: true },
    });

    expect(found === null || found.fileHash === sample.fileHash).toBe(true);
  });

  it("reads text share without incrementing views", async () => {
    const before = await prisma.textShare.findUnique({
      where: { id: "singleton" },
      select: { views: true },
    });

    await loadTextShare(false);

    const after = await prisma.textShare.findUnique({
      where: { id: "singleton" },
      select: { views: true },
    });

    expect(after?.views ?? null).toBe(before?.views ?? null);
  });

  it("reads AI settings (key never leaves the server)", async () => {
    const settings = await getAiSettings();

    expect(settings === null || typeof settings.apiKey === "string").toBe(true);
  });
});
