<script lang="ts">
  import profile from "$lib/assets/images/Kaguya.avif";
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
  import { Card, CardContent } from "$lib/components/ui/card";

  // Mode Toggle
  import ModeToggle from "$lib/components/mode-toggle.svelte";

  // Tambahan icon Menu (garis 3) dan X (close)
  import { Circle, FolderCode, Gamepad2, Home, Mail, PenTool, Menu, X, Award } from "@lucide/svelte";

  import { page } from "$app/state";
  import { onNavigate } from "$app/navigation";
  import { motion } from "@humanspeak/svelte-motion";
  import { fade } from "svelte/transition";

  let { user = null } = $props();

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "projects", label: "Projects", icon: FolderCode, path: "/projects" },
    { id: "certificates", label: "Certificates", icon: Award, path: "/certificates" },
    { id: "blog", label: "Blog", icon: PenTool, path: "/blog" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
    { id: "game", label: "Mini Game", icon: Gamepad2, path: "/game" },
  ];

  const techStack = ["Golang", "Rust", "Next.js", "Svelte", "Wails", "Roblox"];

  let activeTab = $derived(page.url.pathname === "/" ? "home" : page.url.pathname.split("/")[1]);

  // State untuk kontrol buka/tutup menu di mobile
  let isMobileOpen = $state(false);

  // Otomatis tutup sidebar saat pindah halaman di mode mobile
  onNavigate(() => {
    isMobileOpen = false;
  });
</script>

<div class="md:hidden flex items-center justify-between w-full bg-card border border-muted/50 p-4 rounded-xl shadow-sm">
  <div class="flex items-center gap-3">
    <Avatar class="size-10 ring-2 ring-muted/20">
      <AvatarImage src={user?.image || profile} alt={user?.name || "Akhmad Fauzan"} />
      <AvatarFallback>AF</AvatarFallback>
    </Avatar>
    <div>
      <h2 class="font-bold text-sm tracking-tight">{user?.name || "Akhmad Fauzan"}</h2>
      <p class="text-[10px] text-muted-foreground font-mono uppercase">Developer</p>
    </div>
  </div>

  <div class="flex items-center gap-2">
    <ModeToggle />
    <button onclick={() => (isMobileOpen = true)} class="p-2 hover:bg-muted rounded-md transition-colors">
      <Menu class="size-6" />
    </button>
  </div>
</div>

{#if isMobileOpen}
  <button type="button" aria-label="Close sidebar overlay" class="fixed inset-0 w-full h-full border-none outline-none cursor-default bg-background/80 backdrop-blur-sm z-40 md:hidden block p-0 m-0" transition:fade={{ duration: 200 }} onclick={() => (isMobileOpen = false)}></button>
{/if}

<aside
  class="
    fixed inset-y-0 left-0 z-50 w-70 bg-background md:bg-transparent transform transition-transform duration-300 ease-in-out md:relative md:transform-none md:w-full md:max-w-70 shrink-0
    {isMobileOpen ? 'translate-x-0 shadow-2xl border-r border-border' : '-translate-x-full md:translate-x-0 md:shadow-none md:border-none'}
"
>
  <Card class="h-full md:h-auto border-none md:border-solid md:border-muted/50 rounded-none md:rounded-xl shadow-none md:shadow-sm overflow-y-auto md:overflow-visible sticky top-10">
    <CardContent class="pt-10 px-6 pb-8 min-h-full relative">
      <button class="absolute top-4 right-4 md:hidden p-2 hover:bg-muted rounded-md transition-colors" onclick={() => (isMobileOpen = false)}>
        <X class="size-5" />
      </button>

      <!-- Mode Toggle untuk Desktop -->
      <div class="absolute top-4 right-4 hidden md:block">
        <ModeToggle />
      </div>

      <div class="flex flex-col items-center text-center mb-8">
        <div class="relative mb-5">
          <Avatar class="size-24 ring-4 ring-muted/20">
            <AvatarImage src={user?.image || profile} alt={user?.name || "Akhmad Fauzan"} />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
          <div class="absolute bottom-1 right-1 size-5 bg-background rounded-full flex items-center justify-center border-2 border-background shadow-sm">
            <Circle class="size-3 fill-green-500 text-green-500" />
          </div>
        </div>
        <h2 class="text-xl font-bold tracking-tight">{user?.name || "Akhmad Fauzan"}</h2>
        <p class="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] mt-1.5 opacity-80">Developer • Purbalingga</p>
      </div>

      <Separator class="mb-8 opacity-50" />

      <nav class="flex flex-col gap-1.5 relative">
        {#each menuItems as item}
          <a href={item.path} class="relative group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all outline-none" class:text-primary={activeTab === item.id} class:text-muted-foreground={activeTab !== item.id}>
            {#if activeTab === item.id}
              <motion.div layoutId="active-pill" class="absolute inset-0 bg-secondary rounded-lg -z-10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
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
