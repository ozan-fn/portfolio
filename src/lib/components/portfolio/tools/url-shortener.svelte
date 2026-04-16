<script lang="ts">
  import { Link, Plus } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  let { longUrl = $bindable(""), customAlias = $bindable(""), onShorten } = $props();
</script>

<div class="grid gap-6">
  <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
    <Card.Header class="p-8 pb-4">
      <Card.Title class="text-2xl font-bold tracking-tight">Shorten URL</Card.Title>
      <Card.Description class="text-base">Buat link pendek yang mudah diingat untuk URL panjang Anda.</Card.Description>
    </Card.Header>
    <Card.Content class="p-8 pt-4">
      <div class="grid gap-6">
        <div class="space-y-2">
          <Label for="url" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Long URL</Label>
          <Input id="url" type="url" placeholder="https://very-long-link.com/..." bind:value={longUrl} class="rounded-xl h-10" />
        </div>
        <div class="space-y-2">
          <Label for="alias" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Custom Alias (Optional)</Label>
          <div class="flex items-center gap-0 group">
            <div class="h-10 px-3 flex items-center bg-muted/30 border border-r-0 border-border rounded-l-xl text-muted-foreground text-[10px] font-bold tracking-tight">ozan.my.id/</div>
            <Input id="alias" type="text" placeholder="my-link" bind:value={customAlias} class="h-10 rounded-l-none rounded-r-xl bg-muted/30 border-border text-xs focus-visible:ring-primary transition-all" />
          </div>
        </div>
        <Button onclick={onShorten} size="sm" class="w-full h-10 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
          <Plus class="size-3.5 mr-2" />
          Shorten Link
        </Button>
      </div>
    </Card.Content>
  </Card.Root>

  <div class="flex items-center gap-2 px-1">
    <Link size={14} class="text-muted-foreground" />
    <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Recent Links</span>
  </div>

  <div class="grid gap-4">
    <div class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-muted rounded-2xl bg-muted/10 opacity-60">
      <p class="text-xs font-bold tracking-widest uppercase text-muted-foreground">No recent links found</p>
    </div>
  </div>
</div>
