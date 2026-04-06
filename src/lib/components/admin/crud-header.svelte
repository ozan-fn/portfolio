<script lang="ts">
    import { Button } from '$lib/components/ui/button/index.js';
    import { ChevronLeft } from '@lucide/svelte';
    import type { Snippet } from 'svelte';

    let {
        title,
        description,
        backUrl,
        actions,
    }: {
        title: string;
        description?: string;
        backUrl?: string;
        actions?: Snippet;
    } = $props();
</script>

<div class="px-6 py-6 max-w-7xl w-full mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div class="flex items-center gap-4">
        {#if backUrl}
            <Button variant="outline" size="icon" href={backUrl} class="h-9 w-9">
                <ChevronLeft class="h-4 w-4" />
                <span class="sr-only">Back</span>
            </Button>
        {/if}
        <div>
            <h1 class="text-3xl font-bold tracking-tight">{title}</h1>
            {#if description}
                <p class="text-muted-foreground mt-1 text-sm">{description}</p>
            {/if}
        </div>
    </div>

    {#if actions}
        <div class="flex items-center gap-2">
            {@render actions()}
        </div>
    {/if}
</div>
