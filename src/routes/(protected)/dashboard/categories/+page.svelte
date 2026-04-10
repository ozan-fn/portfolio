<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Plus, Pencil, Trash2, Check, X, Loader2, Tag } from "@lucide/svelte";

  let { data, form }: { data: PageData; form: ActionData } = $props();

  let isLoading = $state(false);
  let editingId = $state<string | null>(null);
  let editValue = $state("");
  let deleteTarget = $state<{ id: string; name: string } | null>(null);

  function startEditing(category: { id: string; name: string }) {
    editingId = category.id;
    editValue = category.name;
  }

  function cancelEditing() {
    editingId = null;
    editValue = "";
  }

  const stats = $derived({
    total: data.categories.length,
    inUse: data.categories.filter((c) => c._count.posts > 0).length,
    unused: data.categories.filter((c) => c._count.posts === 0).length,
  });
</script>

<DashboardPage title="Categories" description="Manage categories for your blog posts.">
  {#snippet children()}
    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-3 mb-5">
      {#each [{ label: "Total categories", value: stats.total }, { label: "In use", value: stats.inUse }, { label: "Unused", value: stats.unused }] as stat}
        <div class="rounded-lg bg-muted/50 p-4">
          <p class="text-xs text-muted-foreground">{stat.label}</p>
          <p class="mt-1 text-2xl font-bold tracking-tight">{stat.value}</p>
        </div>
      {/each}
    </div>

    <div class="grid gap-6 lg:grid-cols-[1fr_320px] items-start">
      <!-- LEFT: Table -->
      <div class="rounded-xl border border-border/40 overflow-hidden">
        <div class="overflow-x-auto">
          <Table.Root>
            <Table.Header>
              <Table.Row class="bg-muted/30 hover:bg-muted/30">
                <Table.Head class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</Table.Head>
                <Table.Head class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Slug</Table.Head>
                <Table.Head class="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[80px]">Posts</Table.Head>
                <Table.Head class="text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[100px]">Actions</Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {#if data.categories.length === 0}
                <Table.Row>
                  <Table.Cell colspan={4} class="py-12 text-center text-sm text-muted-foreground">No categories yet. Add your first one!</Table.Cell>
                </Table.Row>
              {:else}
                {#each data.categories as category (category.id)}
                  <Table.Row class="group hover:bg-muted/20">
                    <!-- Name / inline edit -->
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
                          <Input name="name" bind:value={editValue} class="h-8 py-0 text-sm" required autofocus />
                          <Button size="icon" variant="ghost" type="submit" class="h-8 w-8 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" disabled={isLoading}>
                            <Check class="h-3.5 w-3.5" />
                          </Button>
                          <Button size="icon" variant="ghost" type="button" class="h-8 w-8 rounded-md border border-border/40 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30" onclick={cancelEditing}>
                            <X class="h-3.5 w-3.5" />
                          </Button>
                        </form>
                      {:else}
                        <div class="flex items-center gap-2">
                          <Tag class="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                          <span class="text-sm font-semibold">{category.name}</span>
                        </div>
                      {/if}
                    </Table.Cell>

                    <!-- Slug -->
                    <Table.Cell>
                      <code class="rounded-sm bg-muted/60 border border-border/40 px-1.5 py-0.5 text-[11px] text-muted-foreground font-mono">
                        {category.slug}
                      </code>
                    </Table.Cell>

                    <!-- Post count -->
                    <Table.Cell class="text-center">
                      <span class="inline-flex items-center rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                        {category._count.posts}
                      </span>
                    </Table.Cell>

                    <!-- Actions -->
                    <Table.Cell class="text-right">
                      <div class="flex justify-end gap-1.5">
                        <Button variant="ghost" size="icon" class="h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity" disabled={editingId !== null} onclick={() => startEditing(category)} title="Edit">
                          <Pencil class="h-3.5 w-3.5" />
                          <span class="sr-only">Edit</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          type="button"
                          class="h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity"
                          disabled={editingId !== null || category._count.posts > 0}
                          title={category._count.posts > 0 ? "Cannot delete: has posts" : "Delete"}
                          onclick={() => (deleteTarget = { id: category.id, name: category.name })}
                        >
                          <Trash2 class="h-3.5 w-3.5" />
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

        <!-- Table footer -->
        <div class="border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground">
          {data.categories.length}
          {data.categories.length === 1 ? "category" : "categories"} total
        </div>
      </div>

      <!-- RIGHT: Add form + info -->
      <div class="flex flex-col gap-4">
        <div class="rounded-xl border border-border/40 bg-card p-5">
          <h3 class="text-base font-semibold mb-4">Add New Category</h3>

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
            <div class="flex flex-col gap-1.5">
              <Label for="name" class="text-xs font-medium text-muted-foreground">Category name</Label>
              <Input id="name" name="name" placeholder="e.g. Tutorial" required autocomplete="off" class="h-9 text-sm" />
            </div>

            {#if form?.message}
              <p class="text-xs font-medium text-destructive">{form.message}</p>
            {/if}

            <Button type="submit" class="w-full shadow-sm" disabled={isLoading}>
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

        <div class="rounded-xl border border-border/40 bg-muted/30 p-4">
          <h4 class="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Category info</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">Categories help organize your blog posts. Slugs are generated automatically from the name. You cannot delete a category that is currently used by blog posts.</p>
        </div>
      </div>
    </div>

    <!-- Delete Alert Dialog -->
    <AlertDialog.Root
      open={deleteTarget !== null}
      onOpenChange={(v) => {
        if (!v) deleteTarget = null;
      }}
    >
      <AlertDialog.Content class="rounded-xl">
        <AlertDialog.Header>
          <AlertDialog.Title>Delete Category</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete
            <span class="font-semibold text-foreground">"{deleteTarget?.name}"</span>? This action cannot be undone and will only succeed if no blog posts are attached.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel onclick={() => (deleteTarget = null)}>Cancel</AlertDialog.Cancel>
          <form
            action="?/delete"
            method="POST"
            use:enhance={() => {
              isLoading = true;
              return async ({ update }) => {
                await update();
                isLoading = false;
                deleteTarget = null;
              };
            }}
          >
            <input type="hidden" name="id" value={deleteTarget?.id} />
            <AlertDialog.Action>
              <Button type="submit" variant="destructive" disabled={isLoading}>
                {#if isLoading}
                  <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                {:else}
                  Delete Category
                {/if}
              </Button>
            </AlertDialog.Action>
          </form>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  {/snippet}
</DashboardPage>
