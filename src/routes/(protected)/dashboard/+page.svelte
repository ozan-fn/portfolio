<script>
    import { goto } from '$app/navigation';
    import { authClient } from '$lib/auth-client';
    import MilkdownEditor from '$lib/components/milkdown-editor.svelte';
</script>

<div class="flex flex-col">
    dashboard
    <button
        onclick={() => {
            authClient.signOut();
            goto('/login');
        }}
    >
        Sign Out
    </button>

    <MilkdownEditor content="Halo dari Prisma!" />
</div>
