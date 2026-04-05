<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Label } from '$lib/components/ui/label';
    import { authClient } from '$lib/auth-client';
    import { User, Lock, Camera, ShieldCheck, AlertCircle, Loader2 } from '@lucide/svelte';
    import { enhance } from '$app/forms';
    import { getFileUrl } from '$lib/storage.client.js';

    let { data, form } = $props();

    let isLoading = $state(false);
    let message = $state({ type: '', text: '' });

    // Profile State
    let name = $state('');
    let previewUrl = $state('');
    let fileInput: HTMLInputElement;

    // Password State
    let currentPassword = $state('');
    let newPassword = $state('');
    let confirmPassword = $state('');

    // Inisialisasi data user ke local state
    $effect(() => {
        if (data.user) {
            name = data.user.name || '';
            previewUrl = getFileUrl(data.user.image);
        }
    });

    function handleFileChange(e: Event) {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const file = target.files[0];
            // Bersihkan URL lama jika ada untuk mencegah memory leak
            if (previewUrl.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
            previewUrl = URL.createObjectURL(file);
        }
    }

    async function changePassword() {
        if (!currentPassword || !newPassword || !confirmPassword) {
            message = { type: 'error', text: 'Isi semua field passwordnya dek.' };
            return;
        }

        if (newPassword !== confirmPassword) {
            message = { type: 'error', text: 'Password konfirmasi gak cocok dek, fokus!' };
            return;
        }

        isLoading = true;
        message = { type: '', text: '' };

        const { error } = await authClient.changePassword({
            newPassword,
            currentPassword,
            revokeOtherSessions: true,
        });

        if (error) {
            message = { type: 'error', text: error.message || 'Gagal ganti password.' };
        } else {
            message = { type: 'success', text: 'Password diganti! Jangan sampe lupa lagi.' };
            currentPassword = '';
            newPassword = '';
            confirmPassword = '';
        }
        isLoading = false;
    }
</script>

<div class="flex flex-col gap-6 max-w-4xl mx-auto w-full p-4 lg:p-8">
    <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p class="text-muted-foreground italic text-sm">"Atur profilmu biar gak keliatan amatiran pas di-stalking HR, dek."</p>
    </div>

    {#if form?.message || message.text}
        {@const isError = form?.message?.includes('Gagal') || form?.success === false || message.type === 'error'}
        <div class="flex items-center gap-2 rounded-lg border p-4 text-sm font-medium transition-all {isError ? 'bg-destructive/15 text-destructive border-destructive/20' : 'bg-green-500/15 text-green-500 border-green-500/20'}">
            {#if isError}
                <AlertCircle size={18} />
            {:else}
                <ShieldCheck size={18} />
            {/if}
            {form?.message || message.text}
        </div>
    {/if}

    <div class="flex flex-col gap-6">
        <form
            method="POST"
            action="?/uploadAvatar"
            enctype="multipart/form-data"
            use:enhance={() => {
                isLoading = true;
                return async ({ update }) => {
                    await update();
                    isLoading = false;
                };
            }}
        >
            <Card.Root>
                <Card.Header>
                    <div class="flex items-center gap-2">
                        <Camera size={18} class="text-primary" />
                        <Card.Title class="text-xl font-bold">Profile Picture</Card.Title>
                    </div>
                    <Card.Description>Foto lama otomatis dihapus dari S3 dek.</Card.Description>
                </Card.Header>
                <Card.Content class="flex flex-col items-center gap-4 py-2">
                    <div class="relative group">
                        <input type="file" name="avatar" accept="image/*" class="hidden" bind:this={fileInput} onchange={handleFileChange} />
                        <button type="button" onclick={() => fileInput.click()} class="relative flex size-32 items-center justify-center overflow-hidden rounded-full bg-muted border-2 border-dashed border-primary/20 transition-all hover:border-primary/50">
                            {#if previewUrl}
                                <img src={previewUrl} alt="Avatar" class="aspect-square size-full object-cover" />
                            {:else}
                                <User size={48} class="text-muted-foreground" />
                            {/if}
                            <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                <Camera size={24} class="text-white" />
                            </div>
                        </button>
                    </div>
                    <p class="text-[10px] italic text-muted-foreground">Klik foto buat ganti, dek.</p>
                </Card.Content>
                <Card.Footer class="border-t ">
                    <Button type="submit" disabled={isLoading} class="ml-auto font-bold min-w-[140px]">
                        {#if isLoading}
                            <Loader2 class="mr-2 size-4 animate-spin" />
                            Uploading...
                        {:else}
                            Update Foto
                        {/if}
                    </Button>
                </Card.Footer>
            </Card.Root>
        </form>

        <form
            method="POST"
            action="?/updateProfile"
            use:enhance={() => {
                isLoading = true;
                return async ({ update }) => {
                    await update();
                    isLoading = false;
                };
            }}
        >
            <Card.Root>
                <Card.Header>
                    <div class="flex items-center gap-2">
                        <User size={18} class="text-primary" />
                        <Card.Title class="text-xl font-bold">Basic Information</Card.Title>
                    </div>
                </Card.Header>
                <Card.Content class="space-y-4">
                    <div class="space-y-2">
                        <Label for="name">Display Name</Label>
                        <Input id="name" name="name" bind:value={name} placeholder="Nama beken kamu" disabled={isLoading} />
                    </div>
                    <div class="space-y-2">
                        <Label for="email">Email Address</Label>
                        <Input id="email" type="email" value={data.user?.email} disabled class="bg-muted/50 cursor-not-allowed" />
                    </div>
                </Card.Content>
                <Card.Footer class="border-t ">
                    <Button type="submit" disabled={isLoading} class="ml-auto font-bold min-w-[140px]">
                        {isLoading ? 'Nyimpen...' : 'Simpan Nama'}
                    </Button>
                </Card.Footer>
            </Card.Root>
        </form>

        <Card.Root>
            <Card.Header>
                <div class="flex items-center gap-2">
                    <Lock size={18} class="text-orange-500" />
                    <Card.Title class="text-xl font-bold">Security</Card.Title>
                </div>
            </Card.Header>
            <Card.Content class="space-y-4">
                <div class="space-y-2">
                    <Label for="current">Password Sekarang</Label>
                    <Input id="current" type="password" bind:value={currentPassword} placeholder="••••••••" disabled={isLoading} />
                </div>
                <div class="space-y-2">
                    <Label for="new">Password Baru</Label>
                    <Input id="new" type="password" bind:value={newPassword} placeholder="••••••••" disabled={isLoading} />
                </div>
                <div class="space-y-2">
                    <Label for="confirm">Konfirmasi Password</Label>
                    <Input id="confirm" type="password" bind:value={confirmPassword} placeholder="••••••••" disabled={isLoading} />
                </div>
            </Card.Content>
            <Card.Footer class="border-t ">
                <Button variant="outline" onclick={changePassword} disabled={isLoading} class="ml-auto font-bold border-orange-500/20 text-orange-600 hover:bg-orange-500/10">Ganti Password</Button>
            </Card.Footer>
        </Card.Root>
    </div>
</div>
