import { describe, expect, it } from "vitest";
import { createUploadToken, verifyUploadToken } from "./upload-token";

const SECRET = "test-secret";

describe("upload token", () => {
  it("is stable for the same file id and secret", () => {
    expect(createUploadToken("file-1", SECRET)).toBe(createUploadToken("file-1", SECRET));
  });

  it("differs per file id", () => {
    expect(createUploadToken("file-1", SECRET)).not.toBe(createUploadToken("file-2", SECRET));
  });

  it("differs per secret", () => {
    expect(createUploadToken("file-1", SECRET)).not.toBe(createUploadToken("file-1", "other"));
  });

  it("verifies its own token", () => {
    expect(verifyUploadToken("file-1", createUploadToken("file-1", SECRET), SECRET)).toBe(true);
  });

  it("rejects a token for another file", () => {
    expect(verifyUploadToken("file-2", createUploadToken("file-1", SECRET), SECRET)).toBe(false);
  });

  it("rejects missing or malformed tokens", () => {
    expect(verifyUploadToken("file-1", null, SECRET)).toBe(false);
    expect(verifyUploadToken("file-1", "", SECRET)).toBe(false);
    expect(verifyUploadToken("file-1", "short", SECRET)).toBe(false);
  });
});
