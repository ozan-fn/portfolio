<script>
    import { goto } from '$app/navigation';
    import { authClient } from '$lib/auth-client';
</script>

dashboard
<button
    onclick={() => {
        authClient.signOut();
        goto('/login');
    }}
>
    Sign Out
</button>
