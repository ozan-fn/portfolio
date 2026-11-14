import { describe, expect, it } from "vitest";
import { getFileUrl } from "./storage.client";

describe("getFileUrl", () => {
  it("returns empty string for empty input", () => {
    expect(getFileUrl(null)).toBe("");
    expect(getFileUrl(undefined)).toBe("");
    expect(getFileUrl("")).toBe("");
  });

  it("keeps absolute urls as-is", () => {
    const url = "https://example.com/a.png";
    expect(getFileUrl(url)).toBe(url);
  });

  it("builds a url from the public bucket", () => {
    expect(getFileUrl("blog/1.png")).toBe("https://zan68.t3.tigrisfiles.io/blog/1.png");
  });

  it("strips a leading slash from the key", () => {
    expect(getFileUrl("/blog/1.png")).toBe("https://zan68.t3.tigrisfiles.io/blog/1.png");
  });
});
