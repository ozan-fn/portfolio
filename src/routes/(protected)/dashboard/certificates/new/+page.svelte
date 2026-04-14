<script lang="ts">
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  let isLoading = $state(false);
  let title = $state("");
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

<CrudHeader title="New Certificate" description="Add a new professional certification to your portfolio." backUrl="/dashboard/certificates" />

<CrudFormLayout action="?/create" bind:isLoading cancelUrl="/dashboard/certificates" submitLabel="Create Certificate" enctype="multipart/form-data">
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
        <Input id="issuer" name="issuer" placeholder="e.g. Amazon Web Services" required />
      </div>

      <div class="grid gap-2">
        <Label for="verifyUrl">Verification URL (Optional)</Label>
        <Input id="verifyUrl" name="verifyUrl" placeholder="https://..." />
      </div>

      <div class="grid gap-2 pt-2 border-t mt-2">
        <Label for="thumbnail">Certificate Image (Auto-resize max 1200px)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" onchange={handleFileChange} />
      </div>
    </div>
  {/snippet}

  {#snippet sidebar()}
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <Label for="issueDate">Issue Date</Label>
        <Input id="issueDate" name="issueDate" type="date" required />
      </div>

      <div class="grid gap-2">
        <Label for="expiryDate">Expiry Date (Optional)</Label>
        <Input id="expiryDate" name="expiryDate" type="date" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="grid gap-2">
          <Label for="order">Display Order</Label>
          <Input id="order" name="order" type="number" value="0" />
        </div>
        <div class="flex items-center space-x-2 pt-8">
          <input type="checkbox" id="featured" name="featured" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
          <Label for="featured">Featured</Label>
        </div>
      </div>

      <div class="text-xs text-muted-foreground pt-2">
        <p>Leave expiry date empty for lifetime certifications.</p>
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
