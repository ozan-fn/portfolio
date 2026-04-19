<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import type { editor as MonacoEditor } from "monaco-editor";
  import type { MonacoBinding } from "y-monaco";
  import * as Y from "yjs";
  import { Awareness, encodeAwarenessUpdate, applyAwarenessUpdate } from "y-protocols/awareness";
  import { Code2, Wifi, WifiOff, Trash2 } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Label } from "$lib/components/ui/label";

  // ─── TIPE DATA ─────────────────────────────────────────────────────────────
  type UserInfo = { name: string; color: string };

  type WsMessage = { type: "join" | "request-state" | "leave"; room: string; clientId: number; user?: UserInfo } | { type: "state-sync" | "doc-update" | "awareness-update"; room: string; clientId: number; update: string; user?: UserInfo };

  // ─── PROPS & STATE (SVELTE 5) ──────────────────────────────────────────────
  let { content = $bindable(""), isSubmitting = $bindable(false) } = $props<{ content?: string; isSubmitting?: boolean }>();

  const ANIMALS = ["Axolotl", "Capybara", "Quokka", "Pangolin", "Tardigrade", "Narwhal", "Blobfish", "Platypus", "Fossa", "Tapir", "Okapi"];
  const ROOM = "portfolio-text-share-v2";
  const WS_URL = "wss://free.blr2.piesocket.com/v3/1?api_key=0kjlwv14ZviIMa9HsqFfXnjYXkZsf8I4xoNvIci6";

  let editorContainer: HTMLDivElement;
  let editor: MonacoEditor.IStandaloneCodeEditor | null = null;
  let ydoc: Y.Doc | null = null;
  let awareness: Awareness | null = null;
  let binding: MonacoBinding | null = null;
  let yText = $state<Y.Text | null>(null);
  let ws: WebSocket | null = null;

  let isConnected = $state(false);
  let activeUsersCount = $state(1);

  let myClientId = 0;
  let myUser: UserInfo = { name: "", color: "" };

  // ─── FUNGSI UTILITAS UI & KURSOR ───────────────────────────────────────────
  function updateActiveUsers() {
    if (!awareness) return;
    activeUsersCount = Array.from(awareness.getStates().keys()).length || 1;
  }

  // Kita tidak perlu inject <style> manual lagi!
  // y-monaco + y-protocols secara otomatis meng-inject style warna berdasarkan user.color

  function sendWs(data: WsMessage) {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  }

  // ─── LIFECYCLE HOOKS ───────────────────────────────────────────────────────
  onMount(async () => {
    if (!browser) return;

    const [monaco, { MonacoBinding: Binding }] = await Promise.all([import("monaco-editor"), import("y-monaco")]);

    // 1. Inisialisasi Monaco Editor
    try {
      editor = monaco.editor.create(editorContainer, {
        value: "",
        language: "markdown",
        theme: "vs-dark",
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 13,
        fontFamily: "'JetBrains Mono', monospace",
        fixedOverflowWidgets: true,
        // PENTING: Memberi ruang di atas agar nama di baris pertama tidak terpotong
        padding: { top: 28, bottom: 20 },
      });
    } catch (e) {
      console.error("Monaco load error:", e);
      return;
    }

    const model = editor.getModel();
    if (!model) return;

    // 2. Inisialisasi Yjs Document & Awareness
    ydoc = new Y.Doc();
    yText = ydoc.getText("monaco");

    // Gunakan protokol Awareness resmi untuk sinkronisasi kursor
    awareness = new Awareness(ydoc);
    myClientId = ydoc.clientID;
    myUser = {
      name: ANIMALS[Math.floor(Math.random() * ANIMALS.length)],
      color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
    };

    // Set state lokal agar ditangkap oleh y-monaco
    awareness.setLocalStateField("user", myUser);

    yText.observe(() => {
      content = yText!.toString();
    });

    // 3. Event Listener: Update Dokumen & Kursor
    ydoc.on("update", (update: Uint8Array, origin: unknown) => {
      if (origin === "remote") return;
      sendWs({
        type: "doc-update",
        room: ROOM,
        clientId: myClientId,
        update: btoa(String.fromCharCode(...update)),
      });
    });

    // Tangkap pergerakan kursor lalu kirim via WebSocket
    awareness.on("update", ({ added, updated, removed }: any, origin: unknown) => {
      updateActiveUsers();
      if (origin === "local") {
        const changedClients = added.concat(updated, removed);
        const updateBytes = encodeAwarenessUpdate(awareness!, changedClients);
        sendWs({
          type: "awareness-update",
          room: ROOM,
          clientId: myClientId,
          update: btoa(String.fromCharCode(...updateBytes)),
        });
      }
    });

    // 4. Binding Yjs, Monaco, dan Awareness (Resmi)
    binding = new Binding(yText, model, new Set([editor]), awareness);

    // 5. Manajemen Koneksi WebSocket
    function connectWs() {
      ws = new WebSocket(`${WS_URL}&room=${ROOM}`);

      ws.onopen = () => {
        isConnected = true;
        sendWs({ type: "join", room: ROOM, clientId: myClientId, user: myUser });
        sendWs({ type: "request-state", room: ROOM, clientId: myClientId });
      };

      ws.onclose = () => {
        isConnected = false;
        setTimeout(connectWs, 2000);
      };

      ws.onmessage = (event) => {
        let msg: WsMessage;
        try {
          msg = JSON.parse(event.data);
        } catch {
          return;
        }

        if (msg.clientId === myClientId || msg.room !== ROOM) return;

        switch (msg.type) {
          case "join":
          case "request-state":
            // Saat ada user baru, kirim state doc & kursor kita saat ini
            const docState = Y.encodeStateAsUpdate(ydoc!);
            sendWs({
              type: "state-sync",
              room: ROOM,
              clientId: myClientId,
              update: btoa(String.fromCharCode(...docState)),
              user: myUser,
            });
            // Kirim state awareness (kursor) kita juga
            const awState = encodeAwarenessUpdate(awareness!, [myClientId]);
            sendWs({
              type: "awareness-update",
              room: ROOM,
              clientId: myClientId,
              update: btoa(String.fromCharCode(...awState)),
            });
            break;

          case "state-sync":
          case "doc-update":
            if (msg.update) {
              const bytes = Uint8Array.from(atob(msg.update), (c) => c.charCodeAt(0));
              Y.applyUpdate(ydoc!, bytes, "remote");
            }
            break;

          case "awareness-update":
            // Terima pergerakan kursor orang lain
            if (msg.update) {
              const bytes = Uint8Array.from(atob(msg.update), (c) => c.charCodeAt(0));
              applyAwarenessUpdate(awareness!, bytes, "remote");
            }
            break;

          case "leave":
            awareness?.removeAwarenessStates([msg.clientId], "remote");
            updateActiveUsers();
            break;
        }
      };
    }

    connectWs();
  });

  onDestroy(() => {
    if (ws) {
      sendWs({ type: "leave", room: ROOM, clientId: myClientId });
      ws.onclose = null;
      ws.close();
    }
    awareness?.destroy();
    binding?.destroy();
    ydoc?.destroy();
    editor?.dispose();
  });

  function clearContent() {
    if (!yText || !ydoc || isSubmitting) return;
    ydoc.transact(() => {
      yText!.delete(0, yText!.length);
    });
  }
