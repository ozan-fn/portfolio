```svelte D:/projects/portfolio-sv/src/routes/(protected)/dashboard/projects/[id]/view/+page.svelte
<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Badge } from '$lib/components/ui/badge/index.js';
    import {
        ChevronLeft,
        Pencil,
        ExternalLink,
        Code,
        Calendar,
        Layers,
        Info,
        ArrowUpRight
    } from '@lucide/svelte';

    let { data }: { data: PageData } = $props();
    const { project } = data;

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

<div class="flex flex-col gap-6 p-6 max-w-5xl mx-auto">
    <!-- Header with Breadcrumbs and Actions -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
            <Button variant="outline" size="icon" href="/dashboard/projects">
                <ChevronLeft class="h-4 w-4" />
            </Button>
            <div>
                <div class="flex items-center gap-2">
                    <h1 class="text-3xl font-bold tracking-tight">{project.title}</h1>
                    <Badge variant={getStatusColor(project.status)} class="ml-2">
                        {project.status.replace('_', ' ')}
                    </Badge>
                </div>
                <p class="text-muted-foreground">Detailed project information and statistics.</p>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <Button variant="outline" href="/projects/{project.id}" target="_blank">
                <ExternalLink class="mr-2 h-4 w-4" />
                Public View
            </Button>
            <Button href="/dashboard/projects/{project.id}">
                <Pencil class="mr-2 h-4 w-4" />
                Edit Project
            </Button>
        </div>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
        <!-- Main Content Column -->
        <div class="md:col-span-2 space-y-6">
            <!-- Thumbnail Section -->
            <div class="overflow-hidden rounded-xl border bg-card shadow-sm">
                <div class="border-b bg-muted/50 p-4">
                    <h3 class="font-semibold flex items-center gap-2">
                        <Info class="h-4 w-4 text-primary" />
                        Project Media
                    </h3>
                </div>
                <div class="p-0">
                    {#if project.thumbnail}
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            class="aspect-video w-full object-cover"
                        />
                    {:else}
                        <div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic">
                            No thumbnail provided
                        </div>
                    {/if}
                </div>
            </div>

            <!-- Description & Content Section -->
            <div class="rounded-xl border bg-card shadow-sm">
                <div class="border-b bg-muted/50 p-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Content & Details
                </div>
                <div class="p-6 space-y-6">
                    <div>
                        <h4 class="text-sm font-medium text-muted-foreground mb-2">Short Description</h4>
                        <p class="text-lg leading-relaxed">{project.description}</p>
                    </div>

                    <div class="pt-4 border-t">
                        <h4 class="text-sm font-medium text-muted-foreground mb-4">Detailed Content</h4>
                        <div class="prose prose-sm dark:prose-invert max-w-none">
                            {#if project.content}
                                <div class="whitespace-pre-wrap rounded-lg bg-muted/30 p-4 border italic text-muted-foreground">
                                    {project.content}
                                </div>
                            {:else}
                                <p class="italic text-muted-foreground">No detailed content written yet.</p>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sidebar Info Column -->
        <div class="space-y-6">
            <!-- Project Stats/Meta -->
            <div class="rounded-xl border bg-card shadow-sm p-6 space-y-4">
                <h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Metadata</h3>

                <div class="space-y-3">
                    <div class="flex items-center justify-between text-sm">
                        <span class="flex items-center text-muted-foreground">
                            <Calendar class="mr-2 h-4 w-4" />
                            Created
                        </span>
                        <span class="font-medium">{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="flex items-center text-muted-foreground">
                            <Layers class="mr-2 h-4 w-4" />
                            Status
                        </span>
                        <span class="font-medium">{project.status}</span>
                    </div>
                </div>
            </div>

            <!-- Links Section -->
            <div class="rounded-xl border bg-card shadow-sm p-6 space-y-4">
                <h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">External Links</h3>
                <div class="grid gap-2">
                    {#if project.githubUrl}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            class="flex items-center justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors text-sm"
                        >
                            <span class="flex items-center font-medium">
                                <Code class="mr-2 h-4 w-4 text-primary" />
                                Source Code
                            </span>
                            <ArrowUpRight class="h-3 w-3 text-muted-foreground" />
                        </a>
                    {/if}

                    {#if project.demoUrl}
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            class="flex items-center justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors text-sm"
                        >
                            <span class="flex items-center font-medium">
                                <ExternalLink class="mr-2 h-4 w-4 text-primary" />
                                Live Demo
                            </span>
                            <ArrowUpRight class="h-3 w-3 text-muted-foreground" />
                        </a>
                    {/if}

                    {#if !project.githubUrl && !project.demoUrl}
                        <p class="text-sm text-muted-foreground italic">No links available</p>
                    {/if}
                </div>
            </div>

            <!-- Tech Stack Section -->
            <div class="rounded-xl border bg-card shadow-sm p-6 space-y-4">
                <h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground text-xs">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                    {#each project.techStack as tech}
                        <Badge variant="secondary" class="font-normal">{tech}</Badge>
                    {/each}
                    {#if project.techStack.length === 0}
                        <span class="text-sm text-muted-foreground italic">None specified</span>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
