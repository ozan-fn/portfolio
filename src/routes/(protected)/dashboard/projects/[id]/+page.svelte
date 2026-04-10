<script lang="ts">
  import type { PageData } from "./$types";
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Eye, Trash2, Loader2 } from "@lucide/svelte";
  import { enhance } from "$app/forms";
  import { getFileUrl } from "$lib/storage.client";

  let { data }: { data: PageData } = $props();

  let isLoading = $state(false);
  let isDeleting = $state(false);

  async function handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    if (!file.type.startsWith("image/")) return;

    // Client-side resize to max 1200px
    const img = new Image();
    img.src = URL.createObjectURL(file);

    await new Promise((resolve) => (img.onload = resolve));

    let width = img.width;
    let height = img.height;
    const maxSize = 1200;

    if (width > maxSize || height > maxSize) {
      if (width > height) {
        height = Math.round((height * maxSize) / width);
        width = maxSize;
      } else {
        width = Math.round((width * maxSize) / height);
        height = maxSize;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });

            // Replace the file in the input using DataTransfer
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(resizedFile);
            input.files = dataTransfer.files;
          }
          URL.revokeObjectURL(img.src);
        },
        file.type,
        0.85,
      );
    } else {
      URL.revokeObjectURL(img.src);
    }
  }
</script>

<CrudHeader title="Edit Project" description="Update your project details and showcase your work." backUrl="/dashboard/projects">
  {#snippet actions()}
    <Button variant="outline" href="/dashboard/projects/{data.project.id}/view" class="gap-2">
      <Eye class="h-4 w-4" />
      View Details
    </Button>

    <form
      method="POST"
      action="?/delete"
      use:enhance={() => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        isDeleting = true;
        return async ({ update }) => {
          await update();
          isDeleting = false;
        };
      }}
    >
      <Button variant="destructive" size="icon" disabled={isDeleting || isLoading}>
        {#if isDeleting}
          <Loader2 class="h-4 w-4 animate-spin" />
        {:else}
          <Trash2 class="h-4 w-4" />
        {/if}
      </Button>
    </form>
  {/snippet}
</CrudHeader>

<CrudFormLayout action="?/update" enctype="multipart/form-data" bind:isLoading cancelUrl="/dashboard/projects" submitLabel="Update Project">
  {#snippet main()}
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <Label for="title">Project Title</Label>
        <Input id="title" name="title" value={data.project.title} placeholder="e.g. My Awesome Portfolio" required />
      </div>

      <div class="grid gap-2">
        <Label for="description">Short Description</Label>
        <Input id="description" name="description" value={data.project.description} placeholder="A brief summary of the project" required />
      </div>

      <div class="grid gap-2">
        <Label for="thumbnail">Thumbnail Image (Auto-resize max 1200px)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" onchange={handleFileChange} />
        {#if data.project.thumbnail}
          <div class="mt-2 relative group w-40 aspect-video rounded-md overflow-hidden border">
            <img src={getFileUrl(data.project.thumbnail)} alt="Current thumbnail" class="object-cover w-full h-full" />
          </div>
          <p class="text-[10px] text-muted-foreground italic mt-1">Current: {data.project.thumbnail.split("/").pop()}</p>
        {/if}
      </div>

      <div class="grid gap-2">
        <Label for="content">Full Content (Markdown or HTML)</Label>
        <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-75 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans leading-relaxed"
          >{data.project.content || ""}</textarea
        >
      </div>
    </div>
  {/snippet}

  {#snippet sidebar()}
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <Label for="techStack">Tech Stack (comma separated)</Label>
        <Input id="techStack" name="techStack" value={data.project.techStack.join(", ")} placeholder="SvelteKit, Tailwind CSS, Prisma" />
      </div>

      <div class="grid gap-2">
        <Label for="status">Status</Label>
        <select id="status" name="status" value={data.project.status} class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="COMPLETED">Completed</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      <div class="grid gap-2 pt-2">
        <Label for="env">Environment Variables (.env format)</Label>
        <textarea id="env" name="env" rows="4" placeholder="API_KEY=your_key&#10;DB_URL=your_url" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
          >{data.project.env || ""}</textarea
        >
      </div>

      <div class="grid gap-2 pt-2 border-t mt-2">
        <Label for="githubUrl">Source Code URL</Label>
        <Input id="githubUrl" name="githubUrl" type="url" value={data.project.githubUrl} placeholder="https://github.com/..." />
      </div>

      <div class="grid gap-2">
        <Label for="demoUrl">Live Demo URL</Label>
        <Input id="demoUrl" name="demoUrl" type="url" value={data.project.demoUrl} placeholder="https://demo.com" />
      </div>
    </div>
  {/snippet}
</CrudFormLayout>
