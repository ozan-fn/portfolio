<script lang="ts">
  import Monaco from "svelte-monaco";
  import * as Y from "yjs";
  import mqtt from "mqtt";
  import * as awarenessProtocol from "y-protocols/awareness";
  import { onDestroy } from "svelte";

  import type { MonacoBinding as MonacoBindingType } from "y-monaco";

  // Props untuk initial content dari database
  interface Props {
    content?: string;
  }
  let { content = "" }: Props = $props();

  // State untuk melacak status koneksi websocket (via MQTT)
  let isConnected = $state(true);

  let client: mqtt.MqttClient;
  let binding: MonacoBindingType;
  let awareness: awarenessProtocol.Awareness;
  let ydoc: Y.Doc;
  let saveTimer: ReturnType<typeof setTimeout>;
  let syncHealingTimer: ReturnType<typeof setTimeout> | undefined;

  const roomname = `tes-portfolio-sinkron-123`;
  const updateTopic = `portfolio/monaco/${roomname}/update`;
  const awarenessTopic = `portfolio/monaco/${roomname}/awareness`;
  // TAMBAHAN: Topic khusus untuk Yjs Sync Protocol (meminta history data)
  const syncReqTopic = `portfolio/monaco/${roomname}/sync-req`;

  // Fungsi untuk save content ke database
  async function saveContent() {
    try {
      const formData = new FormData();
      formData.append("content", ydoc.getText("monaco").toString());

      const response = await fetch("/tools?/share", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Failed to save content");
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  }

  // Fungsi terpisah untuk koneksi MQTT agar bisa dipanggil ulang
  function connectMqtt() {
    client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");

    client.on("connect", () => {
      client.subscribe(updateTopic);
      client.subscribe(awarenessTopic);
      client.subscribe(syncReqTopic);

      // FITUR Y-WEBSOCKET: Sync Step 1
      // Begitu konek, broadcast "State Vector" kita (kondisi dokumen saat ini)
      // ke user lain untuk meminta data yang kita lewatkan.
      const stateVector = Y.encodeStateVector(ydoc);
      client.publish(syncReqTopic, stateVector as any);
    });

    client.on("message", (topic, message) => {
      const uint8Msg = new Uint8Array(message as any);

      if (topic === updateTopic) {
        try {
          Y.applyUpdate(ydoc, uint8Msg, client);
        } catch (e) {}
      } else if (topic === awarenessTopic) {
        try {
          awarenessProtocol.applyAwarenessUpdate(awareness, uint8Msg, client);
        } catch (e) {}
      } else if (topic === syncReqTopic) {
        // FITUR Y-WEBSOCKET: Sync Step 2
        // Ada user baru meminta data! Kita bandingkan State Vector dia dengan dokumen kita.
        try {
          const missingUpdate = Y.encodeStateAsUpdate(ydoc, uint8Msg);
          // Jika kita punya data yang tidak dia miliki (ukuran byte > 2), kirimkan ke dia!
          if (missingUpdate.length > 2) {
            client.publish(updateTopic, missingUpdate as any);
          }
        } catch (e) {}
      }
    });
  }

  async function handleEditorReady(event: CustomEvent) {
    const editor = event.detail;
    const { MonacoBinding } = await import("y-monaco");

    ydoc = new Y.Doc();
    awareness = new awarenessProtocol.Awareness(ydoc);

    connectMqtt();

    // Timer untuk fitur Auto-Heal (mencegah teks bolong saat ngetik brutal)
    let syncHealingTimer: ReturnType<typeof setTimeout>;

    // 1. Tangkap perubahan teks lokal -> Kirim ke MQTT
    (ydoc as any).on("update", (update: Uint8Array, origin: any) => {
      if (origin !== client) {
        // Broadcast huruf yang baru diketik agar real-time
        client.publish(updateTopic, update as any);

        // FITUR Y-WEBSOCKET: Rekonsiliasi
        // Kalau server MQTT memblokir paket karena ngetik terlalu cepat (rate-limit),
        // tunggu sampai jari berhenti ngetik 0.5 detik, lalu tambal layar teman dengan full-state.
        clearTimeout(syncHealingTimer);
        syncHealingTimer = setTimeout(() => {
          const fullState = Y.encodeStateAsUpdate(ydoc);
          client.publish(updateTopic, fullState as any);
        }, 500);
      }

      // Auto-save ke database setiap 2 detik setelah berhenti ngetik
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveContent, 2000);
    });

    // 2. Tangkap pergerakan kursor lokal -> Kirim ke MQTT
    (awareness as any).on("update", ({ added, updated, removed }: { added: number[]; updated: number[]; removed: number[] }, origin: any) => {
      if (origin !== client) {
        const changedClients = added.concat(updated).concat(removed);
        const enc = awarenessProtocol.encodeAwarenessUpdate(awareness, changedClients);
        client.publish(awarenessTopic, enc as any);
      }
      // Catatan: Trik manual kirim fullState di sini sudah dihapus
      // karena sudah diganti dengan Sync Protocol yang jauh lebih rapi di atas.
    });

    const ytext = ydoc.getText("monaco");

    // Load initial content dari database
    if (content) {
      ytext.insert(0, content);
    }

    binding = new MonacoBinding(ytext, editor.getModel(), new Set([editor]), awareness);
  }

  onDestroy(() => {
    if (saveTimer) clearTimeout(saveTimer);
    if (syncHealingTimer) clearTimeout(syncHealingTimer);
    // Save immediately before destroy
    if (ydoc) {
      saveContent();
    }
    if (binding) binding.destroy();
    if (client) client.end();
  });
</script>

<div class="editor-wrapper">
  <div class="monaco-container">
    <Monaco value="" options={{ automaticLayout: true }} theme="vs-dark" on:ready={handleEditorReady} />
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
