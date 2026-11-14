import { describe, expect, it } from "vitest";
import {
  buildStorageKey,
  extensionOf,
  HASH_PATTERN,
  randomStorageKey,
  sha256Hex,
  suffixDigitsFor,
  withNumberSuffix,
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

describe("suffixDigitsFor", () => {
  it("uses one digit for the first duplicates", () => {
    expect(suffixDigitsFor(0)).toBe(1);
    expect(suffixDigitsFor(9)).toBe(1);
  });

  it("uses two digits from 10 duplicates", () => {
    expect(suffixDigitsFor(10)).toBe(2);
    expect(suffixDigitsFor(99)).toBe(2);
  });

  it("uses three digits from 100 duplicates", () => {
    expect(suffixDigitsFor(100)).toBe(3);
    expect(suffixDigitsFor(4321)).toBe(3);
  });
});

describe("withNumberSuffix", () => {
  it("adds a single digit before the extension", () => {
    expect(withNumberSuffix("photo.jpg", 1, () => 0)).toBe("photo-1.jpg");
    expect(withNumberSuffix("photo.jpg", 1, () => 0.999)).toBe("photo-9.jpg");
  });

  it("adds two digits when there are already many duplicates", () => {
    expect(withNumberSuffix("photo.jpg", 2, () => 0)).toBe("photo-10.jpg");
    expect(withNumberSuffix("photo.jpg", 2, () => 0.999)).toBe("photo-99.jpg");
  });

  it("adds three digits when duplicates are plentiful", () => {
    expect(withNumberSuffix("photo.jpg", 3, () => 0)).toBe("photo-100.jpg");
    expect(withNumberSuffix("photo.jpg", 3, () => 0.999)).toBe("photo-999.jpg");
  });

  it("appends at the end when there is no extension", () => {
    expect(withNumberSuffix("README", 1, () => 0)).toBe("README-1");
  });

  it("keeps the extension intact", () => {
    expect(withNumberSuffix("archive.tar.gz", 1, () => 0)).toBe("archive.tar-1.gz");
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
