<script lang="ts">
  let { size = undefined, color = "#000000", strokeWidth = 2, background = "transparent", opacity = 1, rotation = 0, shadow = 0, flipHorizontal = false, flipVertical = false, padding = 0 } = $props();

  // Derived values menggunakan logic Svelte 5
  let transforms = $derived([rotation !== 0 ? `rotate(${rotation}deg)` : "", flipHorizontal ? "scaleX(-1)" : "", flipVertical ? "scaleY(-1)" : ""].filter(Boolean).join(" "));

  let viewBoxSize = $derived(24 + padding * 2);
  let viewBoxOffset = $derived(-padding);
  let viewBox = $derived(`${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`);
  let bgColor = $derived(background !== "transparent" ? background : undefined);
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {viewBox} fill="none" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" style="opacity: {opacity}; transform: {transforms}; {shadow > 0 ? `filter: drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : ''}; {bgColor ? `background-color: ${bgColor}` : ''}">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </g>
</svg>
