<script lang="ts">
  import Monaco from "svelte-monaco";
  import * as Y from "yjs";
  import mqtt from "mqtt";
  import * as awarenessProtocol from "y-protocols/awareness";
  import { onDestroy } from "svelte";

  import type { MonacoBinding as MonacoBindingType } from "y-monaco";

  // State untuk melacak status koneksi websocket (via MQTT)
  let isConnected = $state(true);

  let client: mqtt.MqttClient;
  let binding: MonacoBindingType;
  let awareness: awarenessProtocol.Awareness;
  let ydoc: Y.Doc;

  const roomname = `tes-portfolio-sinkron-123`;
  const updateTopic = `portfolio/monaco/${roomname}/update`;
  const awarenessTopic = `portfolio/monaco/${roomname}/awareness`;

  // Fungsi terpisah untuk koneksi MQTT agar bisa dipanggil ulang
  function connectMqtt() {
    client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");

    client.on("connect", () => {
      client.subscribe(updateTopic);
      client.subscribe(awarenessTopic);
    });

    client.on("message", (topic, message) => {
      // Pastikan pesan aman dibaca sebagai binary oleh Yjs
      const uint8Msg = new Uint8Array(message as any);

      if (topic === updateTopic) {
        try {
          Y.applyUpdate(ydoc, uint8Msg, client);
        } catch (e) {} // Abaikan pesan nyasar atau format salah
      } else if (topic === awarenessTopic) {
        try {
          awarenessProtocol.applyAwarenessUpdate(awareness, uint8Msg, client);
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

    // 1. Tangkap perubahan teks lokal -> Kirim ke MQTT
    (ydoc as any).on("update", (update: Uint8Array, origin: any) => {
      if (origin !== client) {
        client.publish(updateTopic, update as any);
      }
    });

    // 2. Tangkap pergerakan kursor lokal -> Kirim ke MQTT
    (awareness as any).on("update", ({ added, updated, removed }: { added: number[]; updated: number[]; removed: number[] }, origin: any) => {
      // Kirim update kursor ke orang lain
      if (origin !== client) {
        const changedClients = added.concat(updated).concat(removed);
        const enc = awarenessProtocol.encodeAwarenessUpdate(awareness, changedClients);
        client.publish(awarenessTopic, enc as any);
      }

      // KUNCI SINKRONISASI MANUALNYA DI SINI:
      // Jika kita mendeteksi ada user baru masuk (via MQTT),
      // otomatis kirim seluruh isi text editor kita saat ini ke orang tersebut!
      if (added.length > 0 && origin === client) {
        const fullState = Y.encodeStateAsUpdate(ydoc);
        client.publish(updateTopic, fullState as any);
      }
    });

    const ytext = ydoc.getText("monaco");

    binding = new MonacoBinding(ytext, editor.getModel(), new Set([editor]), awareness);
  }

  onDestroy(() => {
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
