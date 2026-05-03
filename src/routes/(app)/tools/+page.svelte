<script lang="ts">
  import { Hammer, Link, Share2, Wrench, Copy, ExternalLink, Plus, Upload } from "@lucide/svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import ToolHeader from "$lib/components/portfolio/tools/tool-header.svelte";
  import ToolPlaceholder from "$lib/components/portfolio/tools/tool-placeholder.svelte";
  import UrlShortener from "$lib/components/portfolio/tools/url-shortener.svelte";
  import TextShare from "$lib/components/portfolio/tools/text-share.svelte";
  import { enhance } from "$app/forms";
  import { toast } from "svelte-sonner";

  let { data, form } = $props();
  let longUrl = $state("");
  let customAlias = $state("");
  let textContent = $state("");
  let isSubmitting = $state(false);
  let lastGeneratedAlias = $state("");
  let isInitialized = $state(false);

  $effect.pre(() => {
    if (!isInitialized && data.textShare) {
      textContent = data.textShare;
      isInitialized = true;
    }
  });

  $effect(() => {
    if (form?.success && form?.newLink) {
      const shortUrl = `${window.location.origin}/${form.newLink.alias}`;
      lastGeneratedAlias = form.newLink.alias;

      toast.success("Link berhasil diperpendek!", {
        description: shortUrl,
        action: {
          label: "Copy",
          onClick: () => {
            navigator.clipboard.writeText(shortUrl);
            toast.success("Link disalin!");
          },
        },
      });
      longUrl = "";
      customAlias = "";
    } else if (form?.message) {
      toast.error(form.message);
    }
  });
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
      <Tabs.List class="grid grid-cols-3 w-fit h-11 bg-muted/50 p-1 rounded-xl">
        <Tabs.Trigger value="text-share" class="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all text-xs font-bold uppercase tracking-wider">
          <Share2 class="size-3.5 mr-2" />
          Text Share
        </Tabs.Trigger>
        <Tabs.Trigger value="url-shortener" class="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all text-xs font-bold uppercase tracking-wider">
          <Link class="size-3.5 mr-2" />
          URL Shortener
        </Tabs.Trigger>
        <Tabs.Trigger value="file-upload" class="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all text-xs font-bold uppercase tracking-wider">
          <Upload class="size-3.5 mr-2" />
          File Upload
        </Tabs.Trigger>
      </Tabs.List>
    </div>

    <Tabs.Content value="text-share" class="mt-0 focus-visible:outline-none">
      <form
        id="text-share-form"
        method="POST"
        action="?/share"
        use:enhance={() => {
          isSubmitting = true;
          return async ({ result, update }) => {
            isSubmitting = false;
            await update({ reset: false });
          };
        }}
      >
        <TextShare bind:content={textContent} />
      </form>
    </Tabs.Content>

    <Tabs.Content value="url-shortener" class="mt-0 focus-visible:outline-none">
      <form
        method="POST"
        action="?/shorten"
        use:enhance={() => {
          isSubmitting = true;
          return async ({ update }) => {
            isSubmitting = false;
            await update();
          };
        }}
      >
        <UrlShortener bind:longUrl bind:customAlias {isSubmitting} bind:lastGeneratedAlias />
      </form>
    </Tabs.Content>

    <Tabs.Content value="file-upload" class="mt-0 focus-visible:outline-none">
      <ToolPlaceholder title="File Temporary Upload" description="Upload file sementara untuk dibagikan. File akan otomatis terhapus setelah waktu tertentu." />
    </Tabs.Content>
  </Tabs.Root>
</div>
