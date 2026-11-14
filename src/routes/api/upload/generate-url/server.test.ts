import { beforeEach, describe, expect, it, vi } from "vitest";
import { env } from "$env/dynamic/private";

const create = vi.fn();
const findFirst = vi.fn();
const getPresignedUploadUrl = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { temporaryFile: { create, findFirst } },
}));

vi.mock("$lib/storage", () => ({ getPresignedUploadUrl }));

const { POST } = await import("./+server");
const { verifyUploadToken } = await import("$lib/upload-token");

env.BETTER_AUTH_SECRET = "test-secret";

const post = (body: unknown) =>
  POST({
    request: new Request("http://localhost/api/upload/generate-url", {
      method: "POST",
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
  } as any);

const valid = {
  filename: "photo.png",
  originalFilename: "photo.png",
  fileSize: 1234,
  mimeType: "image/png",
  expiryTime: "24h",
};

describe("POST /api/upload/generate-url", () => {
  beforeEach(() => {
    create.mockReset().mockImplementation(async ({ data }: any) => ({ id: "file-1", ...data }));
    findFirst.mockReset().mockResolvedValue(null);
    getPresignedUploadUrl.mockReset().mockResolvedValue("https://signed.example/put");
  });

  it("rejects a malformed body with 400", async () => {
    await expect(post("not json")).rejects.toMatchObject({ status: 400 });
  });

  it("rejects missing fields with 400, not 500", async () => {
    await expect(post({ ...valid, filename: undefined })).rejects.toMatchObject({ status: 400 });
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects an empty or non-integer file size with 400", async () => {
    await expect(post({ ...valid, fileSize: 0 })).rejects.toMatchObject({ status: 400 });
    await expect(post({ ...valid, fileSize: 1.5 })).rejects.toMatchObject({ status: 400 });
  });

  it("rejects an unknown expiry time with 400", async () => {
    await expect(post({ ...valid, expiryTime: "5y" })).rejects.toMatchObject({ status: 400 });
  });

  it("falls back to a random key for a hostile filename without a hash", async () => {
    await post({ ...valid, filename: "../../etc/passwd" });

    const data = create.mock.calls[0][0].data;
    expect(data.filePath).toMatch(/^tmp\/temp-[a-f0-9]{16}\.bin$/);
    expect(data.uploadUrl).toMatch(/^tmp\/temp-[a-f0-9]{16}\.bin$/);
  });

  it("names the storage key from the uploaded filename and hash", async () => {
    const hash = "ab".repeat(32);

    await post({ ...valid, filename: "Laporan Q3.PDF", fileHash: hash });

    const data = create.mock.calls[0][0].data;
    expect(data.filePath).toBe("tmp/laporan-q3-abababab.pdf");
    expect(data.fileHash).toBe(hash);
    // slug akses tetap terpisah dari nama file
    expect(data.uploadUrl).toMatch(/^tmp\/temp-[a-f0-9]{16}\.pdf$/);
  });

  it("rejects a malformed hash with 400", async () => {
    await expect(post({ ...valid, fileHash: "abc" })).rejects.toMatchObject({ status: 400 });
    expect(getPresignedUploadUrl).not.toHaveBeenCalled();
  });

  it("reuses the stored object for an identical, unexpired file", async () => {
    const hash = "ab".repeat(32);
    findFirst.mockResolvedValue({ filePath: "tmp/photo-11112222.png", expiresAt: new Date() });

    const body = await (await post({ ...valid, fileHash: hash, expiryTime: "7d" })).json();

    expect(body.deduped).toBe(true);
    expect(body.presignedUrl).toBeUndefined();
    expect(getPresignedUploadUrl).not.toHaveBeenCalled();

    const data = create.mock.calls[0][0].data;
    expect(data.filePath).toBe("tmp/photo-11112222.png");
    expect(data.fileHash).toBe(hash);
    // nama file diberi angka acak supaya tidak kembar dengan record lama
    expect(data.filename).toMatch(/^photo-\d{4}\.png$/);

    const days = (new Date(body.expiresAt).getTime() - Date.now()) / 86_400_000;
    expect(days).toBeCloseTo(7, 1);
  });

  it("only dedupes against files that have not expired", async () => {
    await post({ ...valid, fileHash: "ab".repeat(32) });

    expect(findFirst.mock.calls[0][0].where).toMatchObject({
      fileHash: "ab".repeat(32),
      expiresAt: { gt: expect.any(Date) },
    });
  });

  it("stores a hash instead of the plaintext password", async () => {
    await post({ ...valid, password: "secret123" });

    const stored = create.mock.calls[0][0].data.password;
    expect(stored).not.toBe("secret123");
    expect(stored.startsWith("scrypt:")).toBe(true);
  });

  it("returns an ownership token that verifies for that file", async () => {
    const body = await (await post(valid)).json();

    expect(body.success).toBe(true);
    expect(body.uploadUrl).toBe(create.mock.calls[0][0].data.uploadUrl);
    expect(verifyUploadToken(body.fileId, body.deleteToken, "test-secret")).toBe(true);
    expect(verifyUploadToken("other-file", body.deleteToken, "test-secret")).toBe(false);
  });

  it("computes expiresAt from the requested duration", async () => {
    const body = await (await post({ ...valid, expiryTime: "1h" })).json();
    const hours = (new Date(body.expiresAt).getTime() - Date.now()) / 3_600_000;

    expect(hours).toBeCloseTo(1, 1);
  });

  it("returns 500 only for infrastructure failures", async () => {
    getPresignedUploadUrl.mockRejectedValue(new Error("s3 down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(post(valid)).rejects.toMatchObject({ status: 500 });
    spy.mockRestore();
  });
});
