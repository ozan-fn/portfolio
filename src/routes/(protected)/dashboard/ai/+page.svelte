<script lang="ts">
  import type { PageData } from "./$types";
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { enhance } from "$app/forms";
  import { toast } from "svelte-sonner";
  import { Loader2, Sparkles } from "@lucide/svelte";

  let { data, form }: { data: PageData; form: any } = $props();

  let isLoading = $state(false);

  $effect(() => {
    if (form?.success) toast.success("Pengaturan AI disimpan");
    else if (form?.message) toast.error(form.message);
  });
</script>

<CrudHeader
  title="AI Settings"
  description="Endpoint OpenAI-compatible yang dipakai untuk mengisi konten otomatis."
  backUrl="/dashboard"
/>

<div class="p-4 md:p-6">
  <form
    method="POST"
    action="?/save"
    use:enhance={() => {
      isLoading = true;
      return async ({ update }) => {
        isLoading = false;
        await update({ reset: false });
      };
    }}
    class="max-w-xl flex flex-col gap-5 rounded-2xl border bg-card p-6"
  >
    <div class="grid gap-2">
      <Label for="baseUrl">Base URL</Label>
      <Input
        id="baseUrl"
        name="baseUrl"
        value={data.baseUrl}
        placeholder="https://api.openai.com/v1"
        required
      />
      <p class="text-xs text-muted-foreground">
        Path <code>/chat/completions</code> ditambahkan otomatis.
      </p>
    </div>

    <div class="grid gap-2">
      <Label for="model">Model</Label>
      <Input id="model" name="model" value={data.model} placeholder="gpt-4o-mini" required />
    </div>

    <div class="grid gap-2">
      <Label for="apiKey">API Key</Label>
      <Input
        id="apiKey"
        name="apiKey"
        type="password"
        autocomplete="off"
        placeholder={data.hasKey ? "Tersimpan — kosongkan untuk mempertahankan" : "sk-..."}
      />
      <p class="text-xs text-muted-foreground">
        Disimpan di database dan tidak pernah dikirim balik ke browser.
      </p>
    </div>

    <div class="flex items-center gap-3 pt-2">
      <Button type="submit" disabled={isLoading} class="gap-2">
        {#if isLoading}
          <Loader2 size={16} class="animate-spin" />
          Menyimpan...
        {:else}
          <Sparkles size={16} />
          Simpan
        {/if}
      </Button>
      {#if data.baseUrl && data.hasKey}
        <span class="text-xs text-muted-foreground">Siap dipakai di form blog.</span>
      {/if}
    </div>
  </form>
</div>
