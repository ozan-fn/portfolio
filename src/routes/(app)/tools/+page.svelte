<script lang="ts">
  import { Hammer, Link, Share2, Wrench, Copy, ExternalLink, Plus } from "@lucide/svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import ToolHeader from "$lib/components/portfolio/tools/tool-header.svelte";
  import ToolPlaceholder from "$lib/components/portfolio/tools/tool-placeholder.svelte";
  import UrlShortener from "$lib/components/portfolio/tools/url-shortener.svelte";

  let longUrl = $state("");
  let customAlias = $state("");

  const handleShorten = () => {
    console.log("Shortening:", longUrl, customAlias);
    // Logic later
  };
</script>

<svelte:head>
  <title>Tools | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <ToolHeader title="Tools 🛠️" icon={Wrench}>
    {#snippet description()}
      <p>
        Kumpulan alat bantu ringan untuk produktivitas harian.
        <br />
        <span class="text-xs italic text-primary/80 mt-1 block">"Daripada buka web orang, mending bikin sendiri ye kan?"</span>
      </p>
    {/snippet}
  </ToolHeader>

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
      <ToolPlaceholder title="Text Share" description="Berbagi potongan teks atau catatan singkat dengan mudah." />
    </Tabs.Content>

    <Tabs.Content value="url-shortener" class="mt-0 focus-visible:outline-none">
      <UrlShortener bind:longUrl bind:customAlias onShorten={handleShorten} />
    </Tabs.Content>
  </Tabs.Root>
</div>
