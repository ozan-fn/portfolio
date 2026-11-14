import prisma from "$lib/prisma";

const SINGLETON_ID = "singleton";

export const MAX_TEXT_SHARE_LENGTH = 50_000;

export type ContentValidation =
  | { ok: true; content: string }
  | { ok: false; message: string };

/** Validate at the trust boundary and normalize line endings. */
export function validateTextShareContent(input: unknown): ContentValidation {
  if (typeof input !== "string") return { ok: false, message: "Content is required" };

  const content = input.replace(/\r\n/g, "\n");
  if (content.length > MAX_TEXT_SHARE_LENGTH) {
    return { ok: false, message: `Content maksimal ${MAX_TEXT_SHARE_LENGTH} karakter` };
  }

  return { ok: true, content };
}

const isUniqueViolation = (err: unknown) => (err as { code?: string } | null)?.code === "P2002";

// Prisma's upsert is read-then-write, so two concurrent callers can both try to
// create the singleton and one gets P2002. One retry turns it into an update.
// Only valid for this singleton row: do not reuse for other upserts, where a
// P2002 can mean a genuine conflict rather than a harmless create race.
async function withSingletonUpsertRetry<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (!isUniqueViolation(err)) throw err;
    return await fn();
  }
}

export type SaveResult = "saved" | "conflict";

/**
 * Save the shared buffer.
 *
 * With `baseContent` the write is a compare-and-swap: it only lands while the
 * stored text is still what the author started from, so a client that typed
 * while disconnected cannot silently overwrite newer text. Pass undefined only
 * when there is no base to compare against (first write).
 */
export async function saveTextShare(
  content: string,
  baseContent?: string | null,
): Promise<SaveResult> {
  if (baseContent == null) {
    await withSingletonUpsertRetry(() =>
      prisma.textShare.upsert({
        where: { id: SINGLETON_ID },
        update: { content },
        create: { id: SINGLETON_ID, content },
      }),
    );
    return "saved";
  }

  const { count } = await prisma.textShare.updateMany({
    where: { id: SINGLETON_ID, content: baseContent },
    data: { content },
  });
  if (count === 1) return "saved";

  const current = await prisma.textShare.findUnique({ where: { id: SINGLETON_ID } });
  if (!current) {
    await withSingletonUpsertRetry(() =>
      prisma.textShare.upsert({
        where: { id: SINGLETON_ID },
        update: { content },
        create: { id: SINGLETON_ID, content },
      }),
    );
    return "saved";
  }

  // Sudah sama isinya (mis. dua tab mengirim teks identik) bukan konflik.
  return current.content === content ? "saved" : "conflict";
}

/** `countView` false skips the counter so prefetch/data requests don't inflate it. */
export function loadTextShare(countView: boolean) {
  if (!countView) return prisma.textShare.findUnique({ where: { id: SINGLETON_ID } });

  return withSingletonUpsertRetry(() =>
    prisma.textShare.upsert({
      where: { id: SINGLETON_ID },
      update: { views: { increment: 1 } }, // atomic, aman untuk request paralel
      create: { id: SINGLETON_ID, content: "", views: 1 },
    }),
  );
}
