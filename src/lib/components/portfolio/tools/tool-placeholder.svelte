<script lang="ts">
  import { Hammer } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";

  let { title = "Tool Coming Soon", description = "Fitur ini sedang dalam tahap pengembangan." } = $props();
</script>

<Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
  <Card.Header class="p-8 pb-4">
    <Card.Title class="text-2xl font-bold tracking-tight">{title}</Card.Title>
    <Card.Description class="text-base">{description}</Card.Description>
  </Card.Header>
  <Card.Content class="p-8 pt-4">
    <div style="min-height: 300px" class="flex flex-col items-center justify-center text-center border-2 border-dashed border-muted rounded-xl bg-muted/20">
      <div class="bg-muted p-4 rounded-full mb-4">
        <Hammer class="size-8 text-muted-foreground" />
      </div>
      <p class="font-bold text-lg mb-1">Coming Soon</p>
      <p style="max-width: 250px" class="text-muted-foreground text-sm">{description}</p>
    </div>
  </Card.Content>
</Card.Root>
