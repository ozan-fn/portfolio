<script lang="ts">
  import type { PageData } from "./$types";
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Globe, Lock, X, Check, Plus, Loader2 } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { badgeVariants } from "$lib/components/ui/badge";
  import { invalidateAll } from "$app/navigation";

  let { data }: { data: PageData } = $props();

  let isLoading = $state(false);
  let isCreatingCategory = $state(false);
  let isPublished = $state(false);
  let title = $state("");

  // Category search/select
  let categorySearch = $state("");
  let selectedCategoryId = $state("");
  let showCategoryDropdown = $state(false);

  const filteredCategories = $derived(data.categories.filter((c) => c.name.toLowerCase().includes(categorySearch.toLowerCase())));

  function selectCategory(category: { id: string; name: string }) {
    selectedCategoryId = category.id;
    categorySearch = category.name;
    showCategoryDropdown = false;
  }

  async function createCategory() {
    if (!categorySearch.trim() || isCreatingCategory) return;

    isCreatingCategory = true;
    try {
      const formData = new FormData();
      formData.append("singleName", categorySearch);
      formData.append("order", "0");

      const response = await fetch("/dashboard/categories?/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await invalidateAll();
        // The newly created category should now be in data.categories
        setTimeout(() => {
          const newCat = data.categories.find((c) => c.name.toLowerCase() === categorySearch.toLowerCase().trim());
          if (newCat) {
            selectCategory(newCat);
          }
        }, 100);
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

  let slug = $derived(
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  );

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

<CrudHeader title="New Blog Post" description="Share your thoughts and knowledge with the world." backUrl="/dashboard/blog" />

<CrudFormLayout bind:isLoading cancelUrl="/dashboard/blog" submitLabel={isPublished ? "Publish Post" : "Save Draft"} enctype="multipart/form-data">
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
      </div>

      <div class="grid gap-2">
        <Label for="content">Content (Markdown or HTML)</Label>
        <textarea
          id="content"
          name="content"
          rows="20"
          placeholder="Write your amazing story here..."
          required
          class="flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed"
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
      <div class="grid gap-2 relative">
        <Label for="categoryId">Category</Label>
        <div class="relative">
          <Input type="text" placeholder="Search category..." bind:value={categorySearch} onfocus={() => (showCategoryDropdown = true)} autocomplete="off" class="pr-10" />
          <input type="hidden" name="categoryId" value={selectedCategoryId} required />
          {#if selectedCategoryId}
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <Check size={16} class="text-emerald-500" />
            </div>
          {/if}
        </div>

        {#if showCategoryDropdown && filteredCategories.length > 0}
          <div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 max-h-[200px] overflow-auto p-1">
            {#each filteredCategories as category}
              <button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors text-left" onclick={() => selectCategory(category)}>
                {category.name}
              </button>
            {/each}
            {#if !data.categories.some((c) => c.name.toLowerCase() === categorySearch.toLowerCase().trim()) && categorySearch.trim().length > 0}
              <div class="border-t mt-1 pt-1">
                <button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-emerald-500/10 text-emerald-600 font-medium transition-colors text-left gap-2" disabled={isCreatingCategory} onclick={createCategory}>
                  {#if isCreatingCategory}
                    <Loader2 size={14} class="animate-spin" />
                    Creating "{categorySearch}"...
                  {:else}
                    <Plus size={14} />
                    Create "{categorySearch}"
                  {/if}
                </button>
              </div>
            {/if}
          </div>
        {/if}

        {#if showCategoryDropdown && filteredCategories.length === 0}
          <div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md p-1 text-sm text-muted-foreground animate-in fade-in-0 zoom-in-95">
            <div class="p-2 text-xs italic">No category found.</div>
            <div class="border-t pt-1">
              <button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-emerald-500/10 text-emerald-600 font-medium transition-colors text-left gap-2" disabled={isCreatingCategory} onclick={createCategory}>
                {#if isCreatingCategory}
                  <Loader2 size={14} class="animate-spin" />
                  Creating "{categorySearch}"...
                {:else}
                  <Plus size={14} />
                  Create "{categorySearch}"
                {/if}
              </button>
            </div>
          </div>
        {/if}

        {#if showCategoryDropdown}
          <button type="button" class="fixed inset-0 z-40 bg-transparent" onclick={() => (showCategoryDropdown = false)} aria-label="Close category selection"></button>
        {/if}
      </div>

      <div class="flex items-center space-x-2 pt-2">
        <input type="checkbox" id="featured" name="featured" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
        <Label for="featured">Featured Post</Label>
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
        <p class="text-[11px] text-muted-foreground italic">
          {isPublished ? "This post will be visible to everyone immediately." : "This post will be saved as a private draft."}
        </p>
      </div>
    </div>

    <div class="mt-4 rounded-lg border bg-muted/30 p-4">
      <h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Writing Tips</h4>
      <ul class="text-xs space-y-2 text-muted-foreground">
        <li>• Use meaningful headings for better SEO.</li>
        <li>• Excerpts and read time are calculated automatically.</li>
      </ul>
    </div>
  {/snippet}
</CrudFormLayout>
