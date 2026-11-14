const MAX_BASE_LENGTH = 60;
const MAX_EXT_LENGTH = 10;

const splitExtension = (filename: string) => {
  const match = filename.match(/\.([a-z0-9]{1,10})$/i);
  const ext = (match?.[1] ?? "bin").toLowerCase();
  const base = match ? filename.slice(0, -(ext.length + 1)) : filename;
  return { base, ext, hasExt: !!match };
};

/** `photo.jpg` → `photo-4821.jpg` (angka acak sebelum extension). */
export function withRandomSuffix(filename: string, random: () => number = Math.random): string {
  const { base, ext, hasExt } = splitExtension(filename);
  const number = Math.floor(random() * 9000) + 1000;
  return hasExt ? `${base}-${number}.${ext}` : `${filename}-${number}`;
}

/**
 * Key storage yang bisa dibaca manusia dan tetap unik per konten:
 * `tmp/<nama-file>-<8 karakter hash>.<ext>`.
 * Nama sama + isi sama → key sama (aman, PUT idempoten);
 * nama sama + isi beda → key berbeda.
 */
export function buildStorageKey(filename: string, hash: string): string {
  const { base, ext } = splitExtension(filename);

  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, MAX_BASE_LENGTH);

  return `tmp/${slug || "file"}-${hash.slice(0, 8)}.${ext.slice(0, MAX_EXT_LENGTH)}`;
}

/** Dipakai kalau klien lama tidak mengirim hash. */
export function randomStorageKey(ext: string, random: () => string): string {
  return `tmp/temp-${random()}.${ext.slice(0, MAX_EXT_LENGTH) || "bin"}`;
}

export function extensionOf(filename: string): string {
  return splitExtension(filename).ext;
}

export const HASH_PATTERN = /^[a-f0-9]{64}$/;

/** SHA-256 dihitung di browser (Web Crypto) sebelum upload. */
export async function sha256Hex(data: Blob): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", await data.arrayBuffer());
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
