import { beforeEach, describe, expect, it, vi } from "vitest";
import { env } from "$env/dynamic/private";

const findUnique = vi.fn();
const update = vi.fn();
const remove = vi.fn();
const headObject = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { temporaryFile: { findUnique, update, delete: remove } },
}));

vi.mock("$lib/storage", () => ({ headObject }));

const { POST } = await import("./+server");
const { createUploadToken } = await import("$lib/upload-token");

env.BETTER_AUTH_SECRET = "test-secret";

const record = {
  id: "file-1",
  filename: "a.txt",
  uploadUrl: "tmp/a-1234abcd.txt",
  filePath: "tmp/a-1234abcd.txt",
  fileSize: 100,
  expiresAt: new Date(Date.now() + 60_000),
};

const post = (body: unknown, locals: any = {}) =>
  POST({
    request: new Request("http://localhost/api/upload/complete", {
      method: "POST",
      body: JSON.stringify(body),
    }),
    locals,
  } as any);

const token = createUploadToken(record.id, "test-secret");

describe("POST /api/upload/complete", () => {
  beforeEach(() => {
    findUnique.mockReset().mockResolvedValue(record);
    update.mockReset().mockResolvedValue(record);
    remove.mockReset().mockResolvedValue(record);
    headObject.mockReset().mockResolvedValue({ exists: true, size: 100 });
  });

  it("requires a file id", async () => {
    await expect(post({}, { user: { id: "u1" } })).rejects.toMatchObject({ status: 400 });
  });

  it("rejects a request without ownership", async () => {
    await expect(post({ fileId: record.id })).rejects.toMatchObject({ status: 403 });
    expect(headObject).not.toHaveBeenCalled();
  });

  it("accepts the delete token as proof of ownership", async () => {
    const body = await (await post({ fileId: record.id, deleteToken: token })).json();

    expect(body.success).toBe(true);
    expect(headObject).toHaveBeenCalledWith(record.filePath);
  });

  it("accepts a logged-in user", async () => {
    expect((await post({ fileId: record.id }, { user: { id: "u1" } })).status).toBe(200);
  });

  it("rejects an unknown file", async () => {
    findUnique.mockResolvedValue(null);

    await expect(post({ fileId: "nope" }, { user: { id: "u1" } })).rejects.toMatchObject({
      status: 404,
    });
  });

  it("fails and drops the record when the object never reached storage", async () => {
    headObject.mockResolvedValue({ exists: false, size: null });

    await expect(post({ fileId: record.id }, { user: { id: "u1" } })).rejects.toMatchObject({
      status: 409,
    });
    expect(remove).toHaveBeenCalledWith({ where: { id: record.id } });
    expect(update).not.toHaveBeenCalled();
  });

  it("fails when the stored size does not match the declared size", async () => {
    headObject.mockResolvedValue({ exists: true, size: 99 });

    await expect(post({ fileId: record.id }, { user: { id: "u1" } })).rejects.toMatchObject({
      status: 400,
    });
    expect(remove).toHaveBeenCalled();
    expect(update).not.toHaveBeenCalled();
  });

  it("touches updatedAt only after verification passes", async () => {
    await post({ fileId: record.id, deleteToken: token });

    expect(update).toHaveBeenCalledWith({
      where: { id: record.id },
      data: { updatedAt: expect.any(Date) },
    });
  });

  it("returns 500 for storage errors that are not 'missing'", async () => {
    headObject.mockRejectedValue(new Error("network"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(post({ fileId: record.id }, { user: { id: "u1" } })).rejects.toMatchObject({
      status: 500,
    });
    spy.mockRestore();
  });
});
