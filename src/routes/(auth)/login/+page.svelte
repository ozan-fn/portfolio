<script lang="ts">
    import { authClient } from '$lib/auth-client';
    import { page } from '$app/state';
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';

    let email = $state('');
    let password = $state('');
    let isLoading = $state(false);
    let errorMessage = $state('');

    async function handleLogin(e: SubmitEvent) {
        e.preventDefault();
        isLoading = true;
        errorMessage = '';

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: page.url.searchParams.get('callbackUrl') || '/dashboard',
        });

        if (error) {
            errorMessage = error.message || 'Login failed. Please check your credentials.';
            isLoading = false;
        }
    }
</script>

<div class="flex min-h-screen items-center justify-center bg-muted/40 p-4">
    <Card.Root class="w-full max-w-md">
        <Card.Header class="space-y-1">
            <Card.Title class="text-2xl font-bold">Login</Card.Title>
            <Card.Description class=" text-balance italic">"Mau nyoba bobol kah dek? Belajar dulu yang bener biar gak kena mental pas liat kodenya. 😎"</Card.Description>
        </Card.Header>
        <Card.Content>
            {#if errorMessage}
                <div class="mb-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive font-medium">
                    {errorMessage} <br />
                    <span class="text-xs opacity-80 text-destructive/80">Ciaattt... gagal maning son!</span>
                </div>
            {/if}

            <form onsubmit={handleLogin} class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="si_paling_hacker@gmail.com" bind:value={email} required disabled={isLoading} />
                </div>
                <div class="grid gap-2">
                    <div class="flex items-center justify-between">
                        <Label for="password">Password</Label>
                        <span class="text-[10px] text-muted-foreground uppercase tracking-widest">Hati-hati Typo Dek</span>
                    </div>
                    <Input id="password" type="password" bind:value={password} required disabled={isLoading} />
                </div>
                <Button type="submit" class="w-full font-bold" disabled={isLoading}>
                    {#if isLoading}
                        Lagi Nembus Firewall...
                    {:else}
                        Login (Bukan Bobol Ya!)
                    {/if}
                </Button>
            </form>
        </Card.Content>
        <Card.Footer class="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p class="text-[10px] opacity-50">#AntiBobolClub #BelajarLagiDek</p>
        </Card.Footer>
    </Card.Root>
</div>
