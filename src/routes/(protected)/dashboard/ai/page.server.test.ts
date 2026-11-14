import { beforeEach, describe, expect, it, vi } from "vitest";

const findUnique = vi.fn();
const upsert = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { aiSetting: { findUnique, upsert } },
}));

const { load, actions } = await import("./+page.server");

const save = (data: Record<string, string>) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(data)) fd.append(k, v);
  return (actions.save as any)({
    request: new Request("http://localhost/dashboard/ai?/save", { method: "POST", body: fd }),
  });
};

const stored = { id: "singleton", baseUrl: "https://api.x.dev/v1", model: "old-model", apiKey: "sk-old" };

describe("GET /dashboard/ai", () => {
  it("never sends the api key to the client", async () => {
    findUnique.mockResolvedValue(stored);

    const data = await (load as any)();

    expect(data).toEqual({ baseUrl: stored.baseUrl, model: stored.model, hasKey: true });
    expect(JSON.stringify(data)).not.toContain("sk-old");
  });

  it("reports an empty state when nothing is stored", async () => {
    findUnique.mockResolvedValue(null);

    expect(await (load as any)()).toEqual({ baseUrl: "", model: "", hasKey: false });
  });
});

describe("dashboard/ai?/save", () => {
  beforeEach(() => {
    findUnique.mockReset().mockResolvedValue(null);
    upsert.mockReset().mockResolvedValue(stored);
  });

  it("rejects an invalid base url", async () => {
    const res = await save({ baseUrl: "nope", model: "m", apiKey: "k" });

    expect(res.status).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("requires an api key the first time", async () => {
    const res = await save({ baseUrl: "https://api.x.dev/v1", model: "m" });

    expect(res.status).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("keeps the stored key when the field is left blank", async () => {
    findUnique.mockResolvedValue(stored);

    const res = await save({ baseUrl: "https://api.x.dev/v1", model: "new-model", apiKey: "" });

    expect(res).toEqual({ success: true });
    expect(upsert.mock.calls[0][0].update).toEqual({
      baseUrl: "https://api.x.dev/v1",
      model: "new-model",
    });
  });

  it("stores a new key when provided", async () => {
    findUnique.mockResolvedValue(stored);

    await save({ baseUrl: "https://api.x.dev/v1", model: "m", apiKey: " sk-new " });

    expect(upsert.mock.calls[0][0].update.apiKey).toBe("sk-new");
  });

  it("creates the singleton row on first save", async () => {
    await save({ baseUrl: "https://api.x.dev/v1/", model: "m", apiKey: "sk-1" });

    expect(upsert.mock.calls[0][0]).toMatchObject({
      where: { id: "singleton" },
      create: { id: "singleton", baseUrl: "https://api.x.dev/v1", model: "m", apiKey: "sk-1" },
    });
  });

  it("returns 500 when the database fails", async () => {
    upsert.mockRejectedValue(new Error("db down"));
    findUnique.mockResolvedValue(stored);
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const res = await save({ baseUrl: "https://api.x.dev/v1", model: "m", apiKey: "k" });

    expect(res.status).toBe(500);
    spy.mockRestore();
  });
});
