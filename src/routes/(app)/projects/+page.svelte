<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import * as AspectRatio from "$lib/components/ui/aspect-ratio";
  import { Computer, ExternalLink, ArrowRight, Code2 } from "@lucide/svelte";
  import type { PageData } from "./$types";
  import { getFileUrl } from "$lib/storage.client";

  let { data }: { data: PageData } = $props();
  let projects = $derived(data.projects);

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
  <div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
    <div class="flex items-center gap-2 mb-2">
      <Code2 size={14} class="text-primary" />
      <span class="text-[9px] font-bold tracking-widest uppercase text-primary">Showcase</span>
    </div>
    <h3 class="text-2xl font-bold mb-2 tracking-tight text-primary leading-tight">Projects 👋</h3>
    <p class="text-muted-foreground text-base leading-relaxed max-w-2xl">
      Membangun solusi modern dengan <strong class="text-foreground">Golang</strong>,
      <strong class="text-foreground">Rust</strong>, dan <strong class="text-foreground">Svelte</strong>.
      <br />
      <span class="text-xs italic text-primary/80 mt-1 block">"Koding teruss sampe tipes, bobol mah urusan nanti dek."</span>
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
            <img src={getFileUrl(project.thumbnail)} alt={project.title} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </AspectRatio.Root>

          <div class="absolute top-3 left-3">
            <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border {statusMap[project.status]}">
              {project.status.replace("_", " ")}
            </span>
          </div>
          {#if project.featured}
            <div class="absolute top-3 right-3">
              <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-primary text-primary-foreground shadow-sm"> Featured </span>
            </div>
          {/if}
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

            <Button variant="link" class="h-auto p-0 text-[10px] font-bold tracking-widest uppercase text-primary group/link" href="/projects/{project.slug}">
              Details
              <ArrowRight size={14} class="ml-1 transition-transform group-hover/link:translate-x-1" />
            </Button>
          </div>
        </div>
      </Card.Root>
    {/each}
  </div>
</div>
