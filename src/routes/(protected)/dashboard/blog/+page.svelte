<script lang="ts">
  import type { PageData } from "./$types";
  import * as Table from "$lib/components/ui/table/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Plus, Pencil, Trash2, Eye, FileText, Globe, Lock, Search, ArrowUpDown, Tag } from "@lucide/svelte";
  import { formatDate, calculateReadTime, generateExcerpt } from "$lib/utils";
  import { enhance } from "$app/forms";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";

  let { data }: { data: PageData } = $props();

  let isToggling = $state<string | null>(null);
  let search = $state("");
  let statusFilter = $state<"ALL" | "PUBLISHED" | "DRAFT">("ALL");
  let categoryFilter = $state("ALL");
  let sortKey = $state<"title" | "published" | "createdAt">("createdAt");
  let sortDir = $state<1 | -1>(-1);

  const categories = $derived(["ALL", ...new Set(data.posts.map((p) => p.category.name))]);

  const filtered = $derived(
    data.posts
      .filter((p) => {
        const q = search.toLowerCase();
        const mq = !q || p.title.toLowerCase().includes(q) || p.category.name.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
        const ms = statusFilter === "ALL" || (statusFilter === "PUBLISHED" && p.published) || (statusFilter === "DRAFT" && !p.published);
        const mc = categoryFilter === "ALL" || p.category.name === categoryFilter;
        return mq && ms && mc;
      })
      .sort((a, b) => {
        let av: string | number = (a as any)[sortKey] ?? "";
        let bv: string | number = (b as any)[sortKey] ?? "";
        if (sortKey === "published") {
          av = a.published ? 1 : 0;
          bv = b.published ? 1 : 0;
        }
        return av < bv ? -sortDir : av > bv ? sortDir : 0;
      }),
  );

  function toggleSort(key: typeof sortKey) {
    if (sortKey === key) sortDir = sortDir === 1 ? -1 : 1;
    else {
      sortKey = key;
      sortDir = 1;
    }
  }

  const stats = $derived({
    total: data.posts.length,
    published: data.posts.filter((p) => p.published).length,
    draft: data.posts.filter((p) => !p.published).length,
    categories: new Set(data.posts.map((p) => p.category.name)).size,
  });

  const hasFilter = $derived(search || statusFilter !== "ALL" || categoryFilter !== "ALL");
</script>

