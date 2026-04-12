<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as AspectRatio from "$lib/components/ui/aspect-ratio";
  import { Award, ExternalLink, Calendar } from "@lucide/svelte";

  let { data } = $props();
  const certificates = $derived(data.certificates);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
    });
  };
</script>

<div class="container mx-auto space-y-8 pb-10">
  <!-- Hero Section -->
  <div class="bg-primary/5 p-10 rounded-3xl border border-primary/10 relative overflow-hidden">
    <div class="absolute -right-20 -top-20 size-64 bg-primary/10 blur-3xl rounded-full"></div>
    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-4 text-primary font-mono text-sm uppercase tracking-widest">
        <Award size={16} />
        <span>Recognition</span>
      </div>
      <h1 class="text-5xl font-black mb-4 tracking-tighter text-foreground">Certificates 🏆</h1>
      <p class="text-muted-foreground text-xl max-w-2xl leading-relaxed">
        Koleksi sertifikasi dan pencapaian dalam perjalanan belajar koding.
        <br /><span class="text-sm italic text-primary/80">"Belajar terus, sertifikat mah bonus yang penting ilmunya."</span>
      </p>
    </div>
  </div>

  <!-- Certificates Grid -->
  {#if certificates.length === 0}
    <div class="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <Award size={48} class="text-muted-foreground opacity-20" />
      <p class="text-muted-foreground">Belum ada sertifikat yang ditampilkan.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each certificates as cert}
        <Card.Root class="group overflow-hidden border-muted bg-card transition-all hover:shadow-2xl hover:-translate-y-1">
          <div class="relative overflow-hidden">
            <AspectRatio.Root ratio={16 / 9}>
              {#if cert.thumbnail}
                <img src={cert.thumbnail} alt={cert.title} class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
              {:else}
                <div class="w-full h-full bg-muted flex items-center justify-center">
                  <Award size={48} class="text-muted-foreground opacity-20" />
                </div>
              {/if}
            </AspectRatio.Root>
          </div>

          <Card.Header class="space-y-2">
            <div class="flex items-center justify-between">
              <Badge variant="outline" class="text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
                {cert.issuer}
              </Badge>
              <div class="flex items-center gap-1.5 text-muted-foreground text-[10px] font-medium uppercase tracking-wider">
                <Calendar size={12} />
                <span>{formatDate(cert.issueDate)}</span>
              </div>
            </div>
            <Card.Title class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {cert.title}
            </Card.Title>
          </Card.Header>

          <Card.Footer class="pt-2">
            {#if cert.verifyUrl}
              <Button variant="outline" size="sm" class="w-full group/btn relative overflow-hidden transition-all hover:bg-primary hover:text-primary-foreground border-primary/20" href={cert.verifyUrl} target="_blank">
                <span class="relative z-10 flex items-center gap-2">
                  Verify Certificate <ExternalLink size={14} class="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </Button>
            {:else}
              <Button variant="ghost" size="sm" class="w-full cursor-default opacity-50" disabled>No Verification Link</Button>
            {/if}
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
  {/if}
</div>
