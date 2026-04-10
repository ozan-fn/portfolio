<script lang="ts">
    import type { PageData } from "./$types";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Pencil, ExternalLink, Code, Calendar, Layers, Info, ArrowUpRight, Globe, Terminal } from "@lucide/svelte";
    import CrudHeader from "$lib/components/admin/crud-header.svelte";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
    import { getFileUrl } from "$lib/storage.client";

    let { data }: { data: PageData } = $props();

    const getStatusColor = (status: string) => {
        switch (status) {
            case "COMPLETED":
                return "default";
            case "IN_PROGRESS":
                return "secondary";
            case "ARCHIVED":
                return "outline";
            default:
                return "default";
        }
    };
</script>

<CrudHeader title={data.project.title} description="Detailed project information and statistics." backUrl="/dashboard/projects">
    {#snippet actions()}
        <Button variant="outline" href="/projects/{data.project.id}" target="_blank" class="gap-2">
            <ExternalLink class="h-4 w-4" />
            Public View
        </Button>
        <Button href="/dashboard/projects/{data.project.id}" class="gap-2">
            <Pencil class="h-4 w-4" />
            Edit Project
        </Button>
    {/snippet}
</CrudHeader>

<div class="px-6 pb-12 max-w-7xl mx-auto">
    <div class="grid gap-6 lg:grid-cols-3">
        <!-- Main Content Column -->
        <div class="lg:col-span-2 space-y-6">
            <!-- Thumbnail Section -->
            <Card class="overflow-hidden border-none shadow-md bg-muted/20">
                {#if data.project.thumbnail}
                    <div class="relative group">
                        <img src={getFileUrl(data.project.thumbnail)} alt={data.project.title} class="aspect-video w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-[1.01]" />
                        <div class="absolute top-4 right-4 flex items-center gap-2">
                            <Badge variant={getStatusColor(data.project.status)} class="shadow-sm">
                                {data.project.status.replace("_", " ")}
                            </Badge>
                        </div>
                    </div>
                {:else}
                    <div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic rounded-xl border-2 border-dashed">No thumbnail provided</div>
                {/if}
            </Card>

            <!-- Description & Content Section -->
            <Card class="shadow-sm overflow-hidden">
                <CardHeader class="border-b bg-muted/30">
                    <div class="flex items-center gap-2">
                        <Info class="h-5 w-5 text-primary" />
                        <CardTitle>Project Information</CardTitle>
                    </div>
                    <CardDescription>Full description and detailed content</CardDescription>
                </CardHeader>
                <CardContent class="p-6 space-y-8">
                    <div>
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">Overview</h4>
                        <p class="text-lg leading-relaxed text-foreground/90">
                            {data.project.description}
                        </p>
                    </div>

                    <div class="pt-6 border-t">
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Detailed Content</h4>
                        <div class="prose prose-sm dark:prose-invert max-w-none">
                            {#if data.project.content}
                                <div class="whitespace-pre-wrap rounded-xl bg-muted/40 p-5 border text-foreground/80 leading-relaxed">
                                    {data.project.content}
                                </div>
                            {:else}
                                <div class="flex flex-col items-center justify-center py-8 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
                                    <p class="italic">No detailed content written yet.</p>
                                </div>
                            {/if}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {#if data.project.env}
                <Card class="shadow-sm border-amber-200/50 dark:border-amber-900/30">
                    <CardHeader class="bg-amber-50/50 dark:bg-amber-950/10 border-b border-amber-100 dark:border-amber-900/20">
                        <div class="flex items-center gap-2">
                            <Terminal class="h-5 w-5 text-amber-600 dark:text-amber-500" />
                            <CardTitle class="text-amber-900 dark:text-amber-100">Environment Variables</CardTitle>
                        </div>
                        <CardDescription>Configuration and secrets</CardDescription>
                    </CardHeader>
                    <CardContent class="p-4">
                        <pre class="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100 font-mono leading-relaxed"><code>{data.project.env}</code></pre>
                    </CardContent>
                </Card>
            {/if}
        </div>

        <!-- Sidebar Info Column -->
        <div class="space-y-6">
            <!-- Project Stats/Meta -->
            <Card>
                <CardHeader class="py-4 border-b bg-muted/10">
                    <CardTitle class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Properties</CardTitle>
                </CardHeader>
                <CardContent class="p-6 space-y-4">
                    <div class="flex items-center justify-between text-sm py-1">
                        <span class="flex items-center text-muted-foreground">
                            <Calendar class="mr-2 h-4 w-4" />
                            Created
                        </span>
                        <span class="font-medium">{new Date(data.project.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div class="flex items-center justify-between text-sm py-1">
                        <span class="flex items-center text-muted-foreground">
                            <Layers class="mr-2 h-4 w-4" />
                            Status
                        </span>
                        <Badge variant={getStatusColor(data.project.status)} class="font-medium">
                            {data.project.status}
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <!-- Links Section -->
            <Card>
                <CardHeader class="py-4 border-b bg-muted/10">
                    <CardTitle class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Reference Links</CardTitle>
                </CardHeader>
                <CardContent class="p-6 space-y-3">
                    {#if data.project.githubUrl}
                        <a href={data.project.githubUrl} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200">
                            <span class="flex items-center font-medium text-sm">
                                <Code class="mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                                Source Code
                            </span>
                            <ArrowUpRight class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    {/if}

                    {#if data.project.demoUrl}
                        <a href={data.project.demoUrl} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200">
                            <span class="flex items-center font-medium text-sm">
                                <Globe class="mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                                Live Demo
                            </span>
                            <ArrowUpRight class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    {/if}

                    {#if !data.project.githubUrl && !data.project.demoUrl}
                        <p class="text-sm text-center py-4 text-muted-foreground italic">No links available</p>
                    {/if}
                </CardContent>
            </Card>

            <!-- Tech Stack Section -->
            <Card>
                <CardHeader class="py-4 border-b bg-muted/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <CardTitle class="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Code class="h-4 w-4" />
                        Technologies
                    </CardTitle>
                </CardHeader>
                <CardContent class="p-6">
                    <div class="flex flex-wrap gap-2">
                        {#each data.project.techStack as tech}
                            <Badge variant="secondary" class="font-medium bg-secondary/50 hover:bg-secondary transition-colors">
                                {tech}
                            </Badge>
                        {/each}
                        {#if data.project.techStack.length === 0}
                            <span class="text-sm text-muted-foreground italic">None specified</span>
                        {/if}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</div>
