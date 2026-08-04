<script lang="ts">
  import { FileUser } from "@lucide/svelte";
  import { Card, CardContent } from "$lib/components/ui/card";
</script>

<svelte:head>
  <title>CV | Portfolio</title>
</svelte:head>

<div class="w-full h-full min-h-[70vh] flex flex-col items-center justify-center p-4">
  <Card class="w-full max-w-md text-center">
    <CardContent class="flex flex-col items-center gap-4 py-10">
      <div class="size-16 rounded-2xl bg-muted flex items-center justify-center">
        <FileUser class="size-8 text-primary" />
      </div>
      <h1 class="text-2xl font-black tracking-tight">CV</h1>
      <p class="text-sm text-muted-foreground">Halaman CV masih dalam pengembangan.</p>
    </CardContent>
  </Card>
</div>
