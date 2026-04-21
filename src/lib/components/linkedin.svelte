<script lang="ts">
  // ── props ───────────────────────────────────────────────────────────────────
  let {
    size = undefined,
    color = "#000000",
    strokeWidth = 2,
    background = "transparent",
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0,
    ...rest // Menangkap sisa props seperti class, aria-label, dll
  }: {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    background?: string;
    opacity?: number;
    rotation?: number;
    shadow?: number;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    padding?: number;
    [key: string]: any;
  } = $props();

  // ── derived values ──────────────────────────────────────────────────────────
  const transforms = $derived([rotation !== 0 ? `rotate(${rotation}deg)` : "", flipHorizontal ? "scaleX(-1)" : "", flipVertical ? "scaleY(-1)" : ""].filter(Boolean).join(" "));

  const viewBoxSize = $derived(24 + padding * 2);
  const viewBoxOffset = $derived(-padding);
  const viewBox = $derived(`${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`);
  const bgColor = $derived(background !== "transparent" ? background : undefined);
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {viewBox} fill="none" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" style="opacity: {opacity}; transform: {transforms}; {shadow > 0 ? `filter: drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3));` : ''} {bgColor ? `background-color: ${bgColor};` : ''}" {...rest}>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </g>
</svg>
