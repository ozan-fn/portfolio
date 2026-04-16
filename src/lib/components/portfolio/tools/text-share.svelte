<script lang="ts">
  import { Hammer, Share2, Copy, Check, Trash2, Eye, Zap, Wifi, WifiOff, Code2 } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Label } from "$lib/components/ui/label";
  import { toast } from "svelte-sonner";
  import mqtt from "mqtt";
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let {
    content = $bindable(""),
    isSubmitting = $bindable(false),
    views = 0,
    latency = 0,
  } = $props<{
    content?: string;
    isSubmitting?: boolean;
    views?: number;
    latency?: number;
  }>();

  let timeout: ReturnType<typeof setTimeout>;
  let mqttClient: mqtt.MqttClient | null = $state(null);
  let isConnected = $state(false);
  let lastRemoteContent = $state("");
  let lastLocalContent = $state("");
  let deviceId = $state("");

  let editorContainer: HTMLDivElement;
  let editor: any; // Use any to avoid build-time type issues if monaco isn't fully loaded

  onMount(async () => {
    if (!browser) return;

    // Dynamically import Monaco to avoid SSR issues with CSS/Browser APIs
    const monaco = await import("monaco-editor");

    deviceId = Math.random().toString(16).slice(3);
    lastLocalContent = content;
    lastRemoteContent = content;

    // Initialize Monaco
    editor = monaco.editor.create(editorContainer, {
      value: content,
      language: "markdown",
      theme: "vs-dark",
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 13,
      lineNumbers: "on",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      padding: { top: 16, bottom: 16 },
      roundedSelection: true,
      cursorSmoothCaretAnimation: "on",
      smoothScrolling: true,
    });

    editor.onDidChangeModelContent(() => {
      const newValue = editor.getValue();
      if (newValue !== content) {
        content = newValue;
        handleInput();
      }
    });

    // MQTT connection
    mqttClient = mqtt.connect("wss://broker.emqx.io:8084/mqtt", {
      clientId: `portfolio_share_${deviceId}`,
    });

    mqttClient.on("connect", () => {
      isConnected = true;
      mqttClient?.subscribe("ozan/portfolio/text-share");
    });

    mqttClient.on("message", (topic, message) => {
      try {
        const data = JSON.parse(message.toString());
        if (data.deviceId !== deviceId) {
          if (data.type === "saving") {
            isSubmitting = data.state;
            return;
          }

          lastRemoteContent = data.content;
          if (content === lastLocalContent) {
            content = data.content;
            lastLocalContent = data.content;
            // Update editor value without losing cursor position if possible
            const selection = editor.getSelection();
            editor.setValue(data.content);
            if (selection) editor.setSelection(selection);
          }
        }
      } catch (e) {
        console.error("MQTT Parse Error", e);
      }
    });
  });

  onDestroy(() => {
    mqttClient?.end();
    editor?.dispose();
  });

  function handleInput() {
    lastLocalContent = content;
    clearTimeout(timeout);

    // Broadcast via MQTT segera untuk realtime
    if (isConnected) {
      mqttClient?.publish(
        "ozan/portfolio/text-share",
        JSON.stringify({
          deviceId,
          content,
          timestamp: Date.now(),
        }),
      );
    }

    // Auto-save ke DB dengan interval 1 detik
    timeout = setTimeout(() => {
      const form = document.getElementById("text-share-form") as HTMLFormElement;
      if (form) {
        // Broadcast saving state to ALL clients
        if (isConnected) {
          mqttClient?.publish(
            "ozan/portfolio/text-share",
            JSON.stringify({
              type: "saving",
              state: true,
              deviceId,
            }),
          );
        }
        form.requestSubmit();
      }
    }, 1000);
  }

  // Effect to clear saving indicator when submission finishes
  $effect(() => {
    if (!isSubmitting && isConnected) {
      mqttClient?.publish(
        "ozan/portfolio/text-share",
        JSON.stringify({
          type: "saving",
          state: false,
          deviceId,
        }),
      );
    }
  });

  function clearContent() {
    content = "";
    editor?.setValue("");
    handleInput();
  }
</script>

<div class="grid gap-6">
  <Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
    <Card.Header class="p-8 pb-4">
      <div class="flex items-start justify-between">
        <div class="grid gap-1">
          <Card.Title class="text-2xl font-bold tracking-tight">Text Share</Card.Title>
          <div class="flex items-center gap-4">
            <Card.Description class="text-base">Editor gaya VS Code aktif. Perubahan realtime tersimpan.</Card.Description>
          </div>
        </div>
        <div class="flex flex-col items-end gap-2">
          <div class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 shrink-0">
            <div class="flex items-center gap-1.5">
              <Eye class="size-3" />
              {views} views
            </div>
            <div class="flex items-center gap-1.5 border-l border-border/50 pl-3">
              <Zap class="size-3 {latency > 500 ? 'text-amber-500' : 'text-emerald-500'}" />
              {latency}ms
            </div>
          </div>
          <div class="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-tight {isConnected ? 'text-emerald-500/80' : 'text-amber-500/80'}">
            {#if isConnected}
              <Wifi class="size-2.5" /> Monaco Realtime Active
            {:else}
              <WifiOff class="size-2.5" /> Offline Sync
            {/if}
          </div>
        </div>
      </div>
    </Card.Header>
    <Card.Content class="p-6 pt-2">
      <div class="grid gap-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between ml-1">
            <Label for="content" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
              <Code2 class="size-3" /> Shared Workspace
            </Label>
            <div class="flex items-center gap-2">
              {#if isSubmitting}
                <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">
                  <div class="h-2 w-2 rounded-full bg-primary/40"></div>
                  saving...
                </div>
              {/if}
              {#if content}
                <button type="button" onclick={clearContent} class="text-[10px] font-bold uppercase tracking-widest text-destructive hover:opacity-80 transition-opacity flex items-center gap-1">
                  <Trash2 class="size-3" /> Clear Editor
                </button>
              {/if}
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl border border-border bg-[#1e1e1e] shadow-inner">
            <div bind:this={editorContainer} class="h-75 w-full"></div>
            <input type="hidden" name="content" value={content} />
          </div>
        </div>
      </div></Card.Content
    >
  </Card.Root>
</div>
