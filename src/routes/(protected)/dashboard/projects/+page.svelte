<script lang="ts">
  import type { PageData } from "./$types";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Badge from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Plus, Pencil, Trash2, ExternalLink, Code, Eye, MoreHorizontal, Search, ArrowUpDown, Calendar, Layers, FolderOpen } from "@lucide/svelte";
  import { enhance } from "$app/forms";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";
  import { getFileUrl } from "$lib/storage.client.js";

  let { data }: { data: PageData } = $props();

  let search = $state("");
  let statusFilter = $state("ALL");
  let sortKey = $state<"title" | "status" | "updatedAt">("updatedAt");
  let sortDir = $state<1 | -1>(-1);

  const statuses = ["ALL", "COMPLETED", "IN_PROGRESS", "ARCHIVED"];

  const statusLabel: Record<string, string> = {
    COMPLETED: "Completed",
    IN_PROGRESS: "In Progress",
    ARCHIVED: "Archived",
  };

  const statusVariant: Record<string, string> = {
    COMPLETED: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    IN_PROGRESS: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    ARCHIVED: "bg-slate-500/10 text-slate-500 border-slate-500/20",
  };

  const filtered = $derived(
    data.projects
      .filter((p) => {
        const q = search.toLowerCase();
        const matchSearch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.techStack.some((t) => t.toLowerCase().includes(q));
        const matchStatus = statusFilter === "ALL" || p.status === statusFilter;
        return matchSearch && matchStatus;
      })
      .sort((a, b) => {
        const av = a[sortKey] ?? "";
        const bv = b[sortKey] ?? "";
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
    total: data.projects.length,
    completed: data.projects.filter((p) => p.status === "COMPLETED").length,
    inProgress: data.projects.filter((p) => p.status === "IN_PROGRESS").length,
    archived: data.projects.filter((p) => p.status === "ARCHIVED").length,
  });

  const getImageId = (index: number) => (index % 50) + 1;
</script>

<DashboardPage title="Projects" description="Manage your portfolio projects and showcase your best work.">
  {#snippet actions()}
    <Button href="/dashboard/projects/new" class="shadow-sm">
      <Plus class="mr-2 h-4 w-4" />
      Add Project
    </Button>
  {/snippet}

  {#snippet children()}
    <!-- Stats row -->
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
      {#each [{ label: "Total projects", value: stats.total }, { label: "Completed", value: stats.completed }, { label: "In progress", value: stats.inProgress }, { label: "Archived", value: stats.archived }] as stat}
        <div class="rounded-lg bg-muted/50 p-4">
          <p class="text-xs text-muted-foreground">{stat.label}</p>
          <p class="mt-1 text-2xl font-bold tracking-tight">{stat.value}</p>
        </div>
      {/each}
    </div>

    <!-- Filters -->
    <div class="mb-4 flex flex-wrap items-center gap-3">
      <div class="relative flex-1 min-w-45">
        <Search class="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input bind:value={search} placeholder="Search projects..." class="pl-8 h-9 text-sm" />
      </div>
      <div class="flex flex-wrap gap-1">
        {#each statuses as s}
          <button
            onclick={() => (statusFilter = s)}
            class="rounded-full border px-3 py-1 text-xs font-medium transition-colors
              {statusFilter === s ? 'bg-primary text-primary-foreground border-primary' : 'border-border/40 text-muted-foreground hover:bg-muted'}"
          >
            {s === "ALL" ? "All" : statusLabel[s]}
          </button>
        {/each}
      </div>
    </div>

    {#if data.projects.length === 0}
      <!-- Empty state -->
      <div class="rounded-xl border-2 border-dashed bg-card/50 p-12">
        <div class="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div class="rounded-full bg-muted p-6 shadow-inner">
            <FolderOpen class="h-8 w-8 text-muted-foreground" />
          </div>
          <div class="space-y-1">
            <h2 class="text-xl font-bold tracking-tight">No Projects Yet</h2>
            <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Your portfolio is empty. Time to showcase your amazing work!</p>
          </div>
          <Button href="/dashboard/projects/new" class="mt-2">
            <Plus class="mr-2 h-4 w-4" /> Create First Project
          </Button>
        </div>
      </div>
    {:else}
      <!-- Table -->
      <div class="rounded-xl border border-border/40 overflow-hidden">
        <div class="overflow-x-auto">
          <Table.Root>
            <Table.Header>
              <Table.Row class="bg-muted/30 hover:bg-muted/30">
                <Table.Head class="w-60">
                  <button onclick={() => toggleSort("title")} class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Project <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden md:table-cell">Description</Table.Head>
                <Table.Head>
                  <button onclick={() => toggleSort("status")} class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Status <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden lg:table-cell">Tech Stack</Table.Head>
                <Table.Head class="hidden sm:table-cell">
                  <button onclick={() => toggleSort("updatedAt")} class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Updated <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden sm:table-cell">Links</Table.Head>
                <Table.Head class="text-right w-30">Actions</Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {#if filtered.length === 0}
                <Table.Row>
                  <Table.Cell colspan={7} class="py-12 text-center text-sm text-muted-foreground">No projects match your search.</Table.Cell>
                </Table.Row>
              {:else}
                {#each filtered as project, index (project.id)}
                  <Table.Row class="group hover:bg-muted/20">
                    <!-- Project -->
                    <Table.Cell>
                      <div class="flex items-center gap-3">
                        {#if project.thumbnail}
                          <img src={getFileUrl(project.thumbnail)} alt={project.title} class="h-9 w-9 rounded-md object-cover border border-border/40 shrink-0" />
                        {:else}
                          <div class="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">
                            <FolderOpen class="h-4 w-4" />
                          </div>
                        {/if}
                        <div class="min-w-0">
                          <p class="truncate font-semibold text-sm leading-tight">{project.title}</p>
                          <p class="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2">
                            <span class="flex items-center gap-1">
                              <Layers class="h-3 w-3" />
                              {project.techStack.length} tools
                            </span>
                            <span class="flex items-center gap-1">
                              <Calendar class="h-3 w-3" />
                              {new Date(project.updatedAt).toLocaleDateString()}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Table.Cell>

                    <!-- Description -->
                    <Table.Cell class="hidden md:table-cell max-w-50">
                      <p class="truncate text-xs text-muted-foreground">{project.description}</p>
                    </Table.Cell>

                    <!-- Status -->
                    <Table.Cell>
                      <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tight {statusVariant[project.status]}">
                        {statusLabel[project.status] ?? project.status}
                      </span>
                    </Table.Cell>

                    <!-- Tech Stack -->
                    <Table.Cell class="hidden lg:table-cell">
                      <div class="flex flex-wrap gap-1">
                        {#each project.techStack.slice(0, 3) as tech}
                          <span class="rounded-sm bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground border-none">
                            {tech}
                          </span>
                        {/each}
                        {#if project.techStack.length > 3}
                          <span class="text-[10px] text-muted-foreground/60 self-center">
                            +{project.techStack.length - 3}
                          </span>
                        {/if}
                      </div>
                    </Table.Cell>

                    <!-- Updated -->
                    <Table.Cell class="hidden sm:table-cell">
                      <span class="text-xs text-muted-foreground">
                        {new Date(project.updatedAt).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </Table.Cell>

                    <!-- Links -->
                    <Table.Cell class="hidden sm:table-cell">
                      <div class="flex gap-1.5">
                        {#if project.githubUrl}
                          <a href={project.githubUrl} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Source code">
                            <Code class="h-3.5 w-3.5" />
                          </a>
                        {/if}
                        {#if project.demoUrl}
                          <a href={project.demoUrl} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Live demo">
                            <ExternalLink class="h-3.5 w-3.5" />
                          </a>
                        {/if}
                      </div>
                    </Table.Cell>

                    <!-- Actions -->
                    <Table.Cell class="text-right">
                      <div class="flex items-center justify-end gap-1.5 transition-opacity">
                        <Button href="/dashboard/projects/{project.id}/view" variant="ghost" size="icon" class="h-8 w-8 rounded-md hover:bg-muted" title="View Project">
                          <Eye class="h-4 w-4" />
                        </Button>
                        <Button href="/dashboard/projects/{project.id}" variant="ghost" size="icon" class="h-8 w-8 rounded-md hover:bg-muted" title="Edit Project">
                          <Pencil class="h-4 w-4" />
                        </Button>

                        <form
                          action="?/delete"
                          method="POST"
                          use:enhance={({ cancel }) => {
                            if (!confirm("Are you sure? This action cannot be undone.")) cancel();
                            return async ({ update }) => {
                              await update();
                            };
                          }}
                        >
                          <input type="hidden" name="id" value={project.id} />
                          <Button type="submit" variant="ghost" size="icon" class="h-8 w-8 rounded-md text-destructive hover:bg-destructive/10 hover:text-destructive" title="Delete Project">
                            <Trash2 class="h-4 w-4" />
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
          <span>Showing {filtered.length} of {data.projects.length} projects</span>
          {#if search || statusFilter !== "ALL"}
            <button
              onclick={() => {
                search = "";
                statusFilter = "ALL";
              }}
              class="hover:text-foreground underline underline-offset-2"
            >
              Clear filters
            </button>
          {/if}
        </div>
      </div>
    {/if}
  {/snippet}
</DashboardPage>
