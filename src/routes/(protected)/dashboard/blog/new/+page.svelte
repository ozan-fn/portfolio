<script lang="ts">
    import type { PageData } from './$types';
    import CrudHeader from '$lib/components/admin/crud-header.svelte';
    import CrudFormLayout from '$lib/components/admin/crud-form-layout.svelte';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Globe, Lock } from '@lucide/svelte';
    import { Button } from '$lib/components/ui/button/index.js';

    let { data }: { data: PageData } = $props();

    let isLoading = $state(false);
    let isPublished = $state(false);
</script>

<CrudHeader title="New Blog Post" description="Share your thoughts and knowledge with the world." backUrl="/dashboard/blog" />

<CrudFormLayout bind:isLoading cancelUrl="/dashboard/blog" submitLabel={isPublished ? 'Publish Post' : 'Save Draft'}>
    {#snippet main()}
        <div class="flex flex-col gap-4">
            <div class="grid gap-2">
                <Label for="title">Post Title</Label>
                <Input id="title" name="title" placeholder="e.g. Mastering Svelte 5 Runes" class="text-lg font-medium" required />
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
        </div>
    {/snippet}

    {#snippet sidebar()}
        <div class="flex flex-col gap-4">
            <div class="grid gap-2">
                <Label for="categoryId">Category</Label>
                <select id="categoryId" name="categoryId" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Select category</option>
                    {#each data.categories as category}
                        <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </div>

            <div class="grid gap-2">
                <Label for="image">Featured Image URL</Label>
                <Input id="image" name="image" placeholder="https://unsplash.com/..." />
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
                <p class="text-[11px] text-muted-foreground italic">
                    {isPublished ? 'This post will be visible to everyone immediately.' : 'This post will be saved as a private draft.'}
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
