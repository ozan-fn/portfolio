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

  const formatDateForInput = (date: Date | string | undefined | null) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${month}-${day}`;
  };
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
      <div class="grid gap-2">
        <Label for="title">Certificate Title</Label>
        <Input id="title" name="title" value={certificate.title} placeholder="e.g. AWS Certified Solutions Architect" required />
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
        <Label for="thumbnail">Certificate Image (Optional)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" />
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

      <div class="text-xs text-muted-foreground pt-2">
        <p>Leave expiry date empty for lifetime certifications.</p>
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
