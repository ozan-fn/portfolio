<script lang="ts">
  import CrudHeader from "$lib/components/admin/crud-header.svelte";
  import CrudFormLayout from "$lib/components/admin/crud-form-layout.svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  let isLoading = $state(false);

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

<CrudHeader title="New Project" description="Add a new project to your portfolio." backUrl="/dashboard/projects" />

<CrudFormLayout enctype="multipart/form-data" bind:isLoading cancelUrl="/dashboard/projects" submitLabel="Create Project">
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
        <Label for="thumbnail">Thumbnail Image (Auto-resize max 1200px)</Label>
        <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" onchange={handleFileChange} />
      </div>

      <div class="grid gap-2">
        <Label for="content">Full Content (Markdown or HTML)</Label>
        <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-50 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans"></textarea>
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
        <Label for="env">Environment Variables (.env format)</Label>
        <textarea id="env" name="env" rows="4" placeholder="API_KEY=your_key&#10;DB_URL=your_url" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"></textarea>
      </div>

      <div class="grid gap-2">
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
