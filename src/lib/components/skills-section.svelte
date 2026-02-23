<section id="skills" class="py-16 px-4">
    <div class="mx-auto max-w-7xl">
        <h3 class="text-3xl font-bold mb-8 text-center">Skills & Technologies</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {#each ["JavaScript", "TypeScript", "SvelteKit", "React", "Node.js", "Tailwind CSS", "Git", "Docker"] as skill}
                <div class="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
                    <p class="font-medium">{skill}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
