import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const PREFIX = "scrypt";
const KEY_LEN = 64;

/** Hash a plaintext password. Format: `scrypt:<salt>:<hex>`. */
export function hashPassword(plain: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(plain, salt, KEY_LEN).toString("hex");
  return `${PREFIX}:${salt}:${hash}`;
}

/**
 * Verify a password against a stored value.
 * Records created before hashing existed hold plaintext, so those still compare.
 */
export function verifyPassword(plain: string, stored: string): boolean {
  const [prefix, salt, hash] = stored.split(":");

  if (prefix !== PREFIX || !salt || !hash) {
    return safeEqual(plain, stored);
  }

  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(plain, salt, expected.length);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}
