<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Calendar, Clock, ArrowRight, Search, Tag } from '@lucide/svelte';

    // Data Dummy Blog
    const posts = [
        {
            id: 1,
            title: 'Membangun API Cepat dengan Go dan Gin',
            excerpt: 'Kenapa Go menjadi pilihan utama untuk backend modern? Mari kita bedah performa dan cara setup project pertama kamu.',
            date: 'Mar 15, 2026',
            readTime: '5 min read',
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 2,
            title: 'Svelte 5 Runes: Masa Depan Reaktivitas',
            excerpt: 'Penjelasan mendalam tentang $state, $derived, dan $effect. Apa bedanya dengan sistem lama dan kenapa kamu harus pindah?',
            date: 'Apr 02, 2026',
            readTime: '8 min read',
            category: 'Frontend',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Tips Aman Menggunakan Prisma dengan PostgreSQL',
            excerpt: 'Cara mengelola koneksi database, melakukan migration di production, dan optimasi query menggunakan Prisma Client.',
            date: 'Apr 05, 2026',
            readTime: '6 min read',
            category: 'Database',
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop',
        },
    ];

    let searchQuery = $state('');
</script>

<svelte:head>
    <title>Blog | Portfolio Blog</title>
</svelte:head>

<div class="container mx-auto max-w-6xl">
    <div class="bg-primary/3 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner mb-12">
        <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
            <div class="space-y-2">
                <h1 class="text-4xl font-black tracking-tight text-primary leading-tight">Writing ✍️</h1>
                <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">Berbagi pemikiran seputar teknologi koding, dan pengembangan diri.</p>
            </div>

            <div class="relative w-full md:w-80">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Cari artikel..." class="pl-10 bg-background/50 border-primary/10 focus-visible:ring-primary backdrop-blur-sm" bind:value={searchQuery} />
            </div>
        </div>
    </div>

    <div class="mb-12 group cursor-pointer">
        <Card.Root class="overflow-hidden border-none bg-primary/5 shadow-none transition-all hover:bg-primary/10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div class="aspect-video lg:aspect-auto overflow-hidden">
                    <img src={posts[0].image} alt="Featured" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div class="p-8 md:p-12 flex flex-col justify-center space-y-4">
                    <Badge variant="secondary" class="w-fit font-bold tracking-widest">{posts[0].category}</Badge>
                    <h2 class="text-3xl md:text-4xl font-bold tracking-tight">{posts[0].title}</h2>
                    <p class="text-muted-foreground text-lg leading-relaxed">
                        {posts[0].excerpt}
                    </p>
                    <div class="flex items-center gap-4 text-sm text-muted-foreground pb-4">
                        <span class="flex items-center gap-1"><Calendar size={14} /> {posts[0].date}</span>
                        <span class="flex items-center gap-1"><Clock size={14} /> {posts[0].readTime}</span>
                    </div>
                    <Button variant="default" class="w-fit rounded-full px-6">Baca Selengkapnya</Button>
                </div>
            </div>
        </Card.Root>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each posts as post}
            <article class="flex flex-col group cursor-pointer">
                <div class="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-muted">
                    <img src={post.image} alt={post.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute bottom-3 left-3">
                        <Badge class="bg-white/90 text-black border-none backdrop-blur-sm hover:bg-white">{post.category}</Badge>
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                        <span class="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span>•</span>
                        <span class="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>

                    <h3 class="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>

                    <Button variant="link" class="p-0 text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} class="ml-1" />
                    </Button>
                </div>
            </article>
        {/each}
    </div>
</div>
