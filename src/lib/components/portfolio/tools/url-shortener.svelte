<script lang="ts">
  import { Link, Plus, ExternalLink, Copy, Check } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { toast } from "svelte-sonner";

  let { longUrl = $bindable(""), customAlias = $bindable(""), isSubmitting = false } = $props();

  let copiedId = $state<string | null>(null);
  let domain = $state("");

  $effect(() => {
    domain = window.location.host + "/";
  });

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      copiedId = id;
      toast.success("Link disalin!");
      setTimeout(() => (copiedId = null), 2000);
    } catch (err) {
      toast.error("Gagal menyalin link");
    }
  };
</script>

<div class="grid gap-6">
  <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
    <Card.Header class="p-8 pb-4">
      <Card.Title class="text-2xl font-bold tracking-tight">Shorten URL</Card.Title>
      <Card.Description class="text-base">Buat link pendek yang mudah diingat untuk URL panjang Anda.</Card.Description>
    </Card.Header>
    <Card.Content class="p-6 pt-2">
      <div class="grid gap-6">
        <div class="flex flex-col gap-2">
          <Label for="url" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Long URL</Label>
          <Input id="url" name="url" type="url" placeholder="https://very-long-link.com/..." bind:value={longUrl} required class="rounded-xl h-10 bg-muted/30 border-border text-xs focus-visible:ring-primary transition-all" />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="alias" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Custom Alias (Optional)</Label>
          <div class="flex items-center gap-0 group">
            <div class="h-10 px-3 flex items-center bg-muted/30 border border-r-0 border-border rounded-l-xl text-muted-foreground text-xs font-medium">{domain || "ozan.my.id/"}</div>
            <Input id="alias" name="alias" type="text" placeholder="my-link" bind:value={customAlias} class="h-10 rounded-l-none rounded-r-xl bg-muted/30 border-border text-xs focus-visible:ring-primary transition-all" />
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting} size="sm" class="w-full h-10 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
          {#if isSubmitting}
            <span class="flex items-center gap-2">
              <svg class="animate-spin h-3.5 w-3.5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Memproses...
            </span>
          {:else}
            <Plus class="size-3.5 mr-2" />
            Shorten Link
          {/if}
        </Button>
      </div>
    </Card.Content>
  </Card.Root>
</div>
