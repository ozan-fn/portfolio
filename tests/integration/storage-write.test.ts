import { afterAll, describe, expect, it } from "vitest";
import { deleteFile, getPresignedUploadUrl, headObject } from "$lib/storage";
import { getFileUrl } from "$lib/storage.client";

// Satu-satunya integration test yang menulis ke Tigris. Semua objek yang
// dibuat dihapus di finally, jadi tidak ada sisa data.
const enabled = !!process.env.INTEGRATION && !!process.env.AWS_ACCESS_KEY_ID;

const created: string[] = [];

afterAll(async () => {
  for (const key of created) await deleteFile(key);
});

const newKey = () => `tmp/it-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.txt`;

describe.skipIf(!enabled)("tigris write lifecycle", () => {
  it("uploads through a presigned url, reads it publicly, then deletes it", async () => {
    const key = newKey();
    created.push(key);

    const url = await getPresignedUploadUrl(key, "text/plain");
    const put = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "text/plain" },
      body: "integration",
    });

    expect(put.status).toBe(200);

    const head = await headObject(key);
    expect(head.exists).toBe(true);
    expect(head.size).toBe("integration".length);

    const published = await fetch(getFileUrl(key));
    expect(published.status).toBe(200);
    expect(await published.text()).toBe("integration");

    expect(await deleteFile(key)).toBe(true);

    const after = await headObject(key);
    expect(after.exists).toBe(false);
  });

  it("treats deleting a missing key as success (S3 idempotent)", async () => {
    const result = await deleteFile(
      `tmp/it-missing-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.txt`,
    );

    expect(result).toBe(true);
  });
});
