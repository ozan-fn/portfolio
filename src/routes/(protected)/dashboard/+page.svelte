<script module>
  import { Plus } from "@lucide/svelte";
</script>

<script lang="ts">
  import { Briefcase, FileText, Tag, ArrowUpRight } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import DashboardPage from "$lib/components/admin/dashboard-page.svelte";
</script>

<DashboardPage title="Dashboard Overview" description="Welcome back to your control center.">
  {#snippet children()}
    <!-- Quick Stats Grid -->
    <div class="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex items-center justify-between space-y-0 pb-2">
          <h3 class="text-sm font-medium">Total Projects</h3>
          <Briefcase class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="flex items-end justify-between">
          <div class="text-2xl font-bold">12</div>
          <Button variant="ghost" size="sm" href="/dashboard/projects" class="h-8 px-2 text-xs">
            View All <ArrowUpRight class="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <div class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex items-center justify-between space-y-0 pb-2">
          <h3 class="text-sm font-medium">Blog Posts</h3>
          <FileText class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="flex items-end justify-between">
          <div class="text-2xl font-bold">24</div>
          <Button variant="ghost" size="sm" href="/dashboard/blog" class="h-8 px-2 text-xs">
            View All <ArrowUpRight class="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <div class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex items-center justify-between space-y-0 pb-2">
          <h3 class="text-sm font-medium">Categories</h3>
          <Tag class="h-4 w-4 text-muted-foreground" />
        </div>
        <div class="flex items-end justify-between">
          <div class="text-2xl font-bold">8</div>
          <Button variant="ghost" size="sm" href="/dashboard/categories" class="h-8 px-2 text-xs">
            View All <ArrowUpRight class="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <div class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex items-center justify-between space-y-0 pb-2">
          <h3 class="text-sm font-medium">Admin Status</h3>
          <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
        <div class="text-2xl font-bold">Active</div>
        <p class="text-[10px] text-muted-foreground mt-1">Last login: Today</p>
      </div>
    </div>

    <!-- Recent Activity Placeholder -->
    <div class="w-full grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px] flex flex-col gap-4">
        <h3 class="font-semibold">Quick Actions</h3>
        <div class="grid grid-cols-2 gap-4">
          <Button variant="outline" class="h-24 flex-col gap-2" href="/dashboard/projects/new">
            <Plus size={20} />
            <span>New Project</span>
          </Button>
          <Button variant="outline" class="h-24 flex-col gap-2" href="/dashboard/blog/new">
            <Plus size={20} />
            <span>New Article</span>
          </Button>
        </div>
      </div>

      <div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px]">
        <h3 class="font-semibold mb-4">System Status</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between text-sm border-b pb-2">
            <span class="text-muted-foreground">Framework</span>
            <span class="font-medium">SvelteKit 2 / Svelte 5</span>
          </div>
          <div class="flex items-center justify-between text-sm border-b pb-2">
            <span class="text-muted-foreground">Database</span>
            <span class="font-medium text-emerald-600">Connected (Neon/Prisma)</span>
          </div>
          <div class="flex items-center justify-between text-sm border-b pb-2">
            <span class="text-muted-foreground">Auth</span>
            <span class="font-medium">Better-Auth</span>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</DashboardPage>
