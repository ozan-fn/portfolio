import { describe, expect, it } from "vitest";
import {
  buildStorageKey,
  extensionOf,
  HASH_PATTERN,
  randomStorageKey,
  sha256Hex,
  withRandomSuffix,
} from "./upload-file";

const hash = "a".repeat(64);

describe("buildStorageKey", () => {
  it("uses the uploaded name plus a short hash, not a random name", () => {
    expect(buildStorageKey("Foto Liburan.JPG", hash)).toBe("tmp/foto-liburan-aaaaaaaa.jpg");
  });

  it("keeps the same key for the same name and content", () => {
    expect(buildStorageKey("a.txt", hash)).toBe(buildStorageKey("a.txt", hash));
  });

  it("gives a different key when the content differs", () => {
    expect(buildStorageKey("a.txt", hash)).not.toBe(buildStorageKey("a.txt", "b".repeat(64)));
  });

  it("strips path traversal and unsafe characters", () => {
    expect(buildStorageKey("../../etc/passwd", hash)).toBe("tmp/etc-passwd-aaaaaaaa.bin");
  });

  it("falls back to a placeholder base for non-latin names", () => {
    expect(buildStorageKey("测试.png", hash)).toBe("tmp/file-aaaaaaaa.png");
  });

  it("caps a very long base name", () => {
    const key = buildStorageKey(`${"x".repeat(200)}.pdf`, hash);

    expect(key).toBe(`tmp/${"x".repeat(60)}-aaaaaaaa.pdf`);
    expect(key.length).toBeLessThan(80);
  });
});

describe("withRandomSuffix", () => {
  it("adds a number before the extension", () => {
    expect(withRandomSuffix("photo.jpg", () => 0.4821)).toBe("photo-5338.jpg");
  });

  it("appends at the end when there is no extension", () => {
    expect(withRandomSuffix("README", () => 0)).toBe("README-1000");
  });

  it("keeps the extension intact", () => {
    expect(withRandomSuffix("archive.tar.gz", () => 0.5)).toBe("archive.tar-5500.gz");
  });
});

describe("randomStorageKey", () => {
  it("builds a fallback key with the given extension", () => {
    expect(randomStorageKey("png", () => "deadbeef")).toBe("tmp/temp-deadbeef.png");
  });
});

describe("extensionOf", () => {
  it("reads the extension lowercased", () => {
    expect(extensionOf("A.PNG")).toBe("png");
  });

  it("falls back to bin", () => {
    expect(extensionOf("noextension")).toBe("bin");
  });
});

describe("HASH_PATTERN", () => {
  it("accepts a 64 char lowercase hex digest", () => {
    expect(HASH_PATTERN.test(hash)).toBe(true);
  });

  it("rejects anything else", () => {
    expect(HASH_PATTERN.test("abc")).toBe(false);
    expect(HASH_PATTERN.test("A".repeat(64))).toBe(false);
  });
});

describe("sha256Hex", () => {
  it("matches the known SHA-256 of 'abc'", async () => {
    const digest = await sha256Hex(new Blob(["abc"]));

    expect(digest).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  });

  it("is stable for the same content and different for other content", async () => {
    expect(await sha256Hex(new Blob(["hello"]))).toBe(await sha256Hex(new Blob(["hello"])));
    expect(await sha256Hex(new Blob(["hello"]))).not.toBe(await sha256Hex(new Blob(["hellp"])));
  });
});
