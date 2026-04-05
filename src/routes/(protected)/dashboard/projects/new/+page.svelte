<script lang="ts">
    import { enhance } from '$app/forms';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Label } from '$lib/components/ui/label/index.js';
    import { ChevronLeft, Loader2 } from '@lucide/svelte';

    let isLoading = $state(false);
</script>

<div class="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
    <div class="flex items-center gap-4">
        <Button variant="outline" size="icon" href="/dashboard/projects">
            <ChevronLeft class="h-4 w-4" />
        </Button>
        <div>
            <h1 class="text-3xl font-bold tracking-tight">New Project</h1>
            <p class="text-muted-foreground">Add a new project to your portfolio.</p>
        </div>
    </div>

    <form
        method="POST"
        use:enhance={() => {
            isLoading = true;
            return async ({ update }) => {
                await update();
                isLoading = false;
            };
        }}
        class="grid gap-8 rounded-lg border bg-card p-6 shadow-sm"
    >
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label for="title">Project Title</Label>
                <Input id="title" name="title" placeholder="e.g. My Awesome Portfolio" required />
            </div>

            <div class="grid gap-2">
                <Label for="description">Short Description</Label>
                <Input id="description" name="description" placeholder="A brief summary of the project" required />
            </div>

            <div class="grid gap-2">
                <Label for="thumbnail">Thumbnail URL</Label>
                <Input id="thumbnail" name="thumbnail" placeholder="https://example.com/image.jpg" />
            </div>

            <div class="grid gap-2">
                <Label for="techStack">Tech Stack (comma separated)</Label>
                <Input id="techStack" name="techStack" placeholder="SvelteKit, Tailwind CSS, Prisma" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid gap-2">
                    <Label for="githubUrl">Source Code URL</Label>
                    <Input id="githubUrl" name="githubUrl" type="url" placeholder="https://github.com/username/repo" />
                </div>
                <div class="grid gap-2">
                    <Label for="demoUrl">Demo URL</Label>
                    <Input id="demoUrl" name="demoUrl" type="url" placeholder="https://project-demo.com" />
                </div>
            </div>

            <div class="grid gap-2">
                <Label for="status">Status</Label>
                <select id="status" name="status" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="COMPLETED">Completed</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="ARCHIVED">Archived</option>
                </select>
            </div>

            <div class="grid gap-2">
                <Label for="content">Full Content (Markdown or HTML)</Label>
                <textarea id="content" name="content" rows="10" placeholder="Describe your project in detail..." class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
            </div>
        </div>

        <div class="flex justify-end gap-4">
            <Button variant="outline" href="/dashboard/projects" disabled={isLoading}>Cancel</Button>
            <Button type="submit" disabled={isLoading}>
                {#if isLoading}
                    <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                {:else}
                    Create Project
                {/if}
            </Button>
        </div>
    </form>
</div>
