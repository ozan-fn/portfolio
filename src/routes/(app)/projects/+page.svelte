<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    import * as AspectRatio from '$lib/components/ui/aspect-ratio';

    // Correct Lucide Svelte imports for Svelte 5
    import { Computer, ExternalLink, ArrowRight, Code2 } from '@lucide/svelte';

    // Dummy Data
    const projects = [
        {
            id: '1',
            title: 'E-Commerce Microservices',
            description: 'Arsitektur microservices performa tinggi menggunakan Golang dan gRPC. Dilengkapi dengan sistem pembayaran real-time dan manajemen inventaris yang skalabel.',
            thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
            status: 'COMPLETED',
            techStack: ['Golang', 'Nats', 'PostgreSQL', 'Redis'],
            githubUrl: 'https://github.com',
            demoUrl: 'https://demo.com',
        },
        {
            id: '2',
            title: 'Rust Search Engine',
            description: 'Mesin pencari teks lengkap (full-text search) yang dibangun dengan Rust. Fokus pada efisiensi memori dan kecepatan indexing jutaan dokumen dalam hitungan detik.',
            thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
            status: 'IN_PROGRESS',
            techStack: ['Rust', 'Tokio', 'WebAssembly'],
            githubUrl: 'https://github.com',
            demoUrl: null,
        },
        {
            id: '3',
            title: 'Portfolio Dashboard',
            description: 'Dashboard admin interaktif untuk mengelola konten portfolio. Dibangun dengan SvelteKit 5 dan Better Auth untuk keamanan tingkat tinggi.',
            thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
            status: 'COMPLETED',
            techStack: ['SvelteKit', 'Tailwind', 'Prisma'],
            githubUrl: 'https://github.com',
            demoUrl: 'https://demo.com',
        },
        {
            id: '4',
            title: 'AI Chat Assistant',
            description: 'Integrasi LLM untuk asisten koding cerdas. Menggunakan stream response untuk pengalaman pengguna yang lebih cepat dan responsif.',
            thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
            status: 'ARCHIVED',
            techStack: ['Python', 'OpenAI', 'React'],
            githubUrl: null,
            demoUrl: null,
        },
    ];

    // Helper warna status
    const statusMap: Record<string, string> = {
        COMPLETED: 'border-green-500/20 bg-green-500/10 text-green-500',
        IN_PROGRESS: 'border-amber-500/20 bg-amber-500/10 text-amber-500',
        ARCHIVED: 'border-slate-500/20 bg-slate-500/10 text-slate-500',
    };
</script>

<div class="container mx-auto space-y-6">
    <!-- Hero Section -->
    <div class="bg-primary/5 p-10 rounded-3xl border border-primary/10 relative overflow-hidden">
        <div class="absolute -right-20 -top-20 size-64 bg-primary/10 blur-3xl rounded-full"></div>
        <div class="relative z-10">
            <div class="flex items-center gap-2 mb-4 text-primary font-mono text-sm uppercase tracking-widest">
                <Code2 size={16} />
                <span>Showcase</span>
            </div>
            <h1 class="text-5xl font-black mb-4 tracking-tighter text-foreground">Projects 👋</h1>
            <p class="text-muted-foreground text-xl max-w-2xl leading-relaxed">
                Membangun solusi modern dengan <span class="text-foreground font-semibold">Golang</span>,
                <span class="text-foreground font-semibold">Rust</span>, dan <span class="text-foreground font-semibold">Svelte</span>.
                <br /><span class="text-sm italic text-primary/80">"Koding teruss sampe tipes, bobol mah urusan nanti dek."</span>
            </p>
        </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
            <Card.Root class="group overflow-hidden border-muted bg-card transition-all hover:shadow-2xl hover:-translate-y-1">
                <div class="relative overflow-hidden">
                    <AspectRatio.Root ratio={16 / 9}>
                        <img src={project.thumbnail} alt={project.title} class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                    </AspectRatio.Root>

                    <div class="absolute top-4 left-4">
                        <Badge variant="outline" class="backdrop-blur-md font-bold {statusMap[project.status]}">
                            {project.status.replace('_', ' ')}
                        </Badge>
                    </div>
                </div>

                <Card.Header class="space-y-4">
                    <div class="flex flex-wrap gap-2">
                        {#each project.techStack as tech}
                            <Badge variant="secondary" class="rounded-md px-2 py-0 text-[10px] font-black uppercase tracking-widest opacity-80">
                                {tech}
                            </Badge>
                        {/each}
                    </div>

                    <Card.Title class="text-2xl font-bold tracking-tight line-clamp-1">
                        {project.title}
                    </Card.Title>

                    <Card.Description class="text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                        {project.description}
                    </Card.Description>
                </Card.Header>

                <Card.Footer class="p-6 pt-0 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        {#if project.githubUrl}
                            <Button variant="ghost" size="icon" href={project.githubUrl} target="_blank" class="rounded-full hover:bg-primary/10">
                                <Computer size={20} />
                            </Button>
                        {/if}

                        {#if project.demoUrl}
                            <Button variant="ghost" size="icon" href={project.demoUrl} target="_blank" class="rounded-full hover:bg-primary/10">
                                <ExternalLink size={20} />
                            </Button>
                        {/if}
                    </div>

                    <Button variant="link" class="p-0 text-primary font-bold group/link" href="/projects/{project.id}">
                        View Details
                        <ArrowRight size={16} class="ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Button>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</div>
