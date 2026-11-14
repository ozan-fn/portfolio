import { beforeEach, describe, expect, it, vi } from "vitest";

const findMany = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { temporaryFile: { findMany } },
}));

const { GET } = await import("./+server");

const call = (query = "", locals: any = { user: { id: "u1" } }) =>
  GET({ url: new URL(`http://localhost/api/upload/history${query}`), locals } as any);

const row = (over: Record<string, unknown> = {}) => ({
  id: "f1",
  filename: "a.txt",
  originalFilename: "a.txt",
  fileSize: 1536,
  mimeType: "text/plain",
  expiryTime: "24h",
  uploadUrl: "tmp/temp-abc.txt",
  expiresAt: new Date(Date.now() + 60_000),
  createdAt: new Date(),
  password: null,
  ...over,
});

describe("GET /api/upload/history", () => {
  beforeEach(() => {
    findMany.mockReset();
    findMany.mockResolvedValue([]);
  });

  it("requires an authenticated user", async () => {
    await expect(call("", {})).rejects.toMatchObject({ status: 401 });
    expect(findMany).not.toHaveBeenCalled();
  });

  it("defaults to limit 10 and offset 0, excluding expired files", async () => {
    await call();

    const args = findMany.mock.calls[0][0];
    expect(args.take).toBe(10);
    expect(args.skip).toBe(0);
    expect(args.orderBy).toEqual({ createdAt: "desc" });
    expect(args.where.expiresAt.gt).toBeInstanceOf(Date);
  });

  it("passes limit and offset from the query string", async () => {
    await call("?limit=3&offset=6");

    expect(findMany.mock.calls[0][0].take).toBe(3);
    expect(findMany.mock.calls[0][0].skip).toBe(6);
  });

  it("falls back to safe values for garbage pagination", async () => {
    await call("?limit=abc&offset=-5");

    expect(findMany.mock.calls[0][0].take).toBe(10);
    expect(findMany.mock.calls[0][0].skip).toBe(0);
  });

  it("caps limit at 100", async () => {
    await call("?limit=9999");

    expect(findMany.mock.calls[0][0].take).toBe(100);
  });

  it("formats file sizes", async () => {
    findMany.mockResolvedValue([
      row({ id: "zero", fileSize: 0 }),
      row({ id: "b", fileSize: 1024 }),
      row({ id: "kb", fileSize: 1536 }),
      row({ id: "mb", fileSize: 1048576 }),
    ]);

    const body = await (await call()).json();

    expect(body.files.map((f: any) => f.fileSizeFormatted)).toEqual([
      "0 Bytes",
      "1 KB",
      "1.5 KB",
      "1 MB",
    ]);
  });

  it("marks password-protected files", async () => {
    findMany.mockResolvedValue([row({ password: "scrypt:aa:bb" }), row({ id: "open" })]);

    const body = await (await call()).json();

    expect(body.files.map((f: any) => f.isProtected)).toEqual([true, false]);
  });

  it("does not expose the stored password", async () => {
    findMany.mockResolvedValue([row({ password: "scrypt:aa:bb" })]);

    const body = await (await call()).json();

    expect(body.files[0].password).toBeUndefined();
  });
});
