<script lang="ts">
    import type { PageData, ActionData } from './$types';
    import { enhance } from '$app/forms';
    import CrudHeader from '$lib/components/admin/crud-header.svelte';
    import * as Table from '$lib/components/ui/table/index.js';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Badge } from '$lib/components/ui/badge/index.js';
    import { Label } from '$lib/components/ui/label/index.js';
    import { Plus, Pencil, Trash2, Check, X, Loader2, Tag } from '@lucide/svelte';

    let { data, form }: { data: PageData; form: ActionData } = $props();

    let isLoading = $state(false);
    let editingId = $state<string | null>(null);
    let editValue = $state('');

    let isDeleteDialogOpen = $state(false);
    let categoryToDelete = $state<{ id: string; name: string } | null>(null);

    function startEditing(category: { id: string; name: string }) {
        editingId = category.id;
        editValue = category.name;
    }

    function cancelEditing() {
        editingId = null;
        editValue = '';
    }

    function openDeleteDialog(category: { id: string; name: string }) {
        categoryToDelete = category;
        isDeleteDialogOpen = true;
    }

    function closeDeleteDialog() {
        isDeleteDialogOpen = false;
        categoryToDelete = null;
    }
</script>

<CrudHeader title="Categories" description="Manage categories for your blog posts." backUrl="/dashboard/blog" />

<div class="grid gap-6 lg:grid-cols-[1fr_350px] p-6 max-w-7xl w-full mx-auto">
    <!-- Category List -->
    <div class="rounded-md border bg-card">
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head>Name</Table.Head>
                    <Table.Head>Slug</Table.Head>
                    <Table.Head class="text-center">Posts</Table.Head>
                    <Table.Head class="text-right">Actions</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#if data.categories.length === 0}
                    <Table.Row>
                        <Table.Cell colspan={4} class="h-24 text-center text-muted-foreground">No categories found.</Table.Cell>
                    </Table.Row>
                {:else}
                    {#each data.categories as category (category.id)}
                        <Table.Row>
                            <Table.Cell class="font-medium">
                                {#if editingId === category.id}
                                    <form
                                        action="?/update"
                                        method="POST"
                                        use:enhance={() => {
                                            isLoading = true;
                                            return async ({ update }) => {
                                                await update();
                                                isLoading = false;
                                                editingId = null;
                                            };
                                        }}
                                        class="flex items-center gap-2"
                                    >
                                        <input type="hidden" name="id" value={category.id} />
                                        <Input name="name" bind:value={editValue} class="h-8 py-0" required autofocus />
                                        <Button size="icon" variant="ghost" type="submit" class="h-8 w-8 text-emerald-600" disabled={isLoading}>
                                            <Check class="h-4 w-4" />
                                        </Button>
                                        <Button size="icon" variant="ghost" type="button" class="h-8 w-8 text-destructive" onclick={cancelEditing}>
                                            <X class="h-4 w-4" />
                                        </Button>
                                    </form>
                                {:else}
                                    <div class="flex items-center gap-2">
                                        <Tag class="h-3.5 w-3.5 text-muted-foreground" />
                                        {category.name}
                                    </div>
                                {/if}
                            </Table.Cell>
                            <Table.Cell>
                                <code class="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                                    {category.slug}
                                </code>
                            </Table.Cell>
                            <Table.Cell class="text-center">
                                <Badge variant="secondary" class="font-normal">
                                    {category._count.posts}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell class="text-right">
                                <div class="flex justify-end gap-1">
                                    <Button variant="ghost" size="icon" class="h-8 w-8" disabled={editingId !== null} onclick={() => startEditing(category)}>
                                        <Pencil class="h-4 w-4" />
                                        <span class="sr-only">Edit</span>
                                    </Button>

                                    <Button variant="ghost" size="icon" type="button" class="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" disabled={editingId !== null || category._count.posts > 0} onclick={() => openDeleteDialog(category)}>
                                        <Trash2 class="h-4 w-4" />
                                        <span class="sr-only">Delete</span>
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                {/if}
            </Table.Body>
        </Table.Root>
    </div>

    <!-- Add Category Form -->
    <div class="space-y-6">
        <div class="rounded-lg border bg-card p-6 shadow-sm">
            <h3 class="font-semibold text-lg mb-4">Add New Category</h3>

            <form
                action="?/create"
                method="POST"
                use:enhance={() => {
                    isLoading = true;
                    return async ({ update }) => {
                        await update();
                        isLoading = false;
                    };
                }}
                class="flex flex-col gap-4"
            >
                <div class="grid gap-2">
                    <Label for="name">Category Name</Label>
                    <Input id="name" name="name" placeholder="e.g. Tutorial" required autocomplete="off" />
                </div>

                {#if form?.message}
                    <p class="text-xs font-medium text-destructive">{form.message}</p>
                {/if}

                <Button type="submit" class="w-full" disabled={isLoading}>
                    {#if isLoading}
                        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                    {:else}
                        <Plus class="mr-2 h-4 w-4" />
                        Add Category
                    {/if}
                </Button>
            </form>
        </div>

        <div class="rounded-lg border bg-muted/30 p-4">
            <h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Category Info</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Categories help organize your blog posts. Slugs are generated automatically from the name. You cannot delete a category that is currently used by blog posts.</p>
        </div>
    </div>

    {#if isDeleteDialogOpen}
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div class="bg-card border rounded-lg shadow-lg max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
                <h3 class="text-lg font-semibold mb-2">Delete Category</h3>
                <p class="text-sm text-muted-foreground mb-6">
                    Are you sure you want to delete <span class="font-bold text-foreground">"{categoryToDelete?.name}"</span>? This action cannot be undone and will only succeed if no blog posts are attached.
                </p>

                <div class="flex justify-end gap-3">
                    <Button variant="outline" onclick={closeDeleteDialog} disabled={isLoading}>Cancel</Button>
                    <form
                        action="?/delete"
                        method="POST"
                        use:enhance={() => {
                            isLoading = true;
                            return async ({ update }) => {
                                await update();
                                isLoading = false;
                                closeDeleteDialog();
                            };
                        }}
                    >
                        <input type="hidden" name="id" value={categoryToDelete?.id} />
                        <Button variant="destructive" type="submit" disabled={isLoading}>
                            {#if isLoading}
                                <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                                Deleting...
                            {:else}
                                Delete Category
                            {/if}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    {/if}
</div>
