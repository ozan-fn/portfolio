<script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";

    import { resetMode, setMode } from "mode-watcher";
    import { buttonVariants } from "$lib/components/ui/button/index.js";

    // Fungsi toggle theme dengan view transition
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains("dark");

        if (!document.startViewTransition) {
            if (isDark) setMode("light");
            else setMode("dark");
            return;
        }

        document.startViewTransition(() => {
            if (isDark) setMode("light");
            else setMode("dark");
        });
    }
</script>

<button class={buttonVariants({ variant: "outline", size: "icon" })} on:click={toggleTheme}>
    <SunIcon class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90" />
    <MoonIcon class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0" />
    <span class="sr-only">Toggle theme</span>
</button>
