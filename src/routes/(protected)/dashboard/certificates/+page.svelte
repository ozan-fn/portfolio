<script lang="ts">
    import CrudHeader from '$lib/components/admin/crud-header.svelte';

    let { } = $props();
</script>

<CrudHeader
    title="Certificates"
    description="Manage your certificates here."
    backUrl="/dashboard"
/>

<div class="px-6 pb-6 max-w-7xl w-full mx-auto">
    <div class="rounded-xl border bg-card p-6 shadow-sm">
        <div class="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <div class="text-4xl">🏅</div>
            <h2 class="text-xl font-semibold tracking-tight">Coming Soon</h2>
            <p class="max-w-md text-sm text-muted-foreground">
                The certificates dashboard is empty for now. You can add CRUD for certificates later here.
            </p>
        </div>
    </div>
</div>
