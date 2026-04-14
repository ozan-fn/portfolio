<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Loader2, Globe, Lock, Trash2, Eye, Image as ImageIcon, X, Search, Plus } from "@lucide/svelte";
  import { calculateReadTime, formatDate } from "$lib/utils";
  import { getFileUrl } from "$lib/storage.client";
  import { badgeVariants } from "$lib/components/ui/badge";
  import { invalidateAll } from "$app/navigation";

  let { data }: { data: PageData } = $props();
  let post = $derived(data.post);

  let isLoading = $state(false);
  let isDeleting = $state(false);
  let isPublished = $state(false);
  let title = $state("");
  let currentContent = $state("");

  // Category management
  let selectedCategoryId = $state<string | null>(null);
  let categorySearch = $state("");
  let showCategoryDropdown = $state(false);
  let isCreatingCategory = $state(false);

  let filteredCategories = $derived(data.categories.filter((c) => c.name.toLowerCase().includes(categorySearch.toLowerCase().trim())));

  function selectCategory(category: { id: string; name: string }) {
    selectedCategoryId = category.id;
    categorySearch = "";
    showCategoryDropdown = false;
  }

  async function createCategory() {
    if (!categorySearch.trim() || isCreatingCategory) return;

    isCreatingCategory = true;
    try {
      const formData = new FormData();
      formData.append("singleName", categorySearch.trim());

      const response = await fetch("/dashboard/categories?/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await invalidateAll();
        // Find the newly created category
        const newCat = data.categories.find((c) => c.name.toLowerCase() === categorySearch.toLowerCase().trim());
        if (newCat) {
          selectCategory(newCat);
        }
      }
    } catch (err) {
      console.error("Failed to create category:", err);
    } finally {
      isCreatingCategory = false;
    }
  }

  // Tag management
  let tagInput = $state("");
  let tags = $state<string[]>([]);

  function addTags(input: string) {
    const newTags = input
      .split(/[\s,]+/)
      .map((t) => t.trim())
      .filter((t) => t !== "" && !tags.includes(t));

    if (newTags.length > 0) {
      tags = [...tags, ...newTags];
    }
  }

  function handleTagKeydown(e: KeyboardEvent) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      addTags(tagInput);
      tagInput = "";
    }
  }

  function handleTagPaste(e: ClipboardEvent) {
    e.preventDefault();
    const pastedText = e.clipboardData?.getData("text") || "";
    addTags(pastedText);
    tagInput = "";
  }

  function removeTag(tagToRemove: string) {
    tags = tags.filter((t) => t !== tagToRemove);
  }

  $effect(() => {
    isPublished = post.published;
    title = post.title;
    currentContent = post.content;
    selectedCategoryId = post.categoryId;

    // Load initial tags safely
    if (post.tags) {
      tags = post.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  });

  let slug = $derived(
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  );

  let readTime = $derived(calculateReadTime(currentContent));

  async function handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    if (!file.type.startsWith("image/")) return;

    // Client-side resize to max 1200px
    const img = new Image();
    img.src = URL.createObjectURL(file);

    await new Promise((resolve) => (img.onload = resolve));

    let width = img.width;
    let height = img.height;
    const maxSize = 1200;

    if (width > maxSize || height > maxSize) {
      if (width > height) {
        height = Math.round((height * maxSize) / width);
        width = maxSize;
      } else {
        width = Math.round((width * maxSize) / height);
        height = maxSize;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });

            // Replace the file in the input using DataTransfer
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(resizedFile);
            input.files = dataTransfer.files;
          }
          URL.revokeObjectURL(img.src);
        },
        file.type,
        0.85,
      );
    } else {
      URL.revokeObjectURL(img.src);
    }
  }
</script>

