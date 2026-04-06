<script lang="ts">
    import { enhance } from '$app/forms';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Loader2, Save } from '@lucide/svelte';
    import type { Snippet } from 'svelte';

    let {
        action = '',
        isLoading = $bindable(false),
        main,
        sidebar,
        cancelUrl,
        submitLabel = 'Save Changes',
        onSuccess,
    }: {
        action?: string;
        isLoading: boolean;
        main: Snippet;
        sidebar: Snippet;
        cancelUrl: string;
        submitLabel?: string;
        onSuccess?: () => void;
    } = $props();
</script>

<form
    method="POST"
    {action}
    use:enhance={() => {
        isLoading = true;
        return async ({ update, result }) => {
            await update();
            isLoading = false;
            if (result.type === 'success' && onSuccess) {
                onSuccess();
            }
        };
    }}
    class="px-6 pb-6 max-w-7xl w-full mx-auto grid gap-6 lg:grid-cols-[1fr_300px]"
>
    <!-- Main Content Area -->
    <div class="space-y-6">
        <div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">
            {@render main()}
        </div>
    </div>

    <!-- Sidebar Area -->
    <div class="space-y-6">
        <div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">
            <h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Options</h3>

            <div class="space-y-4">
                {@render sidebar()}
            </div>

            <div class="flex flex-col gap-2 pt-4 border-t">
                <Button type="submit" disabled={isLoading} class="w-full">
                    {#if isLoading}
                        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                    {:else}
                        <Save class="mr-2 h-4 w-4" />
                        {submitLabel}
                    {/if}
                </Button>
                <Button variant="ghost" href={cancelUrl} disabled={isLoading} class="w-full">Cancel</Button>
            </div>
        </div>
    </div>
</form>
