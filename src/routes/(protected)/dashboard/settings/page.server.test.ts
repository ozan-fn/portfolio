import { beforeEach, describe, expect, it, vi } from "vitest";

const verifyPassword = vi.fn();
const findFirst = vi.fn();
const update = vi.fn();

vi.mock("$lib/auth", () => ({ auth: { api: { verifyPassword } } }));
vi.mock("$lib/storage", () => ({ uploadImage: vi.fn(), deleteFile: vi.fn() }));
vi.mock("$lib/prisma", () => ({ default: { user: { findFirst, update } } }));

const { actions } = await import("./+page.server");

const user = { id: "u1", email: "lama@example.com" };

const updateEmail = (data: Record<string, string>, locals: any = { user }) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(data)) fd.append(k, v);

  return (actions.updateEmail as any)({
    request: new Request("http://localhost/dashboard/settings?/updateEmail", {
      method: "POST",
      body: fd,
    }),
    locals,
  });
};

const valid = { email: "baru@example.com", currentPassword: "rahasia" };

describe("settings?/updateEmail", () => {
  beforeEach(() => {
    verifyPassword.mockReset().mockResolvedValue({ status: true });
    findFirst.mockReset().mockResolvedValue(null);
    update.mockReset().mockResolvedValue({ ...user, email: "baru@example.com" });
  });

  it("rejects an anonymous request", async () => {
    expect((await updateEmail(valid, {})).status).toBe(401);
    expect(update).not.toHaveBeenCalled();
  });

  it("rejects a malformed email", async () => {
    for (const email of ["", "bukan-email", "a@b", "a b@c.com"]) {
      expect((await updateEmail({ ...valid, email })).status).toBe(400);
    }
    expect(update).not.toHaveBeenCalled();
  });

  it("rejects an email that is already in use by this account", async () => {
    expect((await updateEmail({ ...valid, email: "LAMA@example.com" })).status).toBe(400);
    expect(update).not.toHaveBeenCalled();
  });

  it("requires the current password", async () => {
    const res = await updateEmail({ email: "baru@example.com" });

    expect(res.status).toBe(400);
    expect(verifyPassword).not.toHaveBeenCalled();
    expect(update).not.toHaveBeenCalled();
  });

  it("rejects a wrong password without touching the database", async () => {
    verifyPassword.mockRejectedValue(new Error("invalid password"));

    const res = await updateEmail(valid);

    expect(res.status).toBe(400);
    expect(res.data.message).toMatch(/password/i);
    expect(findFirst).not.toHaveBeenCalled();
    expect(update).not.toHaveBeenCalled();
  });

  it("rejects an email owned by another account", async () => {
    findFirst.mockResolvedValue({ id: "u2" });

    const res = await updateEmail(valid);

    expect(res.status).toBe(400);
    expect(findFirst.mock.calls[0][0].where).toEqual({
      email: "baru@example.com",
      NOT: { id: "u1" },
    });
    expect(update).not.toHaveBeenCalled();
  });

  it("normalizes the email and updates the user", async () => {
    const res = await updateEmail({ ...valid, email: "  Baru@Example.COM " });

    expect(res).toEqual({ success: true, message: "Email berhasil diganti!" });
    expect(verifyPassword).toHaveBeenCalledWith({
      body: { password: "rahasia" },
      headers: expect.any(Headers),
    });
    expect(update).toHaveBeenCalledWith({
      where: { id: "u1" },
      data: { email: "baru@example.com", emailVerified: false },
    });
  });

  it("returns 500 when the database fails", async () => {
    update.mockRejectedValue(new Error("db down"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect((await updateEmail(valid)).status).toBe(500);
    spy.mockRestore();
  });
});
