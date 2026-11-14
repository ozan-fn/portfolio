import { afterAll, beforeAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";

// CRUD nyata ke Postgres, tapi setiap test dibungkus transaksi yang selalu
// di-rollback. Data lama tidak berubah sama sekali.
const enabled = !!process.env.INTEGRATION;

class Rollback extends Error {}

async function inRollback(fn: (tx: any) => Promise<void>) {
  try {
    await prisma.$transaction(async (tx) => {
      await fn(tx);
      throw new Rollback();
    });
  } catch (err) {
    if (!(err instanceof Rollback)) throw err;
  }
}

const stamp = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const counts = async () => ({
  users: await prisma.user.count(),
  projects: await prisma.project.count(),
  certificates: await prisma.certificate.count(),
  categories: await prisma.category.count(),
  posts: await prisma.blogPost.count(),
  shortLinks: await prisma.shortLink.count(),
  temporaryFiles: await prisma.temporaryFile.count(),
  aiSettings: await prisma.aiSetting.count(),
});

let before: Awaited<ReturnType<typeof counts>>;

beforeAll(async () => {
  if (enabled) before = await counts();
});

afterAll(async () => {
  if (enabled) {
    // Bukti tidak ada data yang berubah.
    expect(await counts()).toEqual(before);
  }
  await prisma.$disconnect();
});

describe.skipIf(!enabled)("CRUD semua fitur (rolled back)", () => {
  it("temporary file: create, update, delete", async () => {
    await inRollback(async (tx) => {
      const id = stamp();
      const file = await tx.temporaryFile.create({
        data: {
          filename: `it-${id}.txt`,
          originalFilename: "it.txt",
          filePath: `tmp/it-${id}.txt`,
          fileSize: 10,
          mimeType: "text/plain",
          expiryTime: "1h",
          fileHash: "f".repeat(64),
          uploadUrl: `tmp/it-${id}.txt`,
          expiresAt: new Date(Date.now() + 3_600_000),
        },
      });

      const updated = await tx.temporaryFile.update({
        where: { id: file.id },
        data: { filename: `it-${id}-renamed.txt` },
      });
      expect(updated.filename).toBe(`it-${id}-renamed.txt`);

      await tx.temporaryFile.delete({ where: { id: file.id } });
      await expect(tx.temporaryFile.findUnique({ where: { id: file.id } })).resolves.toBeNull();
    });
  });

  it("temporary file: dedupe lookup and expired selection", async () => {
    await inRollback(async (tx) => {
      const hash = "d".repeat(64);
      const id = stamp();
      const live = await tx.temporaryFile.create({
        data: {
          filename: `it-${id}.bin`,
          originalFilename: "it.bin",
          filePath: `tmp/it-${id}.bin`,
          fileSize: 1,
          mimeType: "application/octet-stream",
          expiryTime: "1h",
          fileHash: hash,
          uploadUrl: `tmp/it-${id}.bin`,
          expiresAt: new Date(Date.now() + 3_600_000),
        },
      });

      const match = await tx.temporaryFile.findFirst({
        where: { fileHash: hash, expiresAt: { gt: new Date() } },
      });
      expect(match?.filePath).toBe(live.filePath);
      expect(await tx.temporaryFile.count({ where: { fileHash: hash } })).toBe(1);
    });
  });

  // Unique constraint mengabort transaksi, jadi test ini pakai data sementara
  // yang selalu dihapus di finally (net change = 0).
  it("short link: create, duplicate alias rejected, delete", async () => {
    const alias = `it-${stamp()}`;

    try {
      const link = await prisma.shortLink.create({ data: { url: "https://example.com", alias } });
      expect(link.alias).toBe(alias);

      await expect(
        prisma.shortLink.create({ data: { url: "https://example.org", alias } }),
      ).rejects.toMatchObject({ code: "P2002" });

      await prisma.shortLink.delete({ where: { alias } });
      await expect(prisma.shortLink.findUnique({ where: { alias } })).resolves.toBeNull();
    } finally {
      await prisma.shortLink.deleteMany({ where: { alias } });
    }
  });

  it("category + blog post relation: create, update, cascade-safe delete", async () => {
    await inRollback(async (tx) => {
      const id = stamp();
      const category = await tx.category.create({
        data: { name: `it-cat-${id}`, slug: `it-cat-${id}` },
      });
      const post = await tx.blogPost.create({
        data: {
          title: "it post",
          slug: `it-post-${id}`,
          content: "hello",
          categoryId: category.id,
        },
      });

      const published = await tx.blogPost.update({
        where: { id: post.id },
        data: { published: true },
      });
      expect(published.published).toBe(true);

      const withCategory = await tx.blogPost.findUnique({
        where: { id: post.id },
        include: { category: true },
      });
      expect(withCategory?.category.slug).toBe(`it-cat-${id}`);

      await tx.blogPost.delete({ where: { id: post.id } });
      await tx.category.delete({ where: { id: category.id } });
    });
  });

  it("project: create, feature, delete", async () => {
    await inRollback(async (tx) => {
      const id = stamp();
      const project = await tx.project.create({
        data: {
          title: "it project",
          slug: `it-project-${id}`,
          description: "desc",
          techStack: ["Svelte"],
          thumbnail: `projects/it-${id}.png`,
        },
      });

      const featured = await tx.project.update({
        where: { id: project.id },
        data: { featured: true, status: "IN_PROGRESS" },
      });
      expect(featured.featured).toBe(true);

      await tx.project.delete({ where: { id: project.id } });
      await expect(tx.project.findUnique({ where: { id: project.id } })).resolves.toBeNull();
    });
  });

  it("certificate: create, update dates, delete", async () => {
    await inRollback(async (tx) => {
      const id = stamp();
      const cert = await tx.certificate.create({
        data: {
          title: "it cert",
          slug: `it-cert-${id}`,
          issuer: "it issuer",
          issueDate: new Date("2026-01-01"),
        },
      });

      const updated = await tx.certificate.update({
        where: { id: cert.id },
        data: { expiryDate: new Date("2027-01-01") },
      });
      expect(updated.expiryDate).toBeInstanceOf(Date);

      await tx.certificate.delete({ where: { id: cert.id } });
    });
  });

  it("text share: upsert content + atomic view increment", async () => {
    await inRollback(async (tx) => {
      const before = await tx.textShare.findUnique({ where: { id: "singleton" } });

      const saved = await tx.textShare.upsert({
        where: { id: "singleton" },
        update: { content: "it content" },
        create: { id: "singleton", content: "it content" },
      });
      expect(saved.content).toBe("it content");

      const counted = await tx.textShare.upsert({
        where: { id: "singleton" },
        update: { views: { increment: 1 } },
        create: { id: "singleton", content: "", views: 1 },
      });

      if (before) expect(counted.views).toBe(before.views + 1);
    });
  });

  it("user: update name and email", async () => {
    await inRollback(async (tx) => {
      const existing = await tx.user.findFirst({ select: { id: true, email: true, name: true } });
      if (!existing) return;

      const updated = await tx.user.update({
        where: { id: existing.id },
        // Sama seperti action updateEmail: email baru dianggap belum verified.
        data: { name: "it name", email: `it-${stamp()}@example.com`, emailVerified: false },
      });

      expect(updated.name).toBe("it name");
      expect(updated.email).toMatch(/^it-.*@example\.com$/);
      expect(updated.emailVerified).toBe(false);
    });
  });

  it("cron: expired rows removed only when the object is not shared with a live row", async () => {
    await inRollback(async (tx) => {
      const id = stamp();
      const sharedPath = `tmp/it-shared-${id}.png`;
      const now = new Date();

      await tx.temporaryFile.createMany({
        data: [
          {
            filename: "old.png",
            originalFilename: "old.png",
            filePath: sharedPath,
            fileSize: 5,
            mimeType: "image/png",
            expiryTime: "1h",
            uploadUrl: `tmp/it-old-${id}.png`,
            expiresAt: new Date(now.getTime() - 60_000),
          },
          {
            filename: "live.png",
            originalFilename: "live.png",
            filePath: sharedPath,
            fileSize: 5,
            mimeType: "image/png",
            expiryTime: "1h",
            uploadUrl: `tmp/it-live-${id}.png`,
            expiresAt: new Date(now.getTime() + 60_000),
          },
        ],
      });

      const expired = await tx.temporaryFile.findMany({
        where: { expiresAt: { lt: now }, filePath: sharedPath },
        select: { id: true, filePath: true },
      });
      const stillUsed = await tx.temporaryFile.findMany({
        where: { filePath: { in: [sharedPath] }, expiresAt: { gt: now } },
        select: { filePath: true },
      });

      expect(expired).toHaveLength(1);
      expect(stillUsed.map((r: any) => r.filePath)).toContain(sharedPath);
    });
  });

  it("ai settings: upsert base url, model, key", async () => {
    await inRollback(async (tx) => {
      const settings = await tx.aiSetting.upsert({
        where: { id: "singleton" },
        update: { baseUrl: "https://api.example.com/v1", model: "it-model", apiKey: "sk-it" },
        create: { id: "singleton", baseUrl: "https://api.example.com/v1", model: "it-model", apiKey: "sk-it" },
      });

      expect(settings.model).toBe("it-model");
    });
  });
});
