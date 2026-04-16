<script lang="ts">
  import type { PageData } from "./$types";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Plus, Pencil, Trash2, Search, ArrowUpDown, ShieldCheck, Clock, AlertTriangle, XCircle, Infinity, Eye } from "@lucide/svelte";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";
  import { getFileUrl } from "$lib/storage.client";
  import { enhance } from "$app/forms";

  let { data }: { data: PageData } = $props();

  let search = $state("");
  let statusFilter = $state<"ALL" | "active" | "lifetime" | "expiring" | "expired">("ALL");
  let sortKey = $state<"title" | "issuer" | "issueDate" | "expiryDate" | "status">("issueDate");
  let sortDir = $state<1 | -1>(-1);
  let deleteTarget = $state<any | null>(null);

  type Status = "active" | "lifetime" | "expiring" | "expired";

  function getStatus(cert: any): Status {
    if (!cert.expiryDate) return "lifetime";
    const now = new Date();
    const expiryDate = new Date(cert.expiryDate);
    if (now > expiryDate) return "expired";
    const soon = new Date();
    soon.setMonth(soon.getMonth() + 6);
    if (expiryDate <= soon) return "expiring";
    return "active";
  }

  const statusOrder: Record<Status, number> = { active: 0, lifetime: 1, expiring: 2, expired: 3 };

  function formatDate(date?: string | Date | null) {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }

  const filtered = $derived(
    data.certificates
      .filter((c: any) => {
        const q = search.toLowerCase();
        const mq = !q || c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q);
        const ms = statusFilter === "ALL" || getStatus(c) === statusFilter;
        return mq && ms;
      })
      .sort((a: any, b: any) => {
        if (sortKey === "status") return (statusOrder[getStatus(a)] - statusOrder[getStatus(b)]) * sortDir;
        const av = (a as any)[sortKey] ?? "";
        const bv = (b as any)[sortKey] ?? "";
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
    total: data.certificates.length,
    active: data.certificates.filter((c: any) => getStatus(c) === "active").length,
    expiring: data.certificates.filter((c: any) => getStatus(c) === "expiring").length,
    expired: data.certificates.filter((c: any) => getStatus(c) === "expired").length,
  });

  const hasFilter = $derived(search || statusFilter !== "ALL");

  const statusConfig: Record<Status, { label: string; class: string }> = {
    active: { label: "Active", class: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
    lifetime: { label: "Lifetime", class: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
    expiring: { label: "Expiring soon", class: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
    expired: { label: "Expired", class: "bg-destructive/10 text-destructive border-destructive/20" },
  };
</script>

<DashboardPage title="Certificates" description="Manage your professional certifications and achievements.">
  {#snippet actions()}
    <Button href="/dashboard/certificates/new" class="shadow-sm">
      <Plus class="mr-2 h-4 w-4" />
      Add Certificate
    </Button>
  {/snippet}

  {#snippet children()}
    <!-- Stats -->
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
      {#each [{ label: "Total certificates", value: stats.total }, { label: "Active", value: stats.active }, { label: "Expiring soon", value: stats.expiring }, { label: "Expired", value: stats.expired }] as stat}
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
        <Input bind:value={search} placeholder="Search certificates..." class="pl-8 h-9 text-sm" />
      </div>
      <div class="flex flex-wrap gap-1">
        {#each [{ key: "ALL", label: "All" }, { key: "active", label: "Active" }, { key: "lifetime", label: "Lifetime" }, { key: "expiring", label: "Expiring soon" }, { key: "expired", label: "Expired" }] as s}
          <button
            onclick={() => (statusFilter = s.key as typeof statusFilter)}
            class="rounded-full border px-3 py-1 text-xs font-medium transition-colors
              {statusFilter === s.key ? 'bg-primary text-primary-foreground border-primary' : 'border-border/40 text-muted-foreground hover:bg-muted'}"
          >
            {s.label}
          </button>
        {/each}
      </div>
    </div>

    {#if data.certificates.length === 0}
      <div class="rounded-xl border-2 border-dashed bg-card/50 p-12">
        <div class="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div class="rounded-full bg-muted p-6 shadow-inner">
            <ShieldCheck class="h-8 w-8 text-muted-foreground" />
          </div>
          <div class="space-y-1">
            <h2 class="text-xl font-bold tracking-tight">No Certificates Yet</h2>
            <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Start by adding your first certificate to showcase your achievements.</p>
          </div>
          <Button href="/dashboard/certificates/new" class="mt-2">
            <Plus class="mr-2 h-4 w-4" /> Add Your First Certificate
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
                <Table.Head class="w-70">
                  <button onclick={() => toggleSort("title")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Certificate <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden md:table-cell">
                  <button onclick={() => toggleSort("issuer")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Issuer <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head>
                  <button onclick={() => toggleSort("status")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Status <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden sm:table-cell">
                  <button onclick={() => toggleSort("issueDate")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Issued <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="hidden sm:table-cell">
                  <button onclick={() => toggleSort("expiryDate")} class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">
                    Expires <ArrowUpDown class="h-3 w-3" />
                  </button>
                </Table.Head>
                <Table.Head class="text-right w-30">Actions</Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {#if filtered.length === 0}
                <Table.Row>
                  <Table.Cell colspan={6} class="py-12 text-center text-sm text-muted-foreground">No certificates match your search.</Table.Cell>
                </Table.Row>
              {:else}
                {#each filtered as cert (cert.id)}
                  {@const status = getStatus(cert)}
                  <Table.Row class="group hover:bg-muted/20">
                    <!-- Certificate -->
                    <Table.Cell>
                      <div class="flex items-center gap-3 text-left">
                        {#if cert.thumbnail}
                          <img src={getFileUrl(cert.thumbnail)} alt={cert.title} class="h-10 w-10 rounded-md object-cover border border-border/40 shrink-0" />
                        {:else}
                          <div class="flex h-10 w-10 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">
                            <ShieldCheck class="h-5 w-5 opacity-40" />
                          </div>
                        {/if}
                        <div class="min-w-0">
                          <p class="truncate font-semibold text-sm leading-tight">{cert.title}</p>
                          <p class="text-[10px] text-muted-foreground mt-0.5 md:hidden">{cert.issuer}</p>
                        </div>
                      </div>
                    </Table.Cell>

                    <!-- Issuer -->
                    <Table.Cell class="hidden md:table-cell text-sm text-muted-foreground">
                      {cert.issuer}
                    </Table.Cell>

                    <!-- Status -->
                    <Table.Cell>
                      <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-tight {statusConfig[status].class}">
                        {statusConfig[status].label}
                      </span>
                    </Table.Cell>

                    <!-- Issue date -->
                    <Table.Cell class="hidden sm:table-cell text-xs text-muted-foreground">
                      {formatDate(cert.issueDate)}
                    </Table.Cell>

                    <!-- Expiry date -->
                    <Table.Cell class="hidden sm:table-cell text-xs text-muted-foreground">
                      {formatDate(cert.expiryDate)}
                    </Table.Cell>

                    <!-- Actions -->
                    <Table.Cell class="text-right">
                      <div class="flex justify-end gap-1.5 transition-opacity">
                        <Button variant="ghost" size="icon" href="/dashboard/certificates/{cert.id}/view" class="h-8 w-8 rounded-md border border-border/40 hover:bg-muted" title="View">
                          <Eye class="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" href="/dashboard/certificates/{cert.id}" class="h-8 w-8 rounded-md border border-border/40 hover:bg-muted" title="Edit">
                          <Pencil class="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" type="button" class="h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30" title="Delete" onclick={() => (deleteTarget = cert)}>
                          <Trash2 class="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                {/each}
              {/if}
            </Table.Body>
          </Table.Root>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground">
          <span>Showing {filtered.length} of {data.certificates.length} certificates</span>
          {#if hasFilter}
            <button
              onclick={() => {
                search = "";
                statusFilter = "ALL";
              }}
              class="underline underline-offset-2 hover:text-foreground"
            >
              Clear filters
            </button>
          {/if}
        </div>
      </div>
    {/if}

    <!-- Delete Alert Dialog -->
    <AlertDialog.Root
      open={deleteTarget !== null}
      onOpenChange={(v) => {
        if (!v) deleteTarget = null;
      }}
    >
      <AlertDialog.Content class="rounded-xl">
        <AlertDialog.Header>
          <AlertDialog.Title>Delete Certificate</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete
            <span class="font-semibold text-foreground">"{deleteTarget?.title}"</span>? This action cannot be undone.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel onclick={() => (deleteTarget = null)}>Cancel</AlertDialog.Cancel>
          <form
            action="?/delete"
            method="POST"
            use:enhance={() => {
              return async ({ update }) => {
                await update();
                deleteTarget = null;
              };
            }}
          >
            <input type="hidden" name="id" value={deleteTarget?.id} />
            <Button type="submit" variant="destructive">Delete Certificate</Button>
          </form>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  {/snippet}
</DashboardPage>
