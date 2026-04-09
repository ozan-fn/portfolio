<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Plus, Pencil, Trash2 } from '@lucide/svelte';
  import CrudHeader from '$lib/components/admin/crud-header.svelte';

  interface Certificate {
    id: string;
    title: string;
    issuer: string;
    issueDate: Date;
    expiryDate?: Date;
  }

  // Dummy data
  let certificates: Certificate[] = $state([
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: new Date('2023-06-15'),
      expiryDate: new Date('2025-06-15'),
    },
    {
      id: '2',
      title: 'Certified Kubernetes Administrator',
      issuer: 'Linux Foundation',
      issueDate: new Date('2023-03-20'),
      expiryDate: new Date('2026-03-20'),
    },
    {
      id: '3',
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      issueDate: new Date('2023-09-10'),
      expiryDate: new Date('2025-09-10'),
    },
    {
      id: '4',
      title: 'TypeScript Professional',
      issuer: 'freeCodeCamp',
      issueDate: new Date('2023-12-01'),
    },
    {
      id: '5',
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      issueDate: new Date('2023-08-15'),
      expiryDate: new Date('2024-08-15'),
    },
    {
      id: '6',
      title: 'Docker & Kubernetes Mastery',
      issuer: 'Udemy',
      issueDate: new Date('2023-05-20'),
    },
  ]);

  const isExpired = (expiryDate?: Date) => {
    if (!expiryDate) return false;
    return new Date() > expiryDate;
  };

  const isExpiringSoon = (expiryDate?: Date) => {
    if (!expiryDate) return false;
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return new Date() <= expiryDate && expiryDate <= thirtyDaysFromNow;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      certificates = certificates.filter((c) => c.id !== id);
    }
  };

  const getImageId = (index: number) => {
    return (index % 50) + 1;
  };
</script>

<CrudHeader title="Certificates" description="Manage your professional certifications and achievements.">
  {#snippet actions()}
    <Button href="/dashboard/certificates/new">
      <Plus class="mr-2 h-4 w-4" />
      Add Certificate
    </Button>
  {/snippet}
</CrudHeader>

<div class="px-6 pb-6 max-w-7xl w-full mx-auto">
  {#if certificates.length === 0}
    <div class="rounded-xl border bg-card p-12 shadow-sm">
      <div class="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <div class="text-4xl">🏅</div>
        <h2 class="text-xl font-semibold tracking-tight">No Certificates Yet</h2>
        <p class="max-w-md text-sm text-muted-foreground">Start by adding your first certificate to showcase your professional achievements.</p>
        <Button href="/dashboard/certificates/new" class="mt-4">
          <Plus class="mr-2 h-4 w-4" />
          Add Your First Certificate
        </Button>
      </div>
    </div>
  {:else}
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each certificates as cert, index (cert.id)}
        <Card class="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
          <div class="w-full h-40 bg-muted overflow-hidden">
            <img src="https://picsum.photos/id/{getImageId(index)}/400/160" alt={cert.title} class="w-full h-full object-cover" />
          </div>

          <CardHeader class="pb-2">
            <CardTitle class="text-base line-clamp-2">{cert.title}</CardTitle>
            <CardDescription class="text-xs">{cert.issuer}</CardDescription>
          </CardHeader>

          <CardContent class="flex-1 flex flex-col justify-between gap-3">
            <div class="flex flex-wrap gap-2">
              {#if isExpired(cert.expiryDate)}
                <Badge variant="destructive" class="text-xs">Expired</Badge>
              {:else if isExpiringSoon(cert.expiryDate)}
                <Badge variant="secondary" class="text-xs">Expiring Soon</Badge>
              {:else if cert.expiryDate}
                <Badge variant="outline" class="text-xs">Active</Badge>
              {:else}
                <Badge variant="default" class="text-xs">Lifetime</Badge>
              {/if}

              {#if cert.expiryDate}
                <span class="text-xs text-muted-foreground">{formatDate(cert.expiryDate)}</span>
              {/if}
            </div>

            <div class="flex gap-2 pt-2">
              <Button variant="outline" size="sm" href="/dashboard/certificates/{cert.id}" class="flex-1">
                <Pencil class="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="sm" onclick={() => handleDelete(cert.id)} class="flex-1">
                <Trash2 class="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  {/if}
</div>
