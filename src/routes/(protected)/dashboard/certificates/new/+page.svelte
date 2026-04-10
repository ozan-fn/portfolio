<script lang="ts">
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  let isLoading = $state(false);
</script>

<CrudHeader title="New Certificate" description="Add a new professional certification to your portfolio." backUrl="/dashboard/certificates" />

<CrudFormLayout action="?/create" bind:isLoading cancelUrl="/dashboard/certificates" submitLabel="Create Certificate" enctype="multipart/form-data">
  {#snippet main()}
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <Label for="title">Certificate Title</Label>
        <Input id="title" name="title" placeholder="e.g. AWS Certified Solutions Architect" required />
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
        <Label for="thumbnail">Certificate Image (Optional)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" />
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

      <div class="text-xs text-muted-foreground pt-2">
        <p>Leave expiry date empty for lifetime certifications.</p>
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
