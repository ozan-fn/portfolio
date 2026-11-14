import { beforeEach, describe, expect, it, vi } from "vitest";

const findUnique = vi.fn();
const upsert = vi.fn();
const updateMany = vi.fn();

vi.mock("$lib/prisma", () => ({
  default: { textShare: { findUnique, upsert, updateMany } },
}));

const { loadTextShare, saveTextShare, validateTextShareContent, MAX_TEXT_SHARE_LENGTH } = await import(
  "./text-share"
);

const uniqueViolation = () => Object.assign(new Error("Unique constraint failed"), { code: "P2002" });

describe("validateTextShareContent", () => {
  it("accepts a plain string", () => {
    expect(validateTextShareContent("hello")).toEqual({ ok: true, content: "hello" });
  });

  it("accepts an empty string (clearing the buffer)", () => {
    expect(validateTextShareContent("")).toEqual({ ok: true, content: "" });
  });

  it("normalizes CRLF line endings", () => {
    expect(validateTextShareContent("a\r\nb")).toEqual({ ok: true, content: "a\nb" });
  });

  it("rejects a non-string payload", () => {
    expect(validateTextShareContent(null).ok).toBe(false);
    expect(validateTextShareContent(undefined).ok).toBe(false);
    expect(validateTextShareContent(123).ok).toBe(false);
  });

  it("rejects content over the limit", () => {
    const res = validateTextShareContent("x".repeat(MAX_TEXT_SHARE_LENGTH + 1));

    expect(res.ok).toBe(false);
  });

  it("accepts content exactly at the limit", () => {
    expect(validateTextShareContent("x".repeat(MAX_TEXT_SHARE_LENGTH)).ok).toBe(true);
  });
});

describe("saveTextShare", () => {
  beforeEach(() => {
    upsert.mockReset();
  });

  it("writes through the singleton record", async () => {
    upsert.mockResolvedValue({ id: "singleton", content: "hi" });

    await saveTextShare("hi");

    expect(upsert).toHaveBeenCalledWith({
      where: { id: "singleton" },
      update: { content: "hi" },
      create: { id: "singleton", content: "hi" },
    });
  });

  it("retries once when two requests create the record concurrently", async () => {
    upsert.mockRejectedValueOnce(uniqueViolation()).mockResolvedValueOnce({ content: "hi" });

    await expect(saveTextShare("hi")).resolves.toBe("saved");
    expect(upsert).toHaveBeenCalledTimes(2);
  });

  it("propagates other database errors", async () => {
    upsert.mockRejectedValue(new Error("db down"));

    await expect(saveTextShare("hi")).rejects.toThrow("db down");
    expect(upsert).toHaveBeenCalledTimes(1);
  });

  it("does not retry forever when the retry also fails", async () => {
    upsert.mockRejectedValue(uniqueViolation());

    await expect(saveTextShare("hi")).rejects.toMatchObject({ code: "P2002" });
    expect(upsert).toHaveBeenCalledTimes(2);
  });
});

describe("saveTextShare with a base (compare-and-swap)", () => {
  beforeEach(() => {
    upsert.mockReset();
    findUnique.mockReset();
    updateMany.mockReset();
  });

  it("updates only while the stored text still matches the base", async () => {
    updateMany.mockResolvedValue({ count: 1 });

    await expect(saveTextShare("new", "old")).resolves.toBe("saved");
    expect(updateMany).toHaveBeenCalledWith({
      where: { id: "singleton", content: "old" },
      data: { content: "new" },
    });
    expect(upsert).not.toHaveBeenCalled();
  });

  it("reports a conflict when someone else moved the text on", async () => {
    updateMany.mockResolvedValue({ count: 0 });
    findUnique.mockResolvedValue({ content: "someone else" });

    await expect(saveTextShare("stale copy", "old")).resolves.toBe("conflict");
    expect(upsert).not.toHaveBeenCalled();
  });

  it("treats an identical write as saved", async () => {
    updateMany.mockResolvedValue({ count: 0 });
    findUnique.mockResolvedValue({ content: "same" });

    await expect(saveTextShare("same", "old")).resolves.toBe("saved");
  });

  it("creates the row when it does not exist yet", async () => {
    updateMany.mockResolvedValue({ count: 0 });
    findUnique.mockResolvedValue(null);
    upsert.mockResolvedValue({ content: "first" });

    await expect(saveTextShare("first", "")).resolves.toBe("saved");
    expect(upsert).toHaveBeenCalledTimes(1);
  });

  it("does not retry a failed compare-and-swap", async () => {
    updateMany.mockRejectedValue(uniqueViolation());

    await expect(saveTextShare("new", "old")).rejects.toMatchObject({ code: "P2002" });
    expect(updateMany).toHaveBeenCalledTimes(1);
  });
});

describe("loadTextShare", () => {
  beforeEach(() => {
    findUnique.mockReset();
    upsert.mockReset();
  });

  it("only reads when the view should not be counted", async () => {
    findUnique.mockResolvedValue({ content: "saved" });

    const res = await loadTextShare(false);

    expect(res).toEqual({ content: "saved" });
    expect(findUnique).toHaveBeenCalledWith({ where: { id: "singleton" } });
    expect(upsert).not.toHaveBeenCalled();
  });

  it("increments views atomically when counting", async () => {
    upsert.mockResolvedValue({ content: "saved", views: 2 });

    expect((await loadTextShare(true))?.views).toBe(2);
    expect(upsert).toHaveBeenCalledWith({
      where: { id: "singleton" },
      update: { views: { increment: 1 } },
      create: { id: "singleton", content: "", views: 1 },
    });
  });

  it("retries when parallel first-time loads collide", async () => {
    upsert.mockRejectedValueOnce(uniqueViolation()).mockResolvedValueOnce({ views: 1 });

    await expect(loadTextShare(true)).resolves.toEqual({ views: 1 });
    expect(upsert).toHaveBeenCalledTimes(2);
  });
});
