<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="px-6 py-6 max-w-7xl w-full mx-auto">
  {@render children()}
</div>
