<script lang="ts">
  import { Link, Plus, ExternalLink, Copy, Check } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { toast } from "svelte-sonner";

  let { longUrl = $bindable(""), customAlias = $bindable(""), isSubmitting = false, recentLinks = [] } = $props();

  let copiedId = $state<string | null>(null);

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
    <Card.Content class="p-8 pt-4">
      <div class="grid gap-6">
        <div class="flex flex-col gap-2">
          <Label for="url" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Long URL</Label>
          <Input id="url" name="url" type="url" placeholder="https://very-long-link.com/..." bind:value={longUrl} required class="rounded-xl h-10 bg-muted/30 border-border text-xs focus-visible:ring-primary transition-all" />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="alias" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Custom Alias (Optional)</Label>
          <div class="flex items-center gap-0 group">
            <div class="h-10 px-3 flex items-center bg-muted/30 border border-r-0 border-border rounded-l-xl text-muted-foreground text-[10px] font-bold tracking-tight">ozan.my.id/</div>
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

  {#if recentLinks.length > 0}
    <div class="flex items-center gap-2 px-1">
      <Link size={14} class="text-muted-foreground" />
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Recent Links</span>
    </div>

    <div class="grid gap-3">
      {#each recentLinks as link}
        <Card.Root class="border-border bg-card/50 hover:bg-card transition-colors rounded-xl overflow-hidden group">
          <div class="p-4 flex items-center justify-between gap-4">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-primary truncate">ozan.my.id/{link.alias}</span>
                <button type="button" onclick={() => copyToClipboard(`https://ozan.my.id/${link.alias}`, link.id)} class="text-muted-foreground hover:text-foreground transition-colors">
                  {#if copiedId === link.id}
                    <Check class="size-3 text-green-500" />
                  {:else}
                    <Copy class="size-3" />
                  {/if}
                </button>
              </div>
              <span class="text-[10px] text-muted-foreground truncate italic">{link.url}</span>
            </div>
            <a href={`https://ozan.my.id/${link.alias}`} target="_blank" class="size-8 flex items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
              <ExternalLink class="size-3.5" />
            </a>
          </div>
        </Card.Root>
      {/each}
    </div>
  {:else}
    <div class="flex items-center gap-2 px-1">
      <Link size={14} class="text-muted-foreground" />
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Recent Links</span>
    </div>

    <div class="grid gap-4">
      <div class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-muted rounded-2xl bg-muted/10 opacity-60">
        <p class="text-xs font-bold tracking-widest uppercase text-muted-foreground">No recent links found</p>
      </div>
    </div>
  {/if}
</div>
