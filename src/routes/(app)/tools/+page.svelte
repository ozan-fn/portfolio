<script lang="ts">
  import { Hammer, Link, Share2, Wrench, Copy, ExternalLink, Plus } from "@lucide/svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  let longUrl = $state("");
  let customAlias = $state("");
</script>

<svelte:head>
  <title>Tools | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
    <div class="flex items-center gap-2 mb-2">
      <Wrench size={14} class="text-primary" />
      <span class="text-[9px] font-bold tracking-widest uppercase text-primary">Utility</span>
    </div>
    <h3 class="text-2xl font-bold mb-2 tracking-tight text-primary leading-tight">Tools 🛠️</h3>
    <p class="text-muted-foreground text-base leading-relaxed max-w-2xl">
      Kumpulan alat bantu ringan untuk produktivitas harian.
      <br />
      <span class="text-xs italic text-primary/80 mt-1 block">"Daripada buka web orang, mending bikin sendiri ye kan?"</span>
    </p>
  </div>

  <Tabs.Root value="text-share" class="w-full">
    <div class="flex items-center justify-between mb-4 px-0.5">
      <Tabs.List style="max-width: 400px" class="grid grid-cols-2 w-full h-11 bg-muted/50 p-1 rounded-xl">
        <Tabs.Trigger value="text-share" class="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all text-xs font-bold uppercase tracking-wider">
          <Share2 class="size-3.5 mr-2" />
          Text Share
        </Tabs.Trigger>
        <Tabs.Trigger value="url-shortener" class="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all text-xs font-bold uppercase tracking-wider">
          <Link class="size-3.5 mr-2" />
          URL Shortener
        </Tabs.Trigger>
      </Tabs.List>
    </div>

    <Tabs.Content value="text-share" class="mt-0 focus-visible:outline-none">
      <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
        <Card.Header class="p-8 pb-4">
          <Card.Title class="text-2xl font-bold tracking-tight">Text Share</Card.Title>
          <Card.Description class="text-base">Berbagi potongan teks atau catatan singkat dengan mudah.</Card.Description>
        </Card.Header>
        <Card.Content class="p-8 pt-4">
          <div style="min-height: 300px" class="flex flex-col items-center justify-center text-center border-2 border-dashed border-muted rounded-xl bg-muted/20">
            <div class="bg-muted p-4 rounded-full mb-4">
              <Hammer class="size-8 text-muted-foreground" />
            </div>
            <p class="font-bold text-lg mb-1">Coming Soon</p>
            <p style="max-width: 250px" class="text-muted-foreground text-sm">Fitur berbagi teks sedang dalam tahap pengembangan.</p>
          </div>
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="url-shortener" class="mt-0 focus-visible:outline-none">
      <div class="grid gap-6">
        <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
          <Card.Header class="p-8 pb-4">
            <Card.Title class="text-2xl font-bold tracking-tight">Shorten URL</Card.Title>
            <Card.Description class="text-base">Buat link pendek yang mudah diingat untuk URL panjang Anda.</Card.Description>
          </Card.Header>
          <Card.Content class="p-8 pt-4">
            <div class="grid gap-6">
              <div class="grid gap-3">
                <Label for="url" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Long URL</Label>
                <Input id="url" type="url" placeholder="https://very-long-link.com/that/is/hard/to/remember" bind:value={longUrl} class="h-12 px-4 rounded-xl bg-muted/30 border-muted focus:ring-primary/20" />
              </div>
              <div class="grid gap-3">
                <Label for="alias" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Custom Alias (Optional)</Label>
                <div class="flex items-center gap-1 group">
                  <div class="h-12 px-4 flex items-center bg-muted/50 border border-r-0 border-muted rounded-l-xl text-muted-foreground text-sm font-medium">ozan.my.id/</div>
                  <Input id="alias" type="text" placeholder="my-link" bind:value={customAlias} class="h-12 px-4 rounded-l-none rounded-r-xl bg-muted/30 border-muted focus:ring-primary/20" />
                </div>
              </div>
              <Button class="w-full h-12 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                <Plus class="size-4 mr-2" />
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
          <!-- Placeholder untuk list link -->
          <div class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-muted rounded-2xl bg-muted/10 opacity-60">
            <p class="text-xs font-bold tracking-widest uppercase text-muted-foreground">No recent links found</p>
          </div>
        </div>
      </div>
    </Tabs.Content>
  </Tabs.Root>
</div>
