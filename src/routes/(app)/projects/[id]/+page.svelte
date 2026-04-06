<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Badge } from '$lib/components/ui/badge/index.js';
    import { ChevronLeft, ExternalLink, Code, Calendar } from '@lucide/svelte';

    let { data }: { data: PageData } = $props();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'default';
            case 'IN_PROGRESS':
                return 'secondary';
            case 'ARCHIVED':
                return 'outline';
            default:
                return 'default';
        }
    };
</script>

<svelte:head>
    <title>{data.project.title} | Portfolio</title>
    <meta name="description" content={data.project.description} />
</svelte:head>

<article class="container max-w-4xl py-10">
    <div class="mb-8">
        <Button variant="ghost" href="/projects" class="mb-6 -ml-2 text-muted-foreground">
            <ChevronLeft class="mr-2 h-4 w-4" />
            Back to projects
        </Button>

        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <Badge variant={getStatusColor(data.project.status)}>
                        {data.project.status.replace('_', ' ')}
                    </Badge>
                    <div class="flex items-center text-sm text-muted-foreground">
                        <Calendar class="mr-1 h-3 w-3" />
                        {new Date(data.project.createdAt).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                        })}
                    </div>
                </div>
                <h1 class="text-4xl font-bold tracking-tight md:text-5xl">{data.project.title}</h1>
                <p class="text-xl text-muted-foreground">{data.project.description}</p>
            </div>

            <div class="flex gap-3">
                {#if data.project.githubUrl}
                    <Button variant="outline" href={data.project.githubUrl} target="_blank" rel="noreferrer">
                        <Code class="mr-2 h-4 w-4" />
                        Source Code
                    </Button>
                {/if}
                {#if data.project.demoUrl}
                    <Button href={data.project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink class="mr-2 h-4 w-4" />
                        Live Demo
                    </Button>
                {/if}
            </div>
        </div>
    </div>

    {#if data.project.thumbnail}
        <div class="mb-12 overflow-hidden rounded-xl border bg-muted shadow-sm">
            <img src={data.project.thumbnail} alt={data.project.title} class="aspect-video w-full object-cover" />
        </div>
    {/if}

    <div class="grid gap-12 md:grid-cols-[1fr_250px]">
        <div class="prose prose-zinc dark:prose-invert max-w-none">
            {#if data.project.content}
                <!-- In a real app, you might use a markdown parser here like 'marked' or 'snarkdown' -->
                <div class="whitespace-pre-wrap">
                    {data.project.content}
                </div>
            {:else}
                <p class="text-muted-foreground italic">No detailed content provided for this project.</p>
            {/if}
        </div>

        <aside class="space-y-8">
            <div class="space-y-3">
                <h3 class="font-semibold uppercase tracking-wider text-muted-foreground text-xs">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                    {#each data.project.techStack as tech}
                        <Badge variant="secondary">{tech}</Badge>
                    {/each}
                </div>
            </div>

            <div class="rounded-lg border bg-card p-4 text-card-foreground">
                <h3 class="mb-2 font-medium">Interested in this?</h3>
                <p class="mb-4 text-sm text-muted-foreground">Feel free to check the source code or reach out if you have any questions.</p>
                <Button variant="outline" class="w-full" href="/contact">Contact Me</Button>
            </div>
        </aside>
    </div>
</article>
