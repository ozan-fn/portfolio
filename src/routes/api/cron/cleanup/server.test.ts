import { beforeEach, describe, expect, it, vi } from "vitest";

const findMany = vi.fn();
const deleteMany = vi.fn();
const deleteFile = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { temporaryFile: { findMany, deleteMany } },
}));

vi.mock("$lib/storage", () => ({ deleteFile }));

const { GET, POST } = await import("./+server");

let ipCounter = 0;
const call = (handler: any = GET, ip = `10.0.0.${++ipCounter}`) =>
  handler({ getClientAddress: () => ip } as any);

const row = (id: string, filePath = `tmp/${id}.txt`) => ({ id, filePath });

/** First query = expired rows, second = rows still using those paths. */
const setData = (expired: unknown[], stillUsed: unknown[] = []) => {
  findMany.mockImplementation(async (args: any) =>
    args.where.expiresAt.gt ? stillUsed : expired,
  );
};

describe("GET /api/cron/cleanup", () => {
  beforeEach(() => {
    findMany.mockReset();
    deleteMany.mockReset().mockResolvedValue({ count: 0 });
    deleteFile.mockReset().mockResolvedValue(true);
    setData([]);
  });

  it("does nothing when nothing has expired", async () => {
    const body = await (await call()).json();

    expect(body).toEqual({ success: true, checked: 0, deleted: 0, failed: 0, hasMore: false });
    expect(deleteMany).not.toHaveBeenCalled();
  });

  it("only looks at expired rows and caps the batch", async () => {
    await call();

    const args = findMany.mock.calls[0][0];
    expect(args.where.expiresAt.lt).toBeInstanceOf(Date);
    expect(args.take).toBe(200);
  });

  it("deletes the storage object before the database row", async () => {
    setData([row("a"), row("b")]);

    const body = await (await call()).json();

    expect(deleteFile).toHaveBeenCalledWith("tmp/a.txt");
    expect(deleteFile).toHaveBeenCalledWith("tmp/b.txt");
    expect(deleteMany).toHaveBeenCalledWith({ where: { id: { in: ["a", "b"] } } });
    expect(body).toMatchObject({ checked: 2, deleted: 2, failed: 0 });
  });

  it("keeps rows whose storage delete failed", async () => {
    setData([row("a"), row("b")]);
    deleteFile.mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    const body = await (await call()).json();

    expect(deleteMany).toHaveBeenCalledWith({ where: { id: { in: ["a"] } } });
    expect(body).toMatchObject({ checked: 2, deleted: 1, failed: 1 });
  });

  it("keeps the shared object when a live record still uses it", async () => {
    setData([row("old", "tmp/shared.png")], [{ filePath: "tmp/shared.png" }]);

    const body = await (await call()).json();

    expect(deleteFile).not.toHaveBeenCalled();
    expect(deleteMany).toHaveBeenCalledWith({ where: { id: { in: ["old"] } } });
    expect(body).toMatchObject({ deleted: 1, failed: 0 });
  });

  it("deletes a shared object once for several expired records", async () => {
    setData([row("a", "tmp/same.png"), row("b", "tmp/same.png")]);

    const body = await (await call()).json();

    expect(deleteFile).toHaveBeenCalledTimes(1);
    expect(deleteMany).toHaveBeenCalledWith({ where: { id: { in: ["a", "b"] } } });
    expect(body).toMatchObject({ deleted: 2 });
  });

  it("signals hasMore when the batch is full", async () => {
    setData(Array.from({ length: 200 }, (_, i) => row(`f${i}`)));

    const body = await (await call()).json();

    expect(body.hasMore).toBe(true);
  });

  it("accepts POST too (for cron services that only POST)", async () => {
    expect((await call(POST)).status).toBe(200);
  });

  it("rate limits per IP so it cannot be abused", async () => {
    const ip = "203.0.113.9";

    for (let i = 0; i < 30; i += 1) {
      expect((await call(GET, ip)).status).toBe(200);
    }

    const blocked = await call(GET, ip);
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get("Retry-After")).toBeTruthy();
    expect((await call(GET, "203.0.113.10")).status).toBe(200);
  });

  it("returns 500 when the database fails", async () => {
    findMany.mockRejectedValue(new Error("db down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await expect(call()).rejects.toMatchObject({ status: 500 });
    spy.mockRestore();
  });
});
