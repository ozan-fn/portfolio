import { describe, expect, it } from "vitest";
import { cn, formatDate, calculateReadTime, generateExcerpt } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("px-2", "font-bold")).toBe("px-2 font-bold");
  });

  it("drops falsy values", () => {
    expect(cn("px-2", false, undefined, null, "mt-1")).toBe("px-2 mt-1");
  });

  it("lets tailwind-merge resolve conflicting utilities", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

describe("formatDate", () => {
  it("formats a Date as short US date", () => {
    expect(formatDate(new Date("2026-01-05T00:00:00Z"))).toBe("Jan 5, 2026");
  });

  it("accepts an ISO string", () => {
    expect(formatDate("2026-11-14T00:00:00Z")).toBe("Nov 14, 2026");
  });
});

describe("calculateReadTime", () => {
  it("rounds up to whole minutes", () => {
    expect(calculateReadTime("word ".repeat(201))).toBe("2 min read");
  });

  it("returns 1 min read for short content", () => {
    expect(calculateReadTime("hello world")).toBe("1 min read");
  });

  it("returns 0 min read for empty content", () => {
    expect(calculateReadTime("   ")).toBe("0 min read");
  });
});

describe("generateExcerpt", () => {
  it("returns content unchanged when within limit", () => {
    expect(generateExcerpt("short text", 50)).toBe("short text");
  });

  it("strips html tags", () => {
    expect(generateExcerpt("<p>hello <b>world</b></p>")).toBe("hello world");
  });

  it("truncates and appends ellipsis", () => {
    expect(generateExcerpt("a".repeat(10), 4)).toBe("aaaa...");
  });
});
