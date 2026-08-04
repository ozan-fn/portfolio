<script lang="ts">
  import { FileUser, Download } from "@lucide/svelte";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>CV | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
    <div class="flex items-center gap-2 mb-2">
      <FileUser size={14} class="text-primary" />
      <span class="text-[9px] font-bold tracking-widest uppercase text-primary">Resume</span>
    </div>
    <h3 class="text-2xl font-bold mb-2 tracking-tight text-primary leading-tight">CV 📄</h3>
    <p class="text-muted-foreground text-base leading-relaxed max-w-2xl">
      Curriculum Vitae lengkap — pengalaman, skill, dan pencapaian.
      <br />
      <span class="text-xs italic text-primary/80 mt-1 block">"Dummy CV — data hardcoded, sementara menunggu integrasi database."</span>
    </p>
    <div class="mt-4 flex items-center justify-between px-0.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7h18" />
        </svg>
        <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">document</span>
      </div>
      <a href="/api/cv" download>
        <Button size="sm" variant="outline">
          <Download class="size-3.5" />
          Download
        </Button>
      </a>
    </div>
  </div>

  <div class="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
    <div class="p-6 md:p-10 font-mono text-sm leading-relaxed space-y-8">
      <!-- Profile -->
      <header class="space-y-1">
        <h1 class="text-3xl font-black tracking-tight text-foreground">AKHMAD FAUZAN</h1>
        <p class="text-primary font-bold text-base">Full-Stack Developer</p>
        <p class="text-muted-foreground text-xs uppercase tracking-[0.2em]">Purbalingga, Indonesia · available for work</p>
      </header>

      <!-- About -->
      <section class="space-y-3">
        <h2 class="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-border pb-2">// about</h2>
        <p class="text-muted-foreground">
          Developer yang suka bikin produk end-to-end — dari backend Go/Rust, frontend Svelte/Next.js, sampai deploy sendiri.
          Fokus di web performance, developer experience, dan tooling yang bikin kerja lebih efisien.
        </p>
      </section>

      <!-- Experience -->
      <section class="space-y-3">
        <h2 class="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-border pb-2">// experience</h2>
        <div class="space-y-4">
          <div>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="font-bold text-foreground">Full-Stack Developer — Freelance</h3>
              <span class="text-muted-foreground text-xs">2023 — sekarang</span>
            </div>
            <p class="text-muted-foreground mt-1">
              Membangun aplikasi web custom untuk klien: sistem booking, dashboard admin, dan tools internal. Menangani dari
              requirement, arsitektur, hingga deployment.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="font-bold text-foreground">Software Engineer — Personal Projects</h3>
              <span class="text-muted-foreground text-xs">2021 — 2023</span>
            </div>
            <p class="text-muted-foreground mt-1">
              Eksplorasi berbagai stack: Wails desktop app, mini game online, URL shortener, dan tools kolaborasi realtime.
              Belajar sambil membangun.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="space-y-3">
        <h2 class="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-border pb-2">// selected projects</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-bold text-foreground">> Color Match — realtime multiplayer game</h3>
            <p class="text-muted-foreground mt-1">Game tebak warna multiplayer via MQTT. Svelte 5 + shadcn-svelte di frontend.</p>
            <div class="flex flex-wrap gap-1.5 mt-2">
              {#each ["Svelte", "MQTT", "WebSocket"] as tech}
                <Badge variant="secondary" class="text-[10px] font-mono bg-muted/40 border-none rounded">{tech}</Badge>
              {/each}
            </div>
          </div>
          <div>
            <h3 class="font-bold text-foreground">> This portfolio — SvelteKit</h3>
            <p class="text-muted-foreground mt-1">Portfolio dengan auth, blog, CRUD project, upload file ke S3, dan mode gelap.</p>
            <div class="flex flex-wrap gap-1.5 mt-2">
              {#each ["SvelteKit", "Prisma", "Better Auth"] as tech}
                <Badge variant="secondary" class="text-[10px] font-mono bg-muted/40 border-none rounded">{tech}</Badge>
              {/each}
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="space-y-3">
        <h2 class="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-border pb-2">// tech stack</h2>
        <div class="flex flex-wrap gap-1.5">
          {#each ["Go", "Rust", "Next.js", "Svelte", "Wails", "PostgreSQL", "Docker", "AWS S3"] as skill}
            <Badge variant="outline" class="text-[10px] font-mono rounded">{skill}</Badge>
          {/each}
        </div>
      </section>
    </div>
  </div>
</div>
