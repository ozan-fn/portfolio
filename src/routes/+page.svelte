<script lang="ts">
    import { motion } from '@humanspeak/svelte-motion';
    import { onDestroy, onMount } from 'svelte';

    // Gunakan $state agar Svelte tahu variabel ini harus dipantau perubahannya
    let b = $state(true);

    // Gunakan tipe yang lebih bersih untuk timer di lingkungan Browser
    let timer: number | undefined;

    onMount(() => {
        console.log('Timer dimulai...');
        timer = window.setTimeout(() => {
            b = false;
            console.log('Variabel b sekarang false');
        }, 2000);
    });

    onDestroy(() => {
        if (timer) {
            clearTimeout(timer);
            console.log('Timer dibersihkan!');
        }
    });
</script>

<div class="max-w-7xl mx-auto min-h-screen py-6 w-full flex flex-col items-center gap-4">
    {#if b}
        <motion.div layoutId="color" transition={{ type: 'spring' }} class="size-24 bg-red-500 shadow-lg"></motion.div>
    {:else}
        <motion.div layoutId="color" transition={{ type: 'spring' }} class="ml-50 size-24 bg-green-500 shadow-lg"></motion.div>
    {/if}

    <button onclick={() => (b = !b)}>Toggle</button>
</div>
