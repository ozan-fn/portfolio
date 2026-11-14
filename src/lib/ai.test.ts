import { afterEach, describe, expect, it, vi } from "vitest";
import { AI_SYSTEM_PROMPT, generateText, validateAiSettings } from "./ai";

const settings = { baseUrl: "https://api.example.com/v1", model: "gpt-test", apiKey: "sk-test" };

const okResponse = (content: unknown) =>
  ({
    ok: true,
    json: async () => ({ choices: [{ message: { content } }] }),
  }) as Response;

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("validateAiSettings", () => {
  it("accepts a valid config and strips trailing slashes", () => {
    const res = validateAiSettings({
      baseUrl: " https://api.openai.com/v1/ ",
      model: " gpt-4o-mini ",
      apiKey: " sk-1 ",
    });

    expect(res).toEqual({
      ok: true,
      value: { baseUrl: "https://api.openai.com/v1", model: "gpt-4o-mini", apiKey: "sk-1" },
    });
  });

  it("omits an empty api key so the stored one can survive", () => {
    const res = validateAiSettings({ baseUrl: "https://x.dev/v1", model: "m", apiKey: "   " });

    expect(res.ok && res.value.apiKey).toBeUndefined();
  });

  it("rejects a missing base url or model", () => {
    expect(validateAiSettings({ baseUrl: "", model: "m" }).ok).toBe(false);
    expect(validateAiSettings({ baseUrl: "https://x.dev", model: "" }).ok).toBe(false);
    expect(validateAiSettings({ baseUrl: null, model: null }).ok).toBe(false);
  });

  it("rejects a malformed or non-http url", () => {
    expect(validateAiSettings({ baseUrl: "not a url", model: "m" }).ok).toBe(false);
    expect(validateAiSettings({ baseUrl: "ftp://x.dev", model: "m" }).ok).toBe(false);
    expect(validateAiSettings({ baseUrl: "javascript:alert(1)", model: "m" }).ok).toBe(false);
  });

  it("rejects an overlong model name", () => {
    expect(validateAiSettings({ baseUrl: "https://x.dev", model: "m".repeat(101) }).ok).toBe(false);
  });
});

describe("generateText", () => {
  it("calls the OpenAI-compatible endpoint with the hardcoded system prompt", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse("  hasil  "));
    vi.stubGlobal("fetch", fetchMock);

    const text = await generateText("tulis tentang svelte", settings);

    expect(text).toBe("hasil");
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.example.com/v1/chat/completions");
    expect(init.method).toBe("POST");
    expect(init.headers.Authorization).toBe("Bearer sk-test");

    const body = JSON.parse(init.body);
    expect(body.model).toBe("gpt-test");
    expect(body.messages[0]).toEqual({ role: "system", content: AI_SYSTEM_PROMPT });
    expect(body.messages[1]).toEqual({ role: "user", content: "tulis tentang svelte" });
  });

  it("tolerates a base url with a trailing slash", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse("ok"));
    vi.stubGlobal("fetch", fetchMock);

    await generateText("x", { ...settings, baseUrl: "https://api.example.com/v1/" });

    expect(fetchMock.mock.calls[0][0]).toBe("https://api.example.com/v1/chat/completions");
  });

  it("throws with the provider status when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 401, text: async () => "invalid key" } as Response),
    );

    await expect(generateText("x", settings)).rejects.toThrow(/401/);
  });

  it("throws when the provider returns no text", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(okResponse("")));

    await expect(generateText("x", settings)).rejects.toThrow(/kosong/);
  });

  it("throws when the provider returns an unexpected shape", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(okResponse(undefined)));

    await expect(generateText("x", settings)).rejects.toThrow(/kosong/);
  });
});
