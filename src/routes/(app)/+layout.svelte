<script lang="ts">
    import { page } from '$app/state';
    import { onNavigate } from '$app/navigation';
    import { motion, AnimatePresence } from '@humanspeak/svelte-motion';

    // Import Sidebar yang sudah dipisahkan
    import Sidebar from '$lib/components/Sidebar.svelte';

    let { children } = $props();

    let currentKey = $state(page.url.pathname);

    onNavigate((nav) => {
        if (nav.from?.url.pathname !== nav.to?.url.pathname) {
            // @ts-ignore
            currentKey = nav.to?.url.pathname || '';
        }
    });
</script>

<div class="max-w-7xl mx-auto min-h-screen flex py-6 md:py-10 px-4 w-full bg-background text-foreground">
    <div class="flex flex-col md:flex-row flex-1 gap-8">
        <Sidebar />

        <main class="flex-1 flex">
            <AnimatePresence mode="wait">
                {#key currentKey}
                    <motion.div key={currentKey} initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: 'easeOut' }} class="flex-1 flex flex-col">
                        {@render children()}
                    </motion.div>
                {/key}
            </AnimatePresence>
        </main>
    </div>
</div>
