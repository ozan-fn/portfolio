<script lang="ts">
    import ThemeToggle from "$lib/components/theme-toggle.svelte";
</script>

<header class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto max-w-7xl w-full px-4 py-4">
        <div class="flex flex-row items-center justify-between">
            <h1 class="text-xl font-bold">My Portfolio</h1>
            <nav class="hidden md:flex gap-6 items-center">
                <a href="#about" class="hover:text-primary transition-colors">About</a>
                <a href="#skills" class="hover:text-primary transition-colors">Skills</a>
                <a href="#projects" class="hover:text-primary transition-colors">Projects</a>
                <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
                <ThemeToggle />
            </nav>
            <div class="md:hidden">
                <ThemeToggle />
            </div>
        </div>
    </div>
</header>
