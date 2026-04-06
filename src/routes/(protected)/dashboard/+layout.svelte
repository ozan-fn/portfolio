<script lang="ts">
    import * as Sidebar from '$lib/components/ui/sidebar/index.js';
    import AdminSidebar from '$lib/components/admin-sidebar.svelte';
    import { Separator } from '$lib/components/ui/separator';

    let { children } = $props();
</script>

<Sidebar.Provider>
    <AdminSidebar />
    <Sidebar.Inset>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div class="flex items-center gap-2">
                <Sidebar.Trigger class="-ml-1" />
                <Separator orientation="vertical" class="mr-2 h-4" />
                <div class="flex items-center gap-2 px-2">
                    <span class="text-sm font-medium text-muted-foreground italic">"Bobol kah dek? Gak semudah itu."</span>
                </div>
            </div>
        </header>
        <main class="flex flex-1 flex-col">
            {@render children?.()}
        </main>
    </Sidebar.Inset>
</Sidebar.Provider>
