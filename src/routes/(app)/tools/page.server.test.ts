import { beforeEach, describe, expect, it, vi } from "vitest";

const findUnique = vi.fn();
const create = vi.fn();
const findMany = vi.fn();
const upsert = vi.fn();
const textShareFindUnique = vi.fn();
const updateMany = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: {
    shortLink: { findUnique, create, findMany },
    textShare: { upsert, findUnique: textShareFindUnique, updateMany },
  },
}));

const { actions, load } = await import("./+page.server");

const form = (data: Record<string, string>) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(data)) fd.append(k, v);
  return fd;
};

const shorten = (data: Record<string, string>) =>
  (actions.shorten as any)({
    request: new Request("http://localhost/tools", { method: "POST", body: form(data) }),
  });

const share = (data: Record<string, string>, locals: any = { user: { id: "u1" } }) =>
  (actions.share as any)({
    request: new Request("http://localhost/tools", { method: "POST", body: form(data) }),
    locals,
  });

describe("tools/shorten", () => {
  beforeEach(() => {
    findUnique.mockReset().mockResolvedValue(null);
    create.mockReset().mockImplementation(async ({ data }: any) => data);
  });

  it("rejects a missing url", async () => {
    const res = await shorten({});

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects a malformed url", async () => {
    const res = await shorten({ url: "not a url" });

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects a link to the same hostname", async () => {
    const res = await shorten({ url: "http://localhost/some/page" });

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects an alias that already exists", async () => {
    findUnique.mockResolvedValue({ id: "x", alias: "abc" });

    const res = await shorten({ url: "https://example.com", alias: "abc" });

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects an alias with unsafe characters", async () => {
    const res = await shorten({ url: "https://example.com", alias: "a/b" });

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects an alias longer than 50 characters", async () => {
    const res = await shorten({ url: "https://example.com", alias: "a".repeat(51) });

    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("rejects an alias that collides with an app route", async () => {
    for (const alias of ["dashboard", "API", "tools"]) {
      const res = await shorten({ url: "https://example.com", alias });
      expect(res.status).toBe(400);
    }
    expect(create).not.toHaveBeenCalled();
  });

  it("trims and keeps a custom alias", async () => {
    const res = await shorten({ url: "https://example.com", alias: "  promo  " });

    expect(res).toEqual({ success: true, newLink: { url: "https://example.com", alias: "promo" } });
    expect(findUnique).toHaveBeenCalledWith({ where: { alias: "promo" } });
  });

  it("generates a 6 character slug when no alias is given", async () => {
    const res = await shorten({ url: "https://example.com" });

    expect(res.success).toBe(true);
    expect(res.newLink.alias).toHaveLength(6);
    expect(findUnique).not.toHaveBeenCalled();
  });

  it("returns 500 when the database write fails", async () => {
    create.mockRejectedValue(new Error("db down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const res = await shorten({ url: "https://example.com" });

    expect(res.status).toBe(500);
    spy.mockRestore();
  });
});

describe("tools/share", () => {
  beforeEach(() => {
    upsert.mockReset().mockResolvedValue({ id: "singleton", content: "hi" });
  });

  it("rejects a missing content field", async () => {
    const res = await share({});

    expect(res.status).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("rejects content over the size limit", async () => {
    const res = await share({ content: "x".repeat(50_001) });

    expect(res.status).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("normalizes CRLF before saving", async () => {
    await share({ content: "a\r\nb" });

    expect(upsert.mock.calls[0][0].update).toEqual({ content: "a\nb" });
  });

  it("saves the content through the singleton record", async () => {
    const res = await share({ content: "hello" });

    expect(res).toEqual({ success: true });
    expect(upsert).toHaveBeenCalledWith({
      where: { id: "singleton" },
      update: { content: "hello" },
      create: { id: "singleton", content: "hello" },
    });
  });

  it("lets anonymous visitors write (public buffer)", async () => {
    const res = await share({ content: "hello" }, {});

    expect(res).toEqual({ success: true });
    expect(upsert).toHaveBeenCalledOnce();
  });

  it("compare-and-swaps against the base content the author saw", async () => {
    updateMany.mockResolvedValue({ count: 1 });

    const res = await share({ content: "new", base: "old" });

    expect(res).toEqual({ success: true });
    expect(updateMany).toHaveBeenCalledWith({
      where: { id: "singleton", content: "old" },
      data: { content: "new" },
    });
  });

  it("returns 409 when the stored text moved on", async () => {
    updateMany.mockResolvedValue({ count: 0 });
    textShareFindUnique.mockResolvedValue({ content: "someone else" });

    const res = await share({ content: "mine", base: "old" });

    expect(res.status).toBe(409);
  });

  it("returns 500 when the database write fails", async () => {
    upsert.mockRejectedValue(new Error("db down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const res = await share({ content: "hello" });

    expect(res.status).toBe(500);
    spy.mockRestore();
  });
});

describe("tools/load text share room", () => {
  const loadPage = (locals: any) =>
    (load as any)({
      cookies: { get: () => "true", set: vi.fn() },
      isDataRequest: true,
      locals,
    });

  beforeEach(() => {
    findMany.mockReset().mockResolvedValue([]);
    textShareFindUnique.mockReset().mockResolvedValue({ content: "shared" });
  });

  it("gives every visitor the collaboration room", async () => {
    const guest = await loadPage({});
    const owner = await loadPage({ user: { id: "u1" } });

    expect(guest.room).toEqual(expect.any(String));
    expect(owner.room).toBe(guest.room);
  });

  it("keeps the text readable for guests", async () => {
    const guest = await loadPage({});

    expect(guest.textShare).toBe("shared");
  });
});
