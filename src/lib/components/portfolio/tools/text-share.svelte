<script lang="ts">
  import { Hammer, Share2, Copy, Check, Trash2, Eye, Zap } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Label } from "$lib/components/ui/label";
  import { toast } from "svelte-sonner";

  let {
    content = $bindable(""),
    isSubmitting = false,
    views = 0,
    latency = 0,
  } = $props<{
    content?: string;
    isSubmitting?: boolean;
    views?: number;
    latency?: number;
  }>();

  let timeout: ReturnType<typeof setTimeout>;

  function handleInput() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const form = document.getElementById("text-share-form") as HTMLFormElement;
      if (form) form.requestSubmit();
    }, 1000);
  }

  function clearContent() {
    content = "";
    handleInput();
  }
</script>

<div class="grid gap-6">
  <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
    <Card.Header class="p-8 pb-4">
      <Card.Title class="text-2xl font-bold tracking-tight">Text Share</Card.Title>
      <div class="flex items-center gap-4 mt-1">
        <Card.Description class="text-base">Tulis atau tempel teks besar. Perubahan akan disimpan otomatis.</Card.Description>
        <div class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 shrink-0">
          <div class="flex items-center gap-1.5">
            <Eye class="size-3" />
            {views} views
          </div>
          <div class="flex items-center gap-1.5">
            <Zap class="size-3 {latency > 500 ? 'text-amber-500' : 'text-emerald-500'}" />
            {latency}ms
          </div>
        </div>
      </div>
    </Card.Header>
    <Card.Content class="p-6 pt-2">
      <div class="grid gap-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between ml-1">
            <Label for="content" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Your Text / Snippet</Label>
            <div class="flex items-center gap-2">
              {#if isSubmitting}
                <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">
                  <div class="h-2 w-2 rounded-full bg-primary/40"></div>
                   saving...
                </div>
              {/if}
              {#if content}
                <button type="button" onclick={clearContent} class="text-[10px] font-bold uppercase tracking-widest text-destructive hover:opacity-80 transition-opacity flex items-center gap-1">
                  <Trash2 class="size-3" /> Clear
                </button>
              {/if}
            </div>
          </div>
          <Textarea id="content" name="content" placeholder="Paste your long text, code snippets, or notes here..." bind:value={content} oninput={handleInput} class="min-h-75 rounded-xl bg-muted/30 border-border text-sm focus-visible:ring-primary transition-all p-4 resize-y" />
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>
