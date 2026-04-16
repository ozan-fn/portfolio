<script lang="ts">
  import type { PageData } from "./$types";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let { data }: { data: PageData } = $props();

  // ── derived values ───────────────────────────────────────────────────────────
  const wakaStats = $derived(data?.wakaStats);
  const allTime = $derived(data?.allTime);
  const languages = $derived(wakaStats?.data?.languages?.slice(0, 6) ?? []);
  const editors = $derived(wakaStats?.data?.editors?.slice(0, 5) ?? []);
  const osList = $derived(wakaStats?.data?.operating_systems?.slice(0, 4) ?? []);
  const projects = $derived(wakaStats?.data?.projects?.slice(0, 6) ?? []);
  const hasData = $derived(!!wakaStats?.data);

  // ── animasi angka (berbasis detik) ──────────────────────────────────────────
  const tweenOptions = { duration: 1500, easing: cubicOut };
  const animatedToday = tweened(0, tweenOptions);
  const animatedAvg = tweened(0, tweenOptions);
  const animatedAllTime = tweened(0, tweenOptions);
  const animatedBestDay = tweened(0, tweenOptions);

  // Trigger animasi saat data sudah ada
  $effect(() => {
    if (hasData) {
      animatedToday.set(wakaStats?.data?.total_seconds ?? 0);
      animatedAvg.set(wakaStats?.data?.daily_average ?? 0);
      animatedAllTime.set(allTime?.data?.total_seconds ?? 0);
      animatedBestDay.set(wakaStats?.data?.best_day?.total_seconds ?? 0);
    }
  });

  // ── helpers ──────────────────────────────────────────────────────────────────
  // Helper yang lebih pintar untuk memformat detik menjadi hrs & mins
  function fmtSec(s = 0): string {
    const totalSecs = Math.round(s);
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }

  const LANG_COLORS: Record<string, string> = {
    Go: "#00ADD8",
    Rust: "#CE412B",
    Svelte: "#FF3E00",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Python: "#3572A5",
    HTML: "#E34C26",
    CSS: "#563D7C",
    SQL: "#336791",
    Markdown: "#8b8b8b",
    JSON: "#4a4a4a",
    YAML: "#CB171E",
    Bash: "#89E051",
    Shell: "#89E051",
    "C++": "#00599C",
    Java: "#B07219",
    Kotlin: "#7F52FF",
    Dart: "#00B4AB",
  };

  function langColor(name: string): string {
    return LANG_COLORS[name] ?? "#6366f1";
  }
</script>

<svelte:head>
  <title>Dashboard | Portfolio</title>
  <meta name="description" content="Main dashboard overview of my portfolio and activities." />
</svelte:head>

<div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
  <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>
  <h3 class="text-2xl font-bold mb-2 tracking-tight text-primary leading-tight">Hello, I'm Ozan! 👋</h3>
  <p class="text-muted-foreground text-base leading-relaxed max-w-2xl">
    Developer asal Purbalingga yang fokus membangun solusi modern dengan
    <strong>Golang</strong>, <strong>Rust</strong>, dan <strong>Svelte</strong>.
  </p>
</div>

