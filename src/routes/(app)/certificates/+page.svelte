<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import * as AspectRatio from "$lib/components/ui/aspect-ratio";
  import { Award, ExternalLink, Calendar } from "@lucide/svelte";

  // ── dummy data ─────────────────────────────────────────────────────────────
  const dummyCertificates = [
    {
      id: "1",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      issueDate: "2024-01-15",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      verifyUrl: "https://coursera.org",
    },
    {
      id: "2",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issueDate: "2024-03-20",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
      verifyUrl: "https://aws.amazon.com",
    },
    {
      id: "3",
      title: "Full Stack Open 2024 - TypeScript & React",
      issuer: "University of Helsinki",
      issueDate: "2024-04-10",
      thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop",
      verifyUrl: "https://fullstackopen.com",
    },
  ];

  // Gunakan data dari backend jika ada, jika tidak gunakan dummy data
  const certificates = $derived(dummyCertificates);

  // ── helpers ──────────────────────────────────────────────────────────────────
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
    });
  };
</script>

<svelte:head>
  <title>Certificates | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
    <div class="flex items-center gap-2 mb-3">
      <Award size={16} class="text-primary" />
      <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Recognition</span>
    </div>
    <h3 class="text-4xl font-black mb-4 tracking-tight text-primary leading-tight">Certificates 🏆</h3>
    <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">
      Koleksi sertifikasi dan pencapaian dalam perjalanan belajar koding.
      <br />
      <span class="text-sm italic text-primary/80 mt-2 block">"Belajar terus, sertifikat mah bonus yang penting ilmunya."</span>
    </p>
  </div>

  <div class="mt-2 flex items-center justify-between px-0.5">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">achievements</span>
    </div>
    <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
      {certificates.length} items
    </span>
  </div>

  {#if certificates.length === 0}
    <div class="rounded-2xl border border-border bg-muted/30 p-12 flex flex-col items-center justify-center text-center space-y-4">
      <Award size={48} class="text-muted-foreground opacity-20" />
      <p class="text-sm text-muted-foreground tracking-wide">Belum ada sertifikat yang ditampilkan.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each certificates as cert}
        <Card.Root class="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
          <div class="relative overflow-hidden border-b border-border">
            <AspectRatio.Root ratio={16 / 9}>
              {#if cert.thumbnail}
                <img src={cert.thumbnail} alt={cert.title} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
              {:else}
                <div class="w-full h-full bg-muted/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <Award size={48} class="text-muted-foreground opacity-20" />
                </div>
              {/if}
            </AspectRatio.Root>

            <div class="absolute top-3 left-3">
              <span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-primary/20 bg-background/80 text-foreground">
                {cert.issuer}
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col flex-1 gap-4">
            <div class="flex-1 space-y-2">
              <h4 class="text-lg font-bold tracking-tight text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                {cert.title}
              </h4>
              <div class="flex items-center gap-1.5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={12} class="opacity-70" />
                <span>{formatDate(cert.issueDate)}</span>
              </div>
            </div>

            <div class="pt-3 mt-auto border-t border-border/50">
              {#if cert.verifyUrl}
                <Button variant="ghost" size="sm" class="w-full h-9 text-[10px] font-bold tracking-widest uppercase group/btn bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all" href={cert.verifyUrl} target="_blank">
                  Verify Certificate
                  <ExternalLink size={14} class="ml-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </Button>
              {:else}
                <Button variant="ghost" size="sm" class="w-full h-9 text-[10px] font-bold tracking-widest uppercase cursor-default opacity-50 bg-muted/30" disabled>No Link</Button>
              {/if}
            </div>
          </div>
        </Card.Root>
      {/each}
    </div>
  {/if}
</div>
