<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as AspectRatio from "$lib/components/ui/aspect-ratio";
  import { Computer, ExternalLink, ArrowRight, Code2 } from "@lucide/svelte";

  // Dummy Data
  const projects = [
    {
      id: "1",
      title: "E-Commerce Microservices",
      description: "Arsitektur microservices performa tinggi menggunakan Golang dan gRPC. Dilengkapi dengan sistem pembayaran real-time dan manajemen inventaris yang skalabel.",
      thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
      status: "COMPLETED",
      techStack: ["Golang", "Nats", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      id: "2",
      title: "Rust Search Engine",
      description: "Mesin pencari teks lengkap (full-text search) yang dibangun dengan Rust. Fokus pada efisiensi memori dan kecepatan indexing jutaan dokumen dalam hitungan detik.",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      status: "IN_PROGRESS",
      techStack: ["Rust", "Tokio", "WebAssembly"],
      githubUrl: "https://github.com",
      demoUrl: null,
    },
    {
      id: "3",
      title: "Portfolio Dashboard",
      description: "Dashboard admin interaktif untuk mengelola konten portfolio. Dibangun dengan SvelteKit 5 dan Better Auth untuk keamanan tingkat tinggi.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      status: "COMPLETED",
      techStack: ["SvelteKit", "Tailwind", "Prisma"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      id: "4",
      title: "AI Chat Assistant",
      description: "Integrasi LLM untuk asisten koding cerdas. Menggunakan stream response untuk pengalaman pengguna yang lebih cepat dan responsif.",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
      status: "ARCHIVED",
      techStack: ["Python", "OpenAI", "React"],
      githubUrl: null,
      demoUrl: null,
    },
  ];

  // Helper warna status yang disesuaikan dengan tema flat/modern
  const statusMap: Record<string, string> = {
    COMPLETED: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    IN_PROGRESS: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    ARCHIVED: "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400",
  };
</script>

<svelte:head>
  <title>Projects | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
    <div class="flex items-center gap-2 mb-3">
      <Code2 size={16} class="text-primary" />
      <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Showcase</span>
    </div>
    <h3 class="text-4xl font-black mb-4 tracking-tight text-primary leading-tight">Projects 👋</h3>
    <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">
      Membangun solusi modern dengan <strong class="text-foreground">Golang</strong>,
      <strong class="text-foreground">Rust</strong>, dan <strong class="text-foreground">Svelte</strong>.
      <br />
      <span class="text-sm italic text-primary/80 mt-2 block">"Koding teruss sampe tipes, bobol mah urusan nanti dek."</span>
    </p>
  </div>

  <div class="mt-2 flex items-center justify-between px-0.5">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">project showcase</span>
    </div>
    <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
      {projects.length} items
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as project}
      <Card.Root class="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
        <div class="relative overflow-hidden border-b border-border">
          <AspectRatio.Root ratio={16 / 9}>
            <img src={project.thumbnail} alt={project.title} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </AspectRatio.Root>

          <div class="absolute top-3 left-3">
            <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border {statusMap[project.status]}">
              {project.status.replace("_", " ")}
            </span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-1 gap-4">
          <div class="flex flex-wrap gap-1.5">
            {#each project.techStack as tech}
              <span class="rounded bg-muted/50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border/50">
                {tech}
              </span>
            {/each}
          </div>

          <div class="flex-1 space-y-1.5">
            <h4 class="text-lg font-bold tracking-tight text-foreground line-clamp-1">{project.title}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
          </div>

          <div class="pt-2 mt-auto flex items-center justify-between">
            <div class="flex items-center gap-1">
              {#if project.githubUrl}
                <Button variant="ghost" size="icon" href={project.githubUrl} target="_blank" class="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted">
                  <Computer size={14} />
                </Button>
              {/if}
              {#if project.demoUrl}
                <Button variant="ghost" size="icon" href={project.demoUrl} target="_blank" class="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted">
                  <ExternalLink size={14} />
                </Button>
              {/if}
            </div>

            <Button variant="link" class="h-auto p-0 text-[10px] font-bold tracking-widest uppercase text-primary group/link" href="/projects/{project.id}">
              Details
              <ArrowRight size={14} class="ml-1 transition-transform group-hover/link:translate-x-1" />
            </Button>
          </div>
        </div>
      </Card.Root>
    {/each}
  </div>
</div>
