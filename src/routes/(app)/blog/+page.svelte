<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as AspectRatio from "$lib/components/ui/aspect-ratio";
  import { Calendar, Clock, ArrowRight, Search, PenTool, Eye, Heart, Hash } from "@lucide/svelte";

  // Data Dummy Blog yang Diperkaya
  const posts = [
    {
      id: 1,
      title: "Membangun API Cepat dengan Go dan Gin",
      excerpt: "Kenapa Go menjadi pilihan utama untuk backend modern? Mari kita bedah performa dan cara setup project pertama kamu.",
      date: "Mar 15, 2026",
      readTime: "5 min read",
      category: "Backend",
      tags: ["Golang", "API", "Performance"],
      views: "1.2K",
      likes: 128,
      author: { name: "Ozan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ozan" },
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Svelte 5 Runes: Masa Depan Reaktivitas",
      excerpt: "Penjelasan mendalam tentang $state, $derived, dan $effect. Apa bedanya dengan sistem lama dan kenapa kamu harus pindah?",
      date: "Apr 02, 2026",
      readTime: "8 min read",
      category: "Frontend",
      tags: ["Svelte", "JavaScript", "UI"],
      views: "840",
      likes: 95,
      author: { name: "Ozan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ozan" },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Tips Aman Menggunakan Prisma dengan PostgreSQL",
      excerpt: "Cara mengelola koneksi database, melakukan migration di production, dan optimasi query menggunakan Prisma Client.",
      date: "Apr 05, 2026",
      readTime: "6 min read",
      category: "Database",
      tags: ["Prisma", "PostgreSQL", "ORM"],
      views: "1.5K",
      likes: 210,
      author: { name: "Ozan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ozan" },
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  let searchQuery = $state("");

  // Pisahkan featured post dan regular posts
  const featuredPost = $derived(posts[0]);
  const regularPosts = $derived(posts.slice(1));
</script>

<svelte:head>
  <title>Writing | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6 pb-10">
  <div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>

    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <PenTool size={16} class="text-primary" />
          <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Articles</span>
        </div>
        <h3 class="text-4xl font-black tracking-tight text-primary leading-tight">Writing ✍️</h3>
        <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">Berbagi pemikiran seputar teknologi, koding, dan pengembangan diri.</p>
      </div>

      <div class="relative w-full md:w-80">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Cari artikel..." class="pl-10 h-11 bg-background/50 border-border rounded-xl focus-visible:ring-primary backdrop-blur-sm text-sm" bind:value={searchQuery} />
      </div>
    </div>
  </div>

  {#if featuredPost}
    <div class="mt-2">
      <Card.Root class="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col lg:flex-row transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
        <div class="relative w-full lg:w-3/5 overflow-hidden border-b lg:border-b-0 lg:border-r border-border">
          <AspectRatio.Root ratio={16 / 9} class="h-full">
            <img src={featuredPost.image} alt={featuredPost.title} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </AspectRatio.Root>

          <div class="absolute top-4 left-4">
            <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-primary/20 bg-background/90 text-primary shadow-sm">
              Featured • {featuredPost.category}
            </span>
          </div>
        </div>

        <div class="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center gap-5">
          <div class="flex flex-wrap items-center gap-3 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
            <span class="flex items-center gap-1.5"><Calendar size={12} class="opacity-70" /> {featuredPost.date}</span>
            <span class="hidden sm:inline">•</span>
            <span class="flex items-center gap-1.5"><Clock size={12} class="opacity-70" /> {featuredPost.readTime}</span>
            <span class="hidden sm:inline">•</span>
            <span class="flex items-center gap-1.5 text-primary"><Eye size={12} class="opacity-70" /> {featuredPost.views}</span>
          </div>

          <div class="space-y-3">
            <h2 class="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p class="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-3">
              {featuredPost.excerpt}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            {#each featuredPost.tags as tag}
              <span class="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/50 border border-border/50 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                <Hash size={10} class="opacity-50" />
                {tag}
              </span>
            {/each}
          </div>

          <div class="pt-4 mt-auto border-t border-border/50 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img src={featuredPost.author.avatar} alt="Author" class="size-6 rounded-full bg-muted border border-border" />
              <span class="text-[10px] font-bold tracking-widest uppercase text-foreground">{featuredPost.author.name}</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground"><Heart size={14} class="text-rose-500/70" /> {featuredPost.likes}</span>
              <Button variant="outline" class="w-fit h-8 px-3 text-[9px] font-bold tracking-widest uppercase group/btn border-border bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-lg">
                Baca
                <ArrowRight size={12} class="ml-1.5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Card.Root>
    </div>
  {/if}

  <div class="mt-6 flex items-center justify-between px-0.5">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">latest posts</span>
    </div>
    <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
      {regularPosts.length} items
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each regularPosts as post}
      <Card.Root class="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
        <div class="relative overflow-hidden border-b border-border">
          <AspectRatio.Root ratio={16 / 10}>
            <img src={post.image} alt={post.title} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </AspectRatio.Root>

          <div class="absolute top-3 left-3">
            <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-border/50 bg-background/80 text-foreground">
              {post.category}
            </span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-1 gap-4">
          <div class="flex items-center justify-between text-muted-foreground text-[9px] font-bold uppercase tracking-widest">
            <div class="flex items-center gap-2">
              <span class="flex items-center gap-1"><Calendar size={10} class="opacity-70" /> {post.date}</span>
              <span>•</span>
              <span class="flex items-center gap-1"><Clock size={10} class="opacity-70" /> {post.readTime}</span>
            </div>
            <span class="flex items-center gap-1 text-primary/80"><Eye size={12} /> {post.views}</span>
          </div>

          <div class="flex-1 space-y-2">
            <h4 class="text-lg font-bold tracking-tight text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
              {post.title}
            </h4>
            <p class="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-1">
            {#each post.tags.slice(0, 2) as tag}
              <span class="px-1.5 py-0.5 rounded bg-muted/30 text-[8px] font-bold uppercase tracking-widest text-muted-foreground border border-border/30">
                #{tag}
              </span>
            {/each}
            {#if post.tags.length > 2}
              <span class="px-1.5 py-0.5 rounded bg-muted/30 text-[8px] font-bold uppercase tracking-widest text-muted-foreground border border-border/30">
                +{post.tags.length - 2}
              </span>
            {/if}
          </div>

          <div class="pt-3 mt-auto border-t border-border/50 flex items-center justify-between">
            <span class="flex items-center gap-1 text-[9px] font-bold text-muted-foreground"><Heart size={12} class="text-rose-500/50 group-hover:text-rose-500 transition-colors" /> {post.likes}</span>

            <Button variant="ghost" class="h-7 px-2 text-[9px] font-bold tracking-widest uppercase text-primary hover:bg-primary/10 group/link">
              Read More
              <ArrowRight size={12} class="ml-1 transition-transform group-hover/link:translate-x-1" />
            </Button>
          </div>
        </div>
      </Card.Root>
    {/each}
  </div>
</div>