<div class="mt-8 flex flex-col gap-3">
  <div class="flex items-center justify-between px-0.5">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
      <span class="text-xs font-bold tracking-widest uppercase text-muted-foreground">coding activity</span>
    </div>
    {#if hasData}
      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800"> live · 7d </span>
    {:else}
      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"> unavailable </span>
    {/if}
  </div>

  {#if !hasData}
    <div class="rounded-2xl border border-border bg-muted/30 p-6 flex items-center gap-3 text-muted-foreground">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 shrink-0">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <p class="text-sm">Data WakaTime tidak tersedia. Pastikan <code class="font-mono text-xs">WAKATIME_API_KEY</code> sudah di-set di <code class="font-mono text-xs">.env</code>.</p>
    </div>
  {:else}
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div class="h-16 rounded-2xl border border-border bg-muted/40 px-4 flex items-center gap-3 transition-all hover:bg-muted/60">
        <div class="size-8 rounded-full bg-blue-500/10 flex items-center justify-center">
          <svg class="size-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70">today</span>
          <span class="text-xs font-bold text-foreground">{fmtSec($animatedToday)}</span>
        </div>
      </div>
      <div class="h-16 rounded-2xl border border-border bg-muted/40 px-4 flex items-center gap-3 transition-all hover:bg-muted/60">
        <div class="size-8 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="size-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70">daily avg</span>
          <span class="text-xs font-bold text-foreground">{fmtSec($animatedAvg)}</span>
        </div>
      </div>
      <div class="h-16 rounded-2xl border border-border bg-muted/40 px-4 flex items-center gap-3 transition-all hover:bg-muted/60">
        <div class="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <svg class="size-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70">all time</span>
          <span class="text-xs font-bold text-foreground">{fmtSec($animatedAllTime)}</span>
        </div>
      </div>
      <div class="h-16 rounded-2xl border border-border bg-muted/40 px-4 flex items-center gap-3 transition-all hover:bg-muted/60">
        <div class="size-8 rounded-full bg-amber-500/10 flex items-center justify-center">
          <svg class="size-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div class="flex flex-col overflow-hidden">
          <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70">best day</span>
          <span class="text-xs font-bold text-foreground truncate">{fmtSec($animatedBestDay)}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="rounded-2xl border border-border bg-card p-5">
        <p class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3.5">languages</p>
        {#each languages as lang}
          <div class="flex items-center gap-2 mb-2.5 last:mb-0">
            <span class="w-2 h-2 rounded-full shrink-0" style="background:{langColor(lang.name)}"></span>
            <span class="text-sm font-medium text-foreground w-20 truncate">{lang.name}</span>
            <div class="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div class="h-full rounded-full opacity-80 transition-all duration-1000 ease-out" style="width:{Math.round(lang.percent)}%;background:{langColor(lang.name)}"></div>
            </div>
            <span class="font-mono text-xs text-muted-foreground w-12 text-right">{fmtSec(lang.total_seconds)}</span>
          </div>
        {/each}
      </div>

      <div class="flex flex-col gap-3">
        <div class="rounded-2xl border border-border bg-card p-5">
          <p class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3.5">editors</p>
          {#each editors as ed}
            <div class="flex items-center gap-2 mb-2.5 last:mb-0">
              <span class="w-2 h-2 rounded-full shrink-0 bg-indigo-500"></span>
              <span class="text-sm font-medium text-foreground w-20 truncate">{ed.name}</span>
              <div class="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div class="h-full rounded-full bg-indigo-500 opacity-75 transition-all duration-1000 ease-out" style="width:{Math.round(ed.percent)}%"></div>
              </div>
              <span class="font-mono text-xs text-muted-foreground w-12 text-right">{fmtSec(ed.total_seconds)}</span>
            </div>
          {/each}
        </div>

        <div class="rounded-2xl border border-border bg-card p-5">
          <p class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3.5">operating systems</p>
          {#each osList as item}
            <div class="flex items-center gap-2 mb-2.5 last:mb-0">
              <span class="w-2 h-2 rounded-full shrink-0 bg-emerald-500"></span>
              <span class="text-sm font-medium text-foreground w-20 truncate">{item.name}</span>
              <div class="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div class="h-full rounded-full bg-emerald-500 opacity-75 transition-all duration-1000 ease-out" style="width:{Math.round(item.percent)}%"></div>
              </div>
              <span class="font-mono text-xs text-muted-foreground w-12 text-right">{fmtSec(item.total_seconds)}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>

    {#if projects.length}
      <div class="rounded-2xl border border-border bg-card p-5">
        <p class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3.5">projects · 7d</p>
        <div class="flex flex-col gap-2.5">
          {#each projects as proj}
            <div class="flex items-center gap-3">
              <span class="text-sm font-medium text-foreground w-28 truncate">{proj.name}</span>
              <div class="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div class="h-full rounded-full bg-primary/50 transition-all duration-1000 ease-out" style="width:{Math.round(proj.percent)}%"></div>
              </div>
              <span class="font-mono text-xs text-muted-foreground w-14 text-right">{fmtSec(proj.total_seconds)}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</div>
