<script lang="ts">
    import CrudHeader from '$lib/components/admin/crud-header.svelte';
    import CrudFormLayout from '$lib/components/admin/crud-form-layout.svelte';
    import { Input } from '$lib/components/ui/input/index.js';
    import { Label } from '$lib/components/ui/label/index.js';

    let isLoading = $state(false);
</script>

<CrudHeader title="New Project" description="Add a new project to your portfolio." backUrl="/dashboard/projects" />

<CrudFormLayout bind:isLoading cancelUrl="/dashboard/projects" submitLabel="Create Project">
    {#snippet main()}
        <div class="flex flex-col gap-4">
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
                <Label for="content">Full Content (Markdown or HTML)</Label>
                <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans"
                ></textarea>
            </div>
        </div>
    {/snippet}

    {#snippet sidebar()}
        <div class="flex flex-col gap-4">
            <div class="grid gap-2">
                <Label for="techStack">Tech Stack (comma separated)</Label>
                <Input id="techStack" name="techStack" placeholder="SvelteKit, Tailwind CSS, Prisma" />
            </div>

            <div class="grid gap-2">
                <Label for="status">Status</Label>
                <select id="status" name="status" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="COMPLETED">Completed</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="ARCHIVED">Archived</option>
                </select>
            </div>

            <div class="grid gap-2 pt-2">
                <Label for="githubUrl">Source Code URL</Label>
                <Input id="githubUrl" name="githubUrl" type="url" placeholder="https://github.com/..." />
            </div>

            <div class="grid gap-2">
                <Label for="demoUrl">Live Demo URL</Label>
                <Input id="demoUrl" name="demoUrl" type="url" placeholder="https://demo.com" />
            </div>
        </div>
    {/snippet}
</CrudFormLayout>
