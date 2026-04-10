<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    description?: string;
    actions?: Snippet;
  }

  let { title, description, actions }: Props = $props();
</script>

<div class="px-6 py-6 max-w-7xl w-full mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <div class="flex flex-col gap-1">
    <h1 class="text-3xl font-bold tracking-tight">{title}</h1>
    {#if description}
      <p class="text-muted-foreground text-sm italic">{description}</p>
    {/if}
  </div>

  {#if actions}
    <div class="flex items-center gap-2">
      {@render actions()}
    </div>
  {/if}
</div>
