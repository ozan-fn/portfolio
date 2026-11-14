<script lang="ts">
  import Monaco from "svelte-monaco";
  import * as Y from "yjs";
  import mqtt from "mqtt";
  import * as awarenessProtocol from "y-protocols/awareness";
  import { onDestroy } from "svelte";

  import type { MonacoBinding as MonacoBindingType } from "y-monaco";

  interface Props {
    content?: string;
    // null = tamu: hanya baca, tidak ikut room kolaborasi.
    room?: string | null;
  }
  let { content = $bindable(""), room = null }: Props = $props();

  let isReady = $state(false);
  let isSaving = $state(false);
  let saveQueued = false;
  let isConnected = $state(false);
  let isConflict = $state(false);
  const canEdit = $derived(!!room);
  let monacoOptions = $derived({ automaticLayout: true, readOnly: !isReady || !room });

  // Isi terakhir yang kita lihat di DB; dipakai server untuk compare-and-swap.
  let baseContent = content;

  let client: mqtt.MqttClient;
  let binding: MonacoBindingType;
  let awareness: awarenessProtocol.Awareness;
  let ydoc: Y.Doc;
  let saveTimer: ReturnType<typeof setTimeout>;
  let syncHealingTimer: ReturnType<typeof setTimeout> | undefined;

  const BROKER_URL = "wss://broker.emqx.io:8084/mqtt";
  const topics = $derived(
    room
      ? {
          update: `portfolio/monaco/${room}/update`,
          awareness: `portfolio/monaco/${room}/awareness`,
          syncReq: `portfolio/monaco/${room}/sync-req`,
        }
      : null,
  );

  // Satu request save pada satu waktu; kalau ada perubahan baru saat
  // request masih jalan, simpan sekali lagi setelahnya.
  async function saveContent() {
    if (!ydoc || !topics || isConflict) return;
    if (isSaving) {
      saveQueued = true;
      return;
    }

    isSaving = true;
    try {
      const text = ydoc.getText("monaco").toString();
      const fd = new FormData();
      fd.append("content", text);
      fd.append("base", baseContent);
      const res = await fetch("/tools?/share", {
        method: "POST",
        body: fd,
        keepalive: true,
      });

      if (res.status === 409) {
        // Teks di DB sudah diubah pihak lain: jangan timpa, berhenti auto-save.
        isConflict = true;
        return;
      }
      if (!res.ok) {
        console.error("Save failed:", await res.text());
        return;
      }
      baseContent = text;
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      isSaving = false;
      if (saveQueued) {
        saveQueued = false;
        saveContent();
      }
    }
  }

  function connectMqtt() {
    if (!topics) return;
    client = mqtt.connect(BROKER_URL);

    client.on("connect", () => {
      isConnected = true;
      client.subscribe(topics.update);
      client.subscribe(topics.awareness);
      client.subscribe(topics.syncReq);

      const stateVector = Y.encodeStateVector(ydoc);
      client.publish(topics.syncReq, stateVector as any);
    });

    client.on("reconnect", () => { isConnected = true; });

    client.on("close", () => { isConnected = false; });

    client.on("offline", () => { isConnected = false; });

    client.on("message", (topic, message) => {
      const uint8Msg = new Uint8Array(message as any);

      if (topic === topics!.update) {
        try {
          Y.applyUpdate(ydoc, uint8Msg, client);
        } catch (e) { console.warn("Yjs applyUpdate error:", e); }
      } else if (topic === topics!.awareness) {
        try {
          awarenessProtocol.applyAwarenessUpdate(awareness, uint8Msg, client);
        } catch (e) { console.warn("Awareness apply error:", e); }
      } else if (topic === topics!.syncReq) {
        try {
          const missingUpdate = Y.encodeStateAsUpdate(ydoc, uint8Msg);
          if (missingUpdate.length > 2) {
            client.publish(topics!.update, missingUpdate as any);
          }
        } catch (e) { console.warn("Sync encode error:", e); }
      }
    });
  }

  async function handleEditorReady(event: CustomEvent) {
    const editor = event.detail;
    const { MonacoBinding } = await import("y-monaco");

    ydoc = new Y.Doc();
    awareness = new awarenessProtocol.Awareness(ydoc);

    const ytext = ydoc.getText("monaco");

    if (content) {
      ytext.insert(0, content);
    }

    // Tamu hanya membaca: tidak connect ke room dan tidak pernah menyimpan.
    if (topics) {
      connectMqtt();

      (ydoc as any).on("update", (update: Uint8Array, origin: any) => {
        if (origin !== client) {
          client.publish(topics!.update, update as any);

          clearTimeout(syncHealingTimer);
          syncHealingTimer = setTimeout(() => {
            const fullState = Y.encodeStateAsUpdate(ydoc);
            client.publish(topics!.update, fullState as any);
          }, 500);
        }

        clearTimeout(saveTimer);
        saveTimer = setTimeout(saveContent, 2000);
      });

      (awareness as any).on("update", ({ added, updated, removed }: { added: number[]; updated: number[]; removed: number[] }, origin: any) => {
        if (origin !== client) {
          const changedClients = added.concat(updated).concat(removed);
          const enc = awarenessProtocol.encodeAwarenessUpdate(awareness, changedClients);
          client.publish(topics!.awareness, enc as any);
        }
      });
    }

    binding = new MonacoBinding(ytext, editor.getModel(), new Set([editor]), awareness);
    isReady = true;
  }

  onDestroy(() => {
    if (saveTimer) clearTimeout(saveTimer);
    if (syncHealingTimer) clearTimeout(syncHealingTimer);
    if (ydoc) {
      saveContent();
    }
    if (binding) binding.destroy();
    if (client) client.end();
  });
</script>

<div class="editor-wrapper">
  <div class="flex items-center justify-between gap-2 mb-1">
    <span class="text-xs text-muted-foreground">
      {#if !isReady}
        Loading...
      {:else if !canEdit}
        Hanya bisa dilihat — login untuk mengedit
      {:else if isConflict}
        Teks sudah diubah di tempat lain — muat ulang halaman
      {:else if isSaving}
        Menyimpan...
      {:else if !isConnected}
        Terputus — perubahan hanya lokal
      {:else}
        Tersimpan
      {/if}
    </span>
  </div>
  <div class="monaco-container">
    <Monaco value="" options={monacoOptions} theme="vs-dark" on:ready={handleEditorReady} />
  </div>
</div>

<style>
  .editor-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .monaco-container {
    width: 100%;
    height: 600px;
    border: 1px solid #ccc;
  }

  :global(.yRemoteSelection) {
    background-color: rgba(250, 129, 0, 0.5);
  }
  :global(.yRemoteSelectionHead) {
    position: absolute;
    border-left: orange solid 2px;
    border-top: orange solid 2px;
    border-bottom: orange solid 2px;
    height: 100%;
    box-sizing: border-box;
  }
  :global(.yRemoteSelectionHead::after) {
    position: absolute;
    content: " ";
    border: 3px solid orange;
    border-radius: 4px;
    left: -4px;
    top: -5px;
  }
</style>
