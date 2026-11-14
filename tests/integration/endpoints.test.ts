import { afterAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";
import { GET as cvGet } from "../../src/routes/api/cv/+server";
import { POST as aiPost } from "../../src/routes/api/ai/generate/+server";
import { GET as historyGet } from "../../src/routes/api/upload/history/+server";

// Read-only: semua test di sini hanya memanggil jalur validasi/baca.
const enabled = !!process.env.INTEGRATION;

afterAll(async () => {
  await prisma.$disconnect();
});

describe.skipIf(!enabled)("endpoints integration (read-only)", () => {
  it("GET /api/cv menghasilkan PDF", async () => {
    const res = await (cvGet as any)({});

    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("application/pdf");

    const bytes = new Uint8Array(await res.arrayBuffer());
    expect(String.fromCharCode(...bytes.slice(0, 4))).toBe("%PDF");
    expect(bytes.length).toBeGreaterThan(1000);
  });

  it("POST /api/ai/generate menolak tanpa login", async () => {
    const res = aiPost({
      request: new Request("http://localhost/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: "halo dunia" }),
      }),
      locals: {},
    } as any);

    await expect(res).rejects.toMatchObject({ status: 401 });
  });

  it("POST /api/ai/generate menolak brief kosong/terlalu panjang", async () => {
    const call = (prompt: string) =>
      aiPost({
        request: new Request("http://localhost/api/ai/generate", {
          method: "POST",
          body: JSON.stringify({ prompt }),
        }),
        locals: { user: { id: "u1" } },
      } as any);

    await expect(call("ab")).rejects.toMatchObject({ status: 400 });
    await expect(call("x".repeat(8001))).rejects.toMatchObject({ status: 400 });
  });

  it("GET /api/upload/history menolak tanpa login", async () => {
    const res = historyGet({
      url: new URL("http://localhost/api/upload/history"),
      locals: {},
    } as any);

    await expect(res).rejects.toMatchObject({ status: 401 });
  });

  it("GET /api/upload/history hanya mengembalikan file yang belum expired", async () => {
    const res = await (historyGet as any)({
      url: new URL("http://localhost/api/upload/history?limit=5"),
      locals: { user: { id: "u1" } },
    });
    const body = await res.json();

    expect(body.success).toBe(true);
    expect(Array.isArray(body.files)).toBe(true);
    for (const file of body.files) {
      expect(new Date(file.expiresAt).getTime()).toBeGreaterThan(Date.now());
      expect(file.password).toBeUndefined();
      expect(typeof file.isProtected).toBe("boolean");
      expect(typeof file.fileSizeFormatted).toBe("string");
    }
  });
});
