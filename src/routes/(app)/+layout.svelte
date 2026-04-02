<script lang="ts">
    import profile from '$lib/assets/images/Kaguya.avif';
    import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
    import { Badge } from '$lib/components/ui/badge';
    import { Separator } from '$lib/components/ui/separator';
    import { Card, CardContent } from '$lib/components/ui/card';
    import { Circle, FolderCode, Gamepad2, Home, Mail, PenTool } from '@lucide/svelte';
    import { page } from '$app/state';
    import { onNavigate } from '$app/navigation';
    import { motion, AnimatePresence } from '@humanspeak/svelte-motion';

    let { children } = $props();

    let currentKey = $state(page.url.pathname);

    const menuItems = [
        { id: 'home', label: 'Home', icon: Home, path: '/' },
        { id: 'projects', label: 'Projects', icon: FolderCode, path: '/projects' },
        { id: 'blog', label: 'Blog', icon: PenTool, path: '/blog' },
        { id: 'contact', label: 'Contact', icon: Mail, path: '/contact' },
        { id: 'game', label: 'Mini Game', icon: Gamepad2, path: '/game' },
    ];

    const techStack = ['Golang', 'Rust', 'Next.js', 'Svelte', 'Wails', 'Roblox'];

    let activeTab = $derived(page.url.pathname === '/' ? 'home' : page.url.pathname.split('/')[1]);

    onNavigate((nav) => {
        if (nav.from?.url.pathname !== nav.to?.url.pathname) {
            // @ts-ignore
            currentKey = nav.to?.url.pathname || '';
        }
    });
</script>

<div class="max-w-7xl mx-auto min-h-screen flex py-6 md:py-10 px-4 w-full bg-background text-foreground">
    <div class="flex flex-col md:flex-row flex-1 gap-8">
        <aside class="flex flex-col w-full md:max-w-70 shrink-0">
            <Card class="sticky top-10 border-muted/50 overflow-hidden rounded-xl shadow-sm">
                <CardContent class="pt-10 px-6 pb-8">
                    <div class="flex flex-col items-center text-center mb-8">
                        <div class="relative mb-5">
                            <Avatar class="size-24 ring-4 ring-muted/20">
                                <AvatarImage src={profile} alt="Akhmad Fauzan" />
                                <AvatarFallback>AF</AvatarFallback>
                            </Avatar>
                            <div class="absolute bottom-1 right-1 size-5 bg-background rounded-full flex items-center justify-center border-2 border-background shadow-sm">
                                <Circle class="size-3 fill-green-500 text-green-500" />
                            </div>
                        </div>
                        <h2 class="text-xl font-bold tracking-tight">Akhmad Fauzan</h2>
                        <p class="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] mt-1.5 opacity-80">Developer • Purbalingga</p>
                    </div>

                    <Separator class="mb-8 opacity-50" />

                    <nav class="flex flex-col gap-1.5 relative">
                        {#each menuItems as item}
                            <a href={item.path} class="relative group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all outline-none" class:text-primary={activeTab === item.id} class:text-muted-foreground={activeTab !== item.id}>
                                {#if activeTab === item.id}
                                    <motion.div layoutId="active-pill" class="absolute inset-0 bg-secondary rounded-lg -z-10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                                {/if}
                                <item.icon class="size-4.5 relative z-10 {activeTab === item.id ? 'text-primary' : 'group-hover:text-primary transition-colors'}" />
                                <span class="relative z-10">{item.label}</span>
                            </a>
                        {/each}
                    </nav>

                    <Separator class="my-8 opacity-50" />

                    <div class="px-2">
                        <p class="text-[10px] uppercase font-black text-muted-foreground/50 tracking-widest mb-4">Tech Stack</p>
                        <div class="flex flex-wrap gap-2">
                            {#each techStack as tech}
                                <Badge variant="secondary" class="text-[10px] font-bold bg-muted/40 border-none rounded-md">{tech}</Badge>
                            {/each}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </aside>

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
