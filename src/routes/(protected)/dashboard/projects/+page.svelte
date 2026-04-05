<script lang="ts">
    import type { PageData } from './$types';
    import * as Table from '$lib/components/ui/table/index.js';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Badge } from '$lib/components/ui/badge/index.js';
    import { Plus, Pencil, Trash2, ExternalLink, Code, Eye } from '@lucide/svelte';

    let { data }: { data: PageData } = $props();
    const { projects } = data;

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

<div class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-3xl font-bold tracking-tight">Projects</h1>
            <p class="text-muted-foreground">Manage your portfolio projects here.</p>
        </div>
        <Button href="/dashboard/projects/new">
            <Plus class="mr-2 h-4 w-4" />
            Add Project
        </Button>
    </div>

    <div class="rounded-md border bg-card">
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head class="w-[300px]">Project</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Tech Stack</Table.Head>
                    <Table.Head>Created At</Table.Head>
                    <Table.Head class="text-right">Actions</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#if projects.length === 0}
                    <Table.Row>
                        <Table.Cell colspan={5} class="h-24 text-center text-muted-foreground">No projects found. Create your first project to get started.</Table.Cell>
                    </Table.Row>
                {:else}
                    {#each projects as project (project.id)}
                        <Table.Row>
                            <Table.Cell>
                                <div class="flex flex-col">
                                    <span class="font-medium">{project.title}</span>
                                    <div class="flex gap-2 mt-1">
                                        {#if project.githubUrl}
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">
                                                <Code size={14} />
                                            </a>
                                        {/if}
                                        {#if project.demoUrl}
                                            <a href={project.demoUrl} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">
                                                <ExternalLink size={14} />
                                            </a>
                                        {/if}
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge variant={getStatusColor(project.status)}>
                                    {project.status.replace('_', ' ')}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <div class="flex flex-wrap gap-1">
                                    {#each project.techStack.slice(0, 3) as tech}
                                        <Badge variant="outline" class="text-[10px] px-1 py-0">{tech}</Badge>
                                    {/each}
                                    {#if project.techStack.length > 3}
                                        <span class="text-[10px] text-muted-foreground">+{project.techStack.length - 3}</span>
                                    {/if}
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span class="text-muted-foreground text-sm">
                                    {new Date(project.createdAt).toLocaleDateString()}
                                </span>
                            </Table.Cell>
                            <Table.Cell class="text-right">
                                <div class="flex justify-end gap-2">
                                    <Button variant="ghost" size="icon" href="/dashboard/projects/{project.id}/view">
                                        <Eye class="h-4 w-4" />
                                        <span class="sr-only">View</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" href="/dashboard/projects/{project.id}">
                                        <Pencil class="h-4 w-4" />
                                        <span class="sr-only">Edit</span>
                                    </Button>
                                    <form action="?/delete" method="POST">
                                        <input type="hidden" name="id" value={project.id} />
                                        <Button variant="ghost" size="icon" type="submit" class="text-destructive hover:text-destructive hover:bg-destructive/10">
                                            <Trash2 class="h-4 w-4" />
                                            <span class="sr-only">Delete</span>
                                        </Button>
                                    </form>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                {/if}
            </Table.Body>
        </Table.Root>
    </div>
</div>
