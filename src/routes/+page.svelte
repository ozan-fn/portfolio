<script lang="ts">
    import ThemeToggle from "$lib/components/theme-toggle.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<div class="border-b py-2">
    <div class="mx-auto max-w-7xl w-full">
        <div class="flex flex-row">
            <Button>Click me</Button>

            <div class="ml-auto">
                <ThemeToggle />
            </div>
        </div>
    </div>
</div>
