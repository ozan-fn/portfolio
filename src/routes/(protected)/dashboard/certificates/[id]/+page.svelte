<script lang="ts">
  import type { PageData } from "./$types";
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Trash2, Loader2, Image as ImageIcon } from "@lucide/svelte";
  import { enhance } from "$app/forms";
  import { getFileUrl } from "$lib/storage.client";

  let { data }: { data: PageData } = $props();
  let certificate = $derived(data.certificate);

  let isLoading = $state(false);
  let isDeleting = $state(false);
  let title = $state("");

  $effect(() => {
    title = certificate.title;
  });

  let slug = $derived(
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, ""),
  );

  const formatDateForInput = (date: Date | string | undefined | null) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${month}-${day}`;
  };

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

<CrudHeader title="Edit Certificate" description="Update your certification details." backUrl="/dashboard/certificates">
  {#snippet actions()}
    <form
      action="?/delete"
      method="POST"
      use:enhance={() => {
        isDeleting = true;
        return async ({ update }) => {
          await update();
          isDeleting = false;
        };
      }}
    >
      <Button type="submit" variant="destructive" size="icon" disabled={isDeleting || isLoading}>
        {#if isDeleting}
          <Loader2 class="h-4 w-4 animate-spin" />
        {:else}
          <Trash2 class="h-4 w-4" />
        {/if}
      </Button>
    </form>
  {/snippet}
</CrudHeader>

<CrudFormLayout action="?/update" bind:isLoading cancelUrl="/dashboard/certificates" submitLabel="Update Certificate" enctype="multipart/form-data">
  {#snippet main()}
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="title">Certificate Title</Label>
          <Input id="title" name="title" bind:value={title} placeholder="e.g. AWS Certified Solutions Architect" required />
        </div>
        <div class="grid gap-2">
          <Label for="slug">Slug (URL)</Label>
          <Input id="slug" name="slug" value={slug} placeholder="e.g. aws-certified-solutions-architect" readonly required class="bg-muted" />
        </div>
      </div>

      <div class="grid gap-2">
        <Label for="issuer">Issuing Organization</Label>
        <Input id="issuer" name="issuer" value={certificate.issuer} placeholder="e.g. Amazon Web Services" required />
      </div>

      <div class="grid gap-2">
        <Label for="verifyUrl">Verification URL (Optional)</Label>
        <Input id="verifyUrl" name="verifyUrl" value={certificate.verifyUrl || ""} placeholder="https://..." />
      </div>

      <div class="grid gap-2 pt-2 border-t mt-2">
        <Label for="thumbnail">Certificate Image (Auto-resize max 1200px)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" onchange={handleFileChange} />
        <div class="flex items-center gap-2 mt-1">
          {#if certificate.thumbnail}
            <div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden">
              <img src={getFileUrl(certificate.thumbnail)} alt="Thumbnail" class="h-full w-full object-cover" />
            </div>
          {:else}
            <div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">
              <ImageIcon class="h-5 w-5 opacity-40" />
            </div>
          {/if}
          <p class="text-[10px] text-muted-foreground italic">
            {certificate.thumbnail ? "Click to change image" : "No image uploaded"}
          </p>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet sidebar()}
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <Label for="issueDate">Issue Date</Label>
        <Input id="issueDate" name="issueDate" type="date" value={formatDateForInput(certificate.issueDate)} required />
      </div>

      <div class="grid gap-2">
        <Label for="expiryDate">Expiry Date (Optional)</Label>
        <Input id="expiryDate" name="expiryDate" type="date" value={formatDateForInput(certificate.expiryDate)} />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="grid gap-2">
          <Label for="order">Display Order</Label>
          <Input id="order" name="order" type="number" value={certificate.order} />
        </div>
        <div class="flex items-center space-x-2 pt-8">
          <input type="checkbox" id="featured" name="featured" checked={certificate.featured} class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
          <Label for="featured">Featured</Label>
        </div>
      </div>

      <div class="text-xs text-muted-foreground pt-2">
        <p>Leave expiry date empty for lifetime certifications.</p>
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