<DashboardPage title="Blog Posts" description="Manage your articles and thoughts.">
  {#snippet actions()}
    <Button href="/dashboard/blog/new" class="shadow-sm">
      <Plus class="mr-2 h-4 w-4" />
      New Post
    </Button>
  {/snippet}

  {#snippet children()}
    <!-- Stats row -->
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
      {#each [{ label: "Total posts", value: stats.total }, { label: "Published", value: stats.published }, { label: "Drafts", value: stats.draft }, { label: "Categories", value: stats.categories }] as stat}
        <div class="rounded-lg bg-muted/50 p-4">
          <p class="text-xs text-muted-foreground">{stat.label}</p>
          <p class="mt-1 text-2xl font-bold tracking-tight">{stat.value}</p>
        </div>
      {/each}
    </div>

    <!-- Filters -->
    <div class="mb-4 flex flex-wrap items-center gap-3">
      <div class="relative flex-1 min-w-[180px]">
        <Search class="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input bind:value={search} placeholder="Search posts..." class="pl-8 h-9 text-sm" />
      </div>

      <!-- Status pills -->
      <div class="flex gap-1 flex-wrap">
        {#each [{ key: "ALL", label: "All" }, { key: "PUBLISHED", label: "Published" }, { key: "DRAFT", label: "Draft" }] as s}
          <button
            onclick={() => (statusFilter = s.key as typeof statusFilter)}
            class="rounded-full border px-3 py-1 text-xs font-medium transition-colors
              {statusFilter === s.key ? 'bg-primary text-primary-foreground border-primary' : 'border-border/40 text-muted-foreground hover:bg-muted'}"
          >
            {s.label}
          </button>
        {/each}
      </div>

      <!-- Category filter -->
      <select bind:value={categoryFilter} class="h-9 rounded-md border border-border/40 bg-card px-3 text-sm text-muted-foreground focus:outline-none focus:ring-1">
        {#each categories as cat}
          <option value={cat}>{cat === "ALL" ? "All categories" : cat}</option>
        {/each}
      </select>
    </div>

    <!-- Table -->
    <div class="rounded-xl border border-border/40 overflow-hidden">
      <div class="overflow-x-auto">
        <Table.Root>
          <Table.Header>
            <Table.Row class="bg-muted/30 hover:bg-muted/30">
              <Table.Head class="w-[300px]">
                <button onclick={() => toggleSort("title")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                  Post <ArrowUpDown class="h-3 w-3" />
                </button>
              </Table.Head>
              <Table.Head>Category</Table.Head>
              <Table.Head>
                <button onclick={() => toggleSort("published")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                  Status <ArrowUpDown class="h-3 w-3" />
                </button>
              </Table.Head>
              <Table.Head class="hidden sm:table-cell">Read time</Table.Head>
              <Table.Head class="hidden sm:table-cell">
                <button onclick={() => toggleSort("createdAt")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                  Date <ArrowUpDown class="h-3 w-3" />
                </button>
              </Table.Head>
              <Table.Head class="text-right w-[120px]">Actions</Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {#if filtered.length === 0}
              <Table.Row>
                <Table.Cell colspan={6} class="py-12 text-center text-sm text-muted-foreground">No posts match your search.</Table.Cell>
              </Table.Row>
            {:else}
              {#each filtered as post (post.id)}
                <Table.Row class="group hover:bg-muted/20">
                  <!-- Post title + excerpt -->
                  <Table.Cell>
                    <div class="flex flex-col gap-0.5">
                      <span class="font-semibold text-sm line-clamp-1">{post.title}</span>
                      <span class="text-xs text-muted-foreground italic line-clamp-1">
                        {generateExcerpt(post.content, 70)}
                      </span>
                    </div>
                  </Table.Cell>

                  <!-- Category -->
                  <Table.Cell>
                    <span class="inline-flex items-center gap-1 rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      <Tag class="h-3 w-3" />
                      {post.category.name}
                    </span>
                  </Table.Cell>

                  <!-- Status toggle -->
                  <Table.Cell>
                    <div class="flex flex-col gap-1.5 min-w-[100px]">
                      <form
                        action="?/togglePublish"
                        method="POST"
                        use:enhance={() => {
                          isToggling = post.id;
                          return async ({ update }) => {
                            await update();
                            isToggling = null;
                          };
                        }}
                      >
                        <input type="hidden" name="id" value={post.id} />
                        <input type="hidden" name="published" value={post.published} />
                        <button
                          type="submit"
                          disabled={isToggling === post.id}
                          title="Click to toggle Status"
                          class="inline-flex w-full items-center justify-between gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-tight transition-all hover:opacity-80 disabled:opacity-50
                            {post.published ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 shadow-sm' : 'bg-muted text-muted-foreground border-border/40'}"
                        >
                          <span class="flex items-center gap-1.5">
                            {#if post.published}
                              <Globe class="h-3 w-3" /> Published
                            {:else}
                              <Lock class="h-3 w-3" /> Draft
                            {/if}
                          </span>
                          {#if isToggling === post.id}
                            <Loader2 class="h-2.5 w-2.5 animate-spin" />
                          {/if}
                        </button>
                      </form>

                      {#if post.featured}
                        <div class="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 text-[9px] font-bold uppercase tracking-wider">★ Featured</div>
                      {/if}
                    </div>
                  </Table.Cell>

                  <!-- Read time -->
                  <Table.Cell class="hidden sm:table-cell">
                    <span class="flex items-center gap-1 text-xs text-muted-foreground">
                      <FileText class="h-3.5 w-3.5" />
                      {calculateReadTime(post.content)}
                    </span>
                  </Table.Cell>

                  <!-- Date -->
                  <Table.Cell class="hidden sm:table-cell">
                    <span class="text-xs text-muted-foreground">
                      {formatDate(post.createdAt)}
                    </span>
                  </Table.Cell>

                  <!-- Actions -->
                  <Table.Cell class="text-right">
                    <div class="flex justify-end gap-1.5">
                      <Button variant="ghost" size="icon" href="/blog/{post.slug}" target="_blank" class="h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity" title="Preview">
                        <Eye class="h-3.5 w-3.5" />
                        <span class="sr-only">Preview</span>
                      </Button>
                      <Button variant="ghost" size="icon" href="/dashboard/blog/{post.id}" class="h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity" title="Edit">
                        <Pencil class="h-3.5 w-3.5" />
                        <span class="sr-only">Edit</span>
                      </Button>
                      <form
                        action="?/delete"
                        method="POST"
                        use:enhance={({ cancel }) => {
                          if (!confirm("Delete this post? This action cannot be undone.")) cancel();
                          return async ({ update }) => {
                            await update();
                          };
                        }}
                      >
                        <input type="hidden" name="id" value={post.id} />
                        <Button variant="ghost" size="icon" type="submit" class="h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                          <Trash2 class="h-3.5 w-3.5" />
                          <span class="sr-only">Delete</span>
                        </Button>
                      </form>
                    </div>
                  </Table.Cell>
                </Table.Row>
              {/each}
            {/if}
          </Table.Body>
        </Table.Root>
      </div>

      <!-- Table footer -->
      <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground">
        <span>Showing {filtered.length} of {data.posts.length} posts</span>
        {#if hasFilter}
          <button
            onclick={() => {
              search = "";
              statusFilter = "ALL";
              categoryFilter = "ALL";
            }}
            class="underline underline-offset-2 hover:text-foreground"
          >
            Clear filters
          </button>
        {/if}
      </div>
    </div>
  {/snippet}
</DashboardPage>