</script>

<div class="grid gap-6">
  <Card.Root class="overflow-hidden rounded-2xl border-border bg-card shadow-sm">
    <Card.Header class="p-8 pb-4">
      <div class="flex items-start justify-between">
        <div class="grid gap-1">
          <Card.Title class="text-2xl font-bold">Collaborative Editor</Card.Title>
          <Card.Description>Real-time sync via Yjs + PieSocket relay.</Card.Description>
        </div>
        <div class="flex items-center gap-1.5 text-[10px] font-bold uppercase transition-colors duration-300 {isConnected ? 'text-emerald-500' : 'text-amber-500'}">
          {#if isConnected}
            <Wifi class="size-3" /> Online ({activeUsersCount})
          {:else}
            <WifiOff class="size-3" /> Connecting...
          {/if}
        </div>
      </div>
    </Card.Header>

    <Card.Content class="p-6 pt-2">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between mb-1">
          <Label class="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-2">
            <Code2 class="size-3" /> Markdown Editor
          </Label>
          <button onclick={clearContent} disabled={isSubmitting || !yText} class="text-[10px] font-bold text-destructive/80 hover:text-destructive transition-colors flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed">
            <Trash2 class="size-3" /> Clear
          </button>
        </div>

        <div class="relative rounded-xl border border-border bg-[#1e1e1e] overflow-hidden shadow-inner">
          <div bind:this={editorContainer} class="h-80 w-full"></div>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>

<style>
  /* Base garis kursor (Cursor I-Beam) */
  :global(.yRemoteSelectionHead) {
    position: absolute;
    border-left: 2px solid;
    height: 100%;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 99 !important;
    /* WAJIB agar nama di baris pertama tidak hilang/terpotong oleh Monaco */
    overflow: visible !important;
  }

  /* Menimpa style ::after bawaan y-monaco agar berada DI ATAS kursor */
  :global(.yRemoteSelectionHead::after) {
    bottom: 100% !important; /* Dorong ke atas */
    top: auto !important; /* Reset default bawaan y-monaco */
    left: -2px !important;
    margin-bottom: 2px !important;

    padding: 2px 6px !important;
    font-size: 10px !important;
    font-family: "JetBrains Mono", monospace !important;
    font-weight: 700 !important;
    white-space: nowrap !important;
    color: white !important;
    border-radius: 4px 4px 4px 0 !important;
    pointer-events: none !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  }

  /* Highlighting blok teks */
  :global(.yRemoteSelection) {
    pointer-events: none;
  }
</style>
