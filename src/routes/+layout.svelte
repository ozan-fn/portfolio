<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    import { ModeWatcher } from 'mode-watcher';
    import { AnimatePresence } from '@humanspeak/svelte-motion';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

{@render children()}
