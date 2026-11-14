import { describe, expect, it } from "vitest";
import { rateLimit } from "./rate-limit";

const window = 60_000;

describe("rateLimit", () => {
  it("allows requests under the limit", () => {
    const key = "allow-1";

    expect(rateLimit(key, 2, window, 0)).toEqual({ ok: true, remaining: 1, retryAfterSeconds: 0 });
    expect(rateLimit(key, 2, window, 1).remaining).toBe(0);
  });

  it("blocks the request after the limit is reached", () => {
    const key = "allow-2";

    rateLimit(key, 2, window, 0);
    rateLimit(key, 2, window, 0);

    const blocked = rateLimit(key, 2, window, 0);
    expect(blocked.ok).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.retryAfterSeconds).toBe(60);
  });

  it("allows again once the window has passed", () => {
    const key = "allow-3";

    rateLimit(key, 1, window, 0);
    expect(rateLimit(key, 1, window, window - 1).ok).toBe(false);
    expect(rateLimit(key, 1, window, window + 1).ok).toBe(true);
  });

  it("keeps separate counters per key", () => {
    rateLimit("ip-a", 1, window, 0);
    rateLimit("ip-b", 1, window, 0);

    expect(rateLimit("ip-a", 1, window, 0).ok).toBe(false);
    expect(rateLimit("ip-b", 1, window, 0).ok).toBe(false);
  });

  it("counts independently of the clock when buckets expire", () => {
    const key = "allow-4";

    rateLimit(key, 1, window, 0);
    rateLimit(key, 1, window, 10 * window);

    expect(rateLimit(key, 1, window, 10 * window).ok).toBe(false);
    expect(rateLimit(key, 1, window, 12 * window).ok).toBe(true);
  });
});
