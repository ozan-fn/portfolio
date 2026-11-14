import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Token proves the caller created this upload, without storing an owner column.
 * Anyone holding the fileId alone still cannot delete the file.
 */
export function createUploadToken(fileId: string, secret: string): string {
  return createHmac("sha256", secret).update(fileId).digest("hex");
}

export function verifyUploadToken(fileId: string, token: string | null | undefined, secret: string): boolean {
  if (!token) return false;
  const expected = Buffer.from(createUploadToken(fileId, secret));
  const actual = Buffer.from(token);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
