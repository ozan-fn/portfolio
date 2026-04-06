<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    import CrudHeader from '$lib/components/admin/crud-header.svelte';
    import CrudFormLayout from '$lib/components/admin/crud-form-layout.svelte';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Loader2, Globe, Lock, Trash2, Eye } from '@lucide/svelte';
    import { calculateReadTime, formatDate } from '$lib/utils';

    let { data }: { data: PageData } = $props();

    let isLoading = $state(false);
    let isDeleting = $state(false);
    let isPublished = $state(data.post.published);
    let currentContent = $state(data.post.content);
    let currentTitle = $state(data.post.title);

    let readTime = $derived(calculateReadTime(currentContent));
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
                if (!confirm('Are you sure you want to delete this post?')) return;
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

<CrudFormLayout action="?/update" bind:isLoading cancelUrl="/dashboard/blog" submitLabel="Update Post">
    {#snippet main()}
        <div class="flex flex-col gap-4">
            <div class="grid gap-2">
                <Label for="title">Post Title</Label>
                <Input id="title" name="title" bind:value={currentTitle} placeholder="e.g. Mastering Svelte 5 Runes" class="text-lg font-medium" required />
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
        </div>
    {/snippet}

    {#snippet sidebar()}
        <div class="flex flex-col gap-4">
            <div class="grid gap-2">
                <Label for="categoryId">Category</Label>
                <select
                    id="categoryId"
                    name="categoryId"
                    required
                    value={data.post.categoryId}
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {#each data.categories as category}
                        <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </div>

            <div class="grid gap-2">
                <Label for="image">Featured Image URL</Label>
                <Input id="image" name="image" value={data.post.image} placeholder="https://unsplash.com/..." />
            </div>

            <div class="flex flex-col gap-3 pt-2">
                <Label>Status</Label>
                <div class="grid grid-cols-2 gap-2">
                    <input type="hidden" name="published" value={isPublished} />
                    <Button type="button" variant={isPublished ? 'default' : 'outline'} class="w-full gap-2 transition-all" onclick={() => (isPublished = true)}>
                        <Globe size={16} /> Public
                    </Button>
                    <Button type="button" variant={!isPublished ? 'secondary' : 'outline'} class="w-full gap-2 transition-all" onclick={() => (isPublished = false)}>
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
