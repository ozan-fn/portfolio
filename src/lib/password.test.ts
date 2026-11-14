import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword } from "./password";

describe("hashPassword", () => {
  it("never stores the plaintext", () => {
    const stored = hashPassword("secret123");

    expect(stored).not.toContain("secret123");
    expect(stored.startsWith("scrypt:")).toBe(true);
  });

  it("produces a different hash per call (random salt)", () => {
    expect(hashPassword("secret123")).not.toBe(hashPassword("secret123"));
  });
});

describe("verifyPassword", () => {
  it("accepts the correct password", () => {
    expect(verifyPassword("secret123", hashPassword("secret123"))).toBe(true);
  });

  it("rejects a wrong password", () => {
    expect(verifyPassword("wrong", hashPassword("secret123"))).toBe(false);
  });

  it("rejects an empty password against a hashed record", () => {
    expect(verifyPassword("", hashPassword("secret123"))).toBe(false);
  });

  it("still accepts legacy plaintext records", () => {
    expect(verifyPassword("secret123", "secret123")).toBe(true);
    expect(verifyPassword("nope", "secret123")).toBe(false);
  });

  it("rejects a malformed stored value", () => {
    expect(verifyPassword("x", "scrypt::")).toBe(false);
  });
});
