<script lang="ts">
    import { Crepe } from '@milkdown/crepe';
    import '@milkdown/crepe/theme/common/style.css';
    import '@milkdown/crepe/theme/frame-dark.css';

    // Props Svelte 5
    let { content = 'Hello, Milkdown!' } = $props();
    let editor: Crepe | undefined = $state();

    // Fungsi inisialisasi saat elemen muncul
    function init(node: HTMLDivElement) {
        editor = new Crepe({
            root: node,
            defaultValue: content,
        });

        editor.create();

        // Bersihkan editor saat komponen dihapus dari layar
        return {
            destroy() {
                editor?.destroy();
            },
        };
    }

    // Fungsi untuk ambil data ke Prisma
    export function getMarkdown() {
        return editor?.getMarkdown() ?? '';
    }
</script>

<div use:init></div>
