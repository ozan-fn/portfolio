<script lang="ts">
  import CrudHeader from '$lib/components/admin/crud-header.svelte';
  import CrudFormLayout from '$lib/components/admin/crud-form-layout.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Trash2, Loader2 } from '@lucide/svelte';

  interface Certificate {
    id: string;
    title: string;
    issuer: string;
    issueDate: Date;
    expiryDate?: Date;
  }

  // Dummy certificate - in a real app, this would come from server load
  let certificate: Certificate = $state({
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: new Date('2023-06-15'),
    expiryDate: new Date('2025-06-15'),
  });

  let isLoading = $state(false);
  let isDeleting = $state(false);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      isDeleting = true;
      // In a real app, this would make a server call
      setTimeout(() => {
        window.location.href = '/dashboard/certificates';
      }, 500);
    }
  };

  const formatDateForInput = (date: Date | undefined) => {
    if (!date) return '';
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  };
</script>

<CrudHeader title="Edit Certificate" description="Update your certification details." backUrl="/dashboard/certificates">
  {#snippet actions()}
    <Button variant="destructive" size="icon" onclick={handleDelete} disabled={isDeleting || isLoading}>
      {#if isDeleting}
        <Loader2 class="h-4 w-4 animate-spin" />
      {:else}
        <Trash2 class="h-4 w-4" />
      {/if}
    </Button>
  {/snippet}
</CrudHeader>

<CrudFormLayout
  bind:isLoading
  cancelUrl="/dashboard/certificates"
  submitLabel="Update Certificate"
  onSuccess={() => {
    // In a real app, this would redirect after successful update
    window.location.href = '/dashboard/certificates';
  }}
>
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
