<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { MessageSquare, Mail, MapPin, Send, User, AtSign } from "@lucide/svelte";
  import Github from "$lib/components/github.svelte";
  import Linkedin from "$lib/components/linkedin.svelte";

  // Data Dummy Kontak
  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "ozan@example.com",
      href: "mailto:ozan@example.com",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      value: "github.com/zann",
      href: "https://github.com/zann",
      color: "text-foreground",
      bg: "bg-foreground/10",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Akhmad Fauzan",
      href: "https://linkedin.com/in/akhmadfauzan",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: "Purbalingga, ID",
      href: null,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  let isSubmitting = $state(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      alert("Pesan berhasil terkirim!");
    }, 1500);
  };
</script>

<svelte:head>
  <title>Contact | Portfolio</title>
</svelte:head>

<div class="flex flex-col gap-8 pb-10">
  <div class="bg-primary/5 p-6 rounded-3xl border border-primary/10 relative overflow-hidden shadow-sm">
    <div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div>

    <div class="relative z-10 space-y-2 text-center md:text-left">
      <div class="flex items-center justify-center md:justify-start gap-2">
        <MessageSquare size={14} class="text-primary" />
        <span class="text-[9px] font-bold tracking-widest uppercase text-primary">Get In Touch</span>
      </div>
      <h3 class="text-2xl font-bold tracking-tight text-primary leading-tight">Contact 📬</h3>
      <p class="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
        Punya ide proyek menarik atau sekadar ingin diskusi soal <strong class="text-foreground">Golang</strong>, <strong class="text-foreground">Rust</strong>, dan <strong class="text-foreground">Svelte</strong>?
      </p>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each contactInfo as info}
      {#if info.href}
        <a href={info.href} target="_blank" rel="noopener noreferrer" class="h-16 rounded-2xl border border-border bg-card px-4 flex items-center gap-3 transition-all hover:bg-muted/50 hover:shadow-sm">
          <div class="size-10 rounded-full flex items-center justify-center {info.bg} {info.color} shrink-0">
            <info.icon size={18} strokeWidth={2} />
          </div>
          <div class="flex flex-col overflow-hidden text-left">
            <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70 leading-none mb-1">{info.label}</span>
            <span class="text-xs font-bold text-foreground truncate">{info.value}</span>
          </div>
        </a>
      {:else}
        <div class="h-16 rounded-2xl border border-border bg-card px-4 flex items-center gap-3">
          <div class="size-10 rounded-full flex items-center justify-center {info.bg} {info.color} shrink-0">
            <info.icon size={18} strokeWidth={2} />
          </div>
          <div class="flex flex-col overflow-hidden text-left">
            <span class="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/70 leading-none mb-1">{info.label}</span>
            <span class="text-xs font-bold text-foreground truncate">{info.value}</span>
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <div class="flex flex-col gap-4 mt-2">
    <div class="flex items-center gap-2 px-0.5 mb-1">
      <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
      </svg>
      <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">send a message</span>
    </div>

    <form onsubmit={handleSubmit}>
      <Card.Root class="rounded-2xl border border-border bg-card p-6 md:p-10">
        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Name</label>
              <div class="relative">
                <User class="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                <Input id="name" required placeholder="John Doe" class="pl-10 h-10 bg-muted/30 border-border rounded-xl focus-visible:ring-primary text-xs transition-all" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Email</label>
              <div class="relative">
                <AtSign class="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                <Input id="email" type="email" required placeholder="john@example.com" class="pl-10 h-10 bg-muted/30 border-border rounded-xl focus-visible:ring-primary text-xs transition-all" />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Message</label>
            <textarea id="message" required placeholder="Halo Ozan, saya mau diskusi soal..." class="min-h-[140px] w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all resize-y"></textarea>
          </div>

          <div class="pt-2">
            <Button type="submit" size="sm" disabled={isSubmitting} class="w-full md:w-auto md:px-12 h-10 rounded-xl text-[10px] font-bold tracking-widest uppercase group transition-all relative overflow-hidden">
              {#if isSubmitting}
                <span class="flex items-center gap-2">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Mengirim...
                </span>
              {:else}
                <span class="relative z-10 flex items-center justify-center gap-2">
                  Kirim Pesan
                  <Send size={14} class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              {/if}
            </Button>
          </div>
        </div>
      </Card.Root>
    </form>
  </div>
</div>
