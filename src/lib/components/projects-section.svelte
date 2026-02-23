<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<section id="projects" class="py-16 px-4 bg-muted/50">
    <div class="mx-auto max-w-7xl">
        <h3 class="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each [{ title: "Project One", description: "A web application built with SvelteKit and TypeScript", tech: ["SvelteKit", "TypeScript", "Tailwind"] }, { title: "Project Two", description: "Full-stack application with modern features", tech: ["React", "Node.js", "MongoDB"] }, { title: "Project Three", description: "Mobile-first responsive design portfolio", tech: ["Svelte", "CSS", "JavaScript"] }] as project}
                <div class="border rounded-lg p-6 bg-background hover:shadow-lg transition-shadow">
                    <h4 class="text-xl font-semibold mb-2">{project.title}</h4>
                    <p class="text-muted-foreground mb-4">{project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        {#each project.tech as tech}
                            <span class="px-2 py-1 bg-primary/10 text-primary text-sm rounded">{tech}</span>
                        {/each}
                    </div>
                    <div class="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">View Demo</Button>
                        <Button variant="ghost" size="sm">GitHub</Button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