<CrudHeader title="Edit Post" description="Update your article and manage its visibility." backUrl="/dashboard/blog">
  {#snippet actions()}
    <Button variant="outline" href="/blog/{data.post.slug}" target="_blank" class="gap-2">
      <Eye class="h-4 w-4" />
      View Live
    </Button>

    <form
      method="POST"
      action="?/delete"
      use:enhance={() => {
        if (!confirm("Are you sure you want to delete this post?")) return;
        isDeleting = true;
        return async ({ update }) => {
          await update();
          isDeleting = false;
        };
      }}
    >
      <Button variant="destructive" size="icon" disabled={isDeleting || isLoading}>
        {#if isDeleting}
          <Loader2 class="h-4 w-4 animate-spin" />
        {:else}
          <Trash2 class="h-4 w-4" />
        {/if}
      </Button>
    </form>
  {/snippet}
</CrudHeader>

<CrudFormLayout action="?/update" bind:isLoading cancelUrl="/dashboard/blog" submitLabel="Update Post" enctype="multipart/form-data">
  {#snippet main()}
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="title">Post Title</Label>
          <Input id="title" name="title" bind:value={title} placeholder="e.g. Mastering Svelte 5 Runes" class="text-lg font-medium" required />
        </div>
        <div class="grid gap-2">
          <Label for="slug">Slug (URL)</Label>
          <Input id="slug" name="slug" value={slug} placeholder="e.g. mastering-svelte-5-runes" readonly required class="bg-muted" />
        </div>
      </div>

      <div class="grid gap-2 pt-2 border-t mt-2">
        <Label for="image">Post Image (Auto-resize max 1200px)</Label>
        <Input id="image" name="image" type="file" accept="image/*" onchange={handleFileChange} />
        <div class="flex items-center gap-2 mt-1">
          {#if post.image}
            <div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden">
              <img src={getFileUrl(post.image)} alt="Thumbnail" class="h-full w-full object-cover" />
            </div>
          {:else}
            <div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">
              <ImageIcon class="h-5 w-5 opacity-40" />
            </div>
          {/if}
          <p class="text-[10px] text-muted-foreground italic">
            {post.image ? "Click to change image" : "No image uploaded"}
          </p>
        </div>
      </div>

      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <Label for="content">Content (Markdown or HTML)</Label>
          <span class="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
            {readTime}
          </span>
        </div>
        <textarea
          id="content"
          name="content"
          bind:value={currentContent}
          rows="20"
          placeholder="Write your amazing story here..."
          required
          class="flex min-h-[500px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed"
        ></textarea>
      </div>

      <div class="grid gap-2 pt-2 border-t mt-2">
        <Label for="tags">Tags (Space or Enter to add)</Label>
        <div class="flex flex-wrap gap-2 p-2 rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background transition-shadow">
          {#each tags as tag}
            <span class={badgeVariants({ variant: "secondary" })}>
              {tag}
              <button type="button" class="ml-1 rounded-full hover:bg-muted p-0.5 outline-none" onclick={() => removeTag(tag)}>
                <X size={10} />
              </button>
            </span>
          {/each}
          <input id="tags-input" type="text" bind:value={tagInput} onkeydown={handleTagKeydown} onpaste={handleTagPaste} placeholder={tags.length === 0 ? "e.g. sveltekit webdev typescript" : ""} class="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground" />
        </div>
        <input type="hidden" name="tags" value={tags.join(",")} />
        <p class="text-[10px] text-muted-foreground italic">You can also paste a list of tags separated by spaces or commas.</p>
      </div>
    </div>
  {/snippet}

  {#snippet sidebar()}
    <div class="flex flex-col gap-4">
      <div class="space-y-4">
        <div class="grid gap-2 relative">
          <Label for="categoryId">Category</Label>
          <input type="hidden" name="categoryId" value={selectedCategoryId} required />

          <div class="flex items-center gap-2">
            {#if selectedCategoryId}
              {@const selected = data.categories.find((c) => c.id === selectedCategoryId)}
              <div class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm">
                <span class="font-medium text-foreground">{selected?.name ?? "Unknown"}</span>
                <button type="button" class="text-muted-foreground hover:text-foreground" onclick={() => (selectedCategoryId = null)}>
                  <X size={14} />
                </button>
              </div>
            {:else}
              <div class="relative w-full">
                <Search class="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                <Input placeholder="Search or create category..." bind:value={categorySearch} onfocus={() => (showCategoryDropdown = true)} class="pl-8" />
              </div>
            {/if}
          </div>

          {#if showCategoryDropdown && !selectedCategoryId}
            <div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 max-h-[200px] overflow-auto p-1">
              {#each filteredCategories as category}
                <button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground transition-colors text-left" onclick={() => selectCategory(category)}>
                  {category.name}
                </button>
              {/each}

              {#if !data.categories.some((c) => c.name.toLowerCase() === categorySearch.toLowerCase().trim()) && categorySearch.trim().length > 0}
                <div class="border-t mt-1 pt-1">
                  <button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-emerald-500/10 text-emerald-600 font-medium transition-colors text-left gap-2" disabled={isCreatingCategory} onclick={createCategory}>
                    {#if isCreatingCategory}
                      <Loader2 size={14} class="animate-spin" /> Creating "{categorySearch}"...
                    {:else}
                      <Plus size={14} /> Create "{categorySearch}"
                    {/if}
                  </button>
                </div>
              {/if}

              {#if filteredCategories.length === 0 && categorySearch.trim().length === 0}
                <div class="p-2 text-xs italic text-muted-foreground">Type to search or create...</div>
              {/if}
            </div>

            <button type="button" class="fixed inset-0 z-40 bg-transparent" onclick={() => (showCategoryDropdown = false)} aria-label="Close dropdown"></button>
          {/if}
        </div>

        <div class="flex items-center space-x-2 pt-2">
          <input type="checkbox" id="featured" name="featured" checked={post.featured} class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
          <Label for="featured">Featured Post</Label>
        </div>
      </div>

      <div class="flex flex-col gap-3 pt-2 pt-2 border-t mt-2">
        <Label>Status</Label>
        <div class="grid grid-cols-2 gap-2">
          <input type="hidden" name="published" value={isPublished} />
          <Button type="button" variant={isPublished ? "default" : "outline"} class="w-full gap-2 transition-all" onclick={() => (isPublished = true)}>
            <Globe size={16} /> Public
          </Button>
          <Button type="button" variant={!isPublished ? "secondary" : "outline"} class="w-full gap-2 transition-all" onclick={() => (isPublished = false)}>
            <Lock size={16} /> Draft
          </Button>
        </div>
      </div>
    </div>

    <div class="mt-4 rounded-lg border bg-muted/30 p-4">
      <h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Post Info</h4>
      <div class="space-y-1 text-[11px] text-muted-foreground">
        <p>Slug: <span class="font-mono">{data.post.slug}</span></p>
        <p>Created: {formatDate(data.post.createdAt)}</p>
        <p>Last Update: {formatDate(data.post.updatedAt)}</p>
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
