<script lang="ts">
    import profile from '$lib/assets/images/Kaguya.jpg';
    import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
    import { Badge } from '$lib/components/ui/badge';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
    import { ScrollArea } from '$lib/components/ui/scroll-area';
    import { Separator } from '$lib/components/ui/separator';

    import { Home, FolderCode, PenTool, Mail, Circle } from '@lucide/svelte';

    // Import Motion & AnimatePresence
    import { motion, AnimatePresence } from '@humanspeak/svelte-motion';

    let activeTab = $state('home');

    const menuItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'projects', label: 'Projects', icon: FolderCode },
        { id: 'blog', label: 'Blog', icon: PenTool },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    const techStack = ['Golang', 'Rust', 'Next.js', 'Svelte', 'Wails', 'Roblox'];
</script>

<div class="max-w-7xl mx-auto min-h-screen flex py-6 px-4 w-full bg-background text-foreground font-sans">
    <div class="flex flex-col md:flex-row flex-1 gap-6">
        <div class="flex flex-col w-full md:max-w-64 gap-4">
            <Card class="sticky top-6 border-muted/50 shadow-sm">
                <CardContent class="pt-8 px-4 pb-6">
                    <div class="flex flex-col items-center text-center mb-6">
                        <div class="relative mb-4">
                            <Avatar class="size-24 ring-4 ring-muted/30">
                                <AvatarImage src={profile} alt="Akhmad Fauzan" />
                                <AvatarFallback>AF</AvatarFallback>
                            </Avatar>
                            <div class="absolute bottom-1 right-1 size-5 bg-background rounded-full flex items-center justify-center shadow-sm">
                                <Circle class="size-3 fill-green-500 text-green-500" />
                            </div>
                        </div>
                        <h2 class="text-lg font-bold tracking-tight">Akhmad Fauzan</h2>
                        <p class="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter">Developer • Purbalingga</p>
                    </div>

                    <Separator class="my-4" />

                    <nav class="flex flex-col gap-1 relative">
                        {#each menuItems as item}
                            <button class="relative justify-start gap-3 w-full font-medium px-4 py-2.5 text-sm flex items-center rounded-md transition-colors outline-none group overflow-hidden" onclick={() => (activeTab = item.id)} class:text-primary={activeTab === item.id} class:text-muted-foreground={activeTab !== item.id}>
                                {#if activeTab === item.id}
                                    <motion.div layoutId="active-pill" class="absolute inset-0 bg-secondary rounded-md -z-10" transition={{ type: 'spring', stiffness: 350, damping: 25 }} />
                                {/if}

                                <item.icon class="size-4 relative z-10 {activeTab === item.id ? 'text-primary' : 'group-hover:text-primary transition-colors'}" />
                                <span class="relative z-10">{item.label}</span>
                            </button>
                        {/each}
                    </nav>

                    <Separator class="my-6" />

                    <div class="px-2">
                        <p class="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-3">Tech Stack</p>
                        <div class="flex flex-wrap gap-1.5">
                            {#each techStack as tech}
                                <Badge variant="outline" class="text-[10px] font-medium bg-muted/20 border-muted-foreground/20">{tech}</Badge>
                            {/each}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div class="flex flex-col flex-1 min-w-0 h-full">
            <Card class="flex-1 flex flex-col shadow-md border-muted/50 overflow-hidden bg-card/30 backdrop-blur-sm">
                <CardHeader class="border-b bg-muted/5 py-4 px-6 z-10">
                    <div class="flex justify-between items-center">
                        <CardTitle class="text-xl font-bold capitalize tracking-tight">{activeTab}</CardTitle>
                        <Badge variant="secondary" class="font-mono text-[10px]">v1.0.0</Badge>
                    </div>
                </CardHeader>

                <ScrollArea class="flex-1 overflow-hidden">
                    <div class="p-6 h-full">
                        <AnimatePresence mode="wait">
                            {#if activeTab === 'home'}
                                <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeInOut' }} class="space-y-6">
                                    <div class="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-inner">
                                        <h3 class="text-3xl font-black mb-3 tracking-tight text-primary">Hello, I'm Ozan! 👋</h3>
                                        <p class="text-muted-foreground text-lg leading-relaxed">
                                            Developer asal Purbalingga yang hobi ngoprek <strong>Golang</strong> dan
                                            <strong>Rust</strong>. Fokus membangun <em>local server manager</em>
                                            dan mengelola channel horor <strong>Kafuu Mysteri</strong>.
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Card class="bg-card/40 border-dashed hover:border-primary/50 transition-colors">
                                            <CardHeader class="pb-2 text-primary font-bold text-xs uppercase">Latest Activity</CardHeader>
                                            <CardContent class="text-sm font-medium">Optimizing zfn-movie SEO...</CardContent>
                                        </Card>
                                        <Card class="bg-card/40 border-dashed hover:border-primary/50 transition-colors">
                                            <CardHeader class="pb-2 text-primary font-bold text-xs uppercase">In Progress</CardHeader>
                                            <CardContent class="text-sm font-medium">Wails + React Desktop App</CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            {:else if activeTab === 'projects'}
                                <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeInOut' }} class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {#each Array(2) as _, i}
                                        <Card class="hover:border-primary/50 transition-all hover:-translate-y-1 cursor-pointer group border-muted shadow-sm hover:shadow-primary/10">
                                            <CardHeader>
                                                <div class="flex justify-between items-start mb-2">
                                                    <div class="p-2 bg-primary/10 rounded-lg">
                                                        <FolderCode class="size-5 text-primary" />
                                                    </div>
                                                    <Badge variant="outline" class="text-[10px]">Open Source</Badge>
                                                </div>
                                                <CardTitle class="text-lg group-hover:text-primary transition-colors">Project {i === 0 ? 'Kafuu Mysteri' : 'ZFN Movie'}</CardTitle>
                                                <CardDescription>A brief description of {i === 0 ? 'Youtube development' : 'SEO Optimization'}.</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    {/each}
                                </motion.div>
                            {:else}
                                <motion.div key="placeholder" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} class="flex flex-col items-center justify-center py-32 text-muted-foreground">
                                    <p class="italic animate-pulse text-sm">Building the {activeTab} section...</p>
                                </motion.div>
                            {/if}
                        </AnimatePresence>
                    </div>
                </ScrollArea>
            </Card>
        </div>
    </div>
</div>
