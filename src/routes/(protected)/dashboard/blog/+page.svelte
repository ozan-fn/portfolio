<script lang="ts">
  import type { PageData } from "./$types";
  import * as Table from "$lib/components/ui/table/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Plus, Pencil, Trash2, Eye, FileText, Globe, Lock } from "@lucide/svelte";
  import { formatDate, calculateReadTime, generateExcerpt } from "$lib/utils";
  import { enhance } from "$app/forms";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";

  let { data }: { data: PageData } = $props();

  let isToggling = $state<string | null>(null);
</script>

<DashboardPage title="Blog Posts" description="Manage your articles and thoughts.">
  {#snippet actions()}
    <Button href="/dashboard/blog/new">
      <Plus class="mr-2 h-4 w-4" />
      New Post
    </Button>
  {/snippet}

  {#snippet children()}
    <div class="rounded-md border bg-card shadow-sm">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[400px]">Post</Table.Head>
            <Table.Head>Category</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Stats</Table.Head>
            <Table.Head>Date</Table.Head>
            <Table.Head class="text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#if data.posts.length === 0}
            <Table.Row>
              <Table.Cell colspan={6} class="h-24 text-center text-muted-foreground">No posts found. Start writing your first article!</Table.Cell>
            </Table.Row>
          {:else}
            {#each data.posts as post (post.id)}
              <Table.Row>
                <Table.Cell>
                  <div class="flex flex-col gap-1">
                    <span class="font-medium line-clamp-1">{post.title}</span>
                    <span class="text-xs text-muted-foreground line-clamp-1 italic">
                      {generateExcerpt(post.content, 60)}
                    </span>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="secondary" class="font-normal">
                    {post.category.name}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
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
                    <button type="submit" disabled={isToggling === post.id} class="flex items-center gap-1.5 transition-opacity hover:opacity-80 disabled:opacity-50">
                      {#if post.published}
                        <Badge class="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 gap-1">
                          <Globe size={12} /> Published
                        </Badge>
                      {:else}
                        <Badge variant="outline" class="text-muted-foreground gap-1">
                          <Lock size={12} /> Draft
                        </Badge>
                      {/if}
                    </button>
                  </form>
                </Table.Cell>
                <Table.Cell>
                  <div class="flex items-center text-xs text-muted-foreground">
                    <FileText class="mr-1 h-3.5 w-3.5" />
                    {calculateReadTime(post.content)}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span class="text-muted-foreground text-sm">
                    {formatDate(post.createdAt)}
                  </span>
                </Table.Cell>
                <Table.Cell class="text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" href="/blog/{post.slug}" target="_blank" class="h-8 w-8">
                      <Eye class="h-4 w-4" />
                      <span class="sr-only">Preview</span>
                    </Button>
                    <Button variant="ghost" size="icon" href="/dashboard/blog/{post.id}" class="h-8 w-8">
                      <Pencil class="h-4 w-4" />
                      <span class="sr-only">Edit</span>
                    </Button>
                    <form
                      action="?/delete"
                      method="POST"
                      use:enhance={({ cancel }) => {
                        if (!confirm("Are you sure you want to delete this post?")) {
                          cancel();
                        }
                        return async ({ update }) => {
                          await update();
                        };
                      }}
                    >
                      <input type="hidden" name="id" value={post.id} />
                      <Button variant="ghost" size="icon" type="submit" class="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 class="h-4 w-4" />
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
  {/snippet}
</DashboardPage>
