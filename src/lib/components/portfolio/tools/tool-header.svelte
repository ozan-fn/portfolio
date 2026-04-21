<script lang="ts">
  let { title, description, icon: Icon } = $props();
</script>

<div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
  <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
  <div class="flex items-center gap-2 mb-2">
    {#if Icon}
      <Icon size={14} class="text-primary" />
    {/if}
    <span class="text-[9px] font-bold tracking-widest uppercase text-primary">Utility</span>
  </div>
  <h3 class="text-2xl font-bold mb-2 tracking-tight text-primary leading-tight">{title}</h3>
  <div class="text-muted-foreground text-base leading-relaxed max-w-2xl">
    {@render description()}
  </div>
</div>
