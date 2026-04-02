<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { motion, AnimatePresence } from '@humanspeak/svelte-motion';
    import mqtt from 'mqtt';

    // Shadcn Components
    import { Button } from '$lib/components/ui/button';
    import { Input } from '$lib/components/ui/input';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '$lib/components/ui/card';
    import { Slider } from '$lib/components/ui/slider';
    import { Label } from '$lib/components/ui/label';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
    import { Badge } from '$lib/components/ui/badge';
    import { Separator } from '$lib/components/ui/separator';

    // --- STATE MANAGEMENT ---
    type ViewState = 'menu' | 'solo_setup' | 'multi_setup' | 'lobby' | 'playing' | 'result' | 'final_result';
    let currentView: ViewState = $state('menu');

    let playerName = $state('');
    let roomId = $state('');
    let isHost = $state(false);

    // Game State
    let round = $state(1);
    let maxRounds = $state(5);

    // Alih-alih 1 warna, kita simpan 5 warna sekaligus agar pemain bisa jalan sendiri
    let targetColorsList = $state<{ h: number; s: number; l: number }[]>([]);
    let targetColor = $state({ h: 0, s: 0, l: 0 });

    let guessH = $state(180);
    let guessS = $state(50);
    let guessL = $state(50);

    let score = $state(0);
    let roundScore = $state(0);
    let showTarget = $state(true);

    // Timer State
    let countdown = $state(5);
    let timerInterval: ReturnType<typeof setInterval>;

    // Multiplayer State
    let client: mqtt.MqttClient | null = $state(null);
    let players = $state<{ name: string; score: number; currentRound: number; isFinished: boolean }[]>([]);

    // --- HELPER LOGIC ---
    const generateRandomColor = () => ({
        h: Math.floor(Math.random() * 360),
        s: Math.floor(Math.random() * 60) + 20,
        l: Math.floor(Math.random() * 60) + 20,
    });

    const calculateScore = () => {
        const hDiff = (Math.min(Math.abs(targetColor.h - guessH), 360 - Math.abs(targetColor.h - guessH)) / 180) * 100;
        const sDiff = Math.abs(targetColor.s - guessS);
        const lDiff = Math.abs(targetColor.l - guessL);

        const totalError = (hDiff + sDiff + lDiff) / 3; // Skala error 0 - 100

        // Konversi ke skala 0.00 - 10.00
        let rawScore = 10 - totalError / 10;
        rawScore = Math.max(0, rawScore);

        return Math.round(rawScore * 100) / 100; // Contoh: 8.45
    };

    // --- MQTT LOGIC ---
    const connectMQTT = (room: string) => {
        client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
            clientId: `ozan_game_${Math.random().toString(16).slice(3)}`,
        });

        client.on('connect', () => {
            client?.subscribe(`ozan/colorgame/${room}`);
            client?.publish(`ozan/colorgame/${room}`, JSON.stringify({ type: 'join', name: playerName }));
        });

        client.on('message', (topic, message) => {
            const data = JSON.parse(message.toString());

            if (data.type === 'join') {
                if (!players.find((p) => p.name === data.name)) {
                    players = [...players, { name: data.name, score: 0, currentRound: 0, isFinished: false }];
                }
                if (isHost) {
                    client?.publish(`ozan/colorgame/${roomId}`, JSON.stringify({ type: 'sync_players', players }));
                }
            } else if (data.type === 'sync_players' && !isHost) {
                players = data.players;
            } else if (data.type === 'start_game') {
                // Menerima 5 warna dari Host
                targetColorsList = data.targetColors;
                players = players.map((p) => ({ ...p, score: 0, currentRound: 1, isFinished: false }));
                score = 0;
                round = 1;
                startLocalRound();
            } else if (data.type === 'update_progress') {
                // Update live progress pemain lain
                players = players.map((p) => (p.name === data.name ? { ...p, score: data.totalScore, currentRound: data.round, isFinished: data.isFinished } : p));
            }
        });
    };

    // --- GAME FLOW LOGIC ---
    const startSolo = () => {
        if (!playerName) return;
        targetColorsList = Array.from({ length: maxRounds }, generateRandomColor);
        players = [{ name: playerName, score: 0, currentRound: 1, isFinished: false }];
        score = 0;
        round = 1;
        startLocalRound();
    };

    const createRoom = () => {
        if (!playerName) return;
        isHost = true;
        roomId = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4 Digit
        players = [{ name: playerName, score: 0, currentRound: 0, isFinished: false }];
        connectMQTT(roomId);
        currentView = 'lobby';
    };

    const joinRoom = () => {
        if (!playerName || !roomId) return;
        isHost = false;
        players = [{ name: playerName, score: 0, currentRound: 0, isFinished: false }];
        connectMQTT(roomId);
        currentView = 'lobby';
    };

    const startMultiplayerGame = () => {
        if (!isHost) return;
        // Host mengenerate 5 warna untuk semua orang
        const newTargets = Array.from({ length: maxRounds }, generateRandomColor);
        client?.publish(
            `ozan/colorgame/${roomId}`,
            JSON.stringify({
                type: 'start_game',
                targetColors: newTargets,
            }),
        );
    };

    const startLocalRound = () => {
        currentView = 'playing';
        showTarget = true;
        guessH = 180;
        guessS = 50;
        guessL = 50;
        countdown = 5;

        // Ambil warna berdasarkan ronde saat ini
        targetColor = targetColorsList[round - 1];

        // Jalankan hitungan mundur
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            countdown -= 1;
            if (countdown <= 0) {
                clearInterval(timerInterval);
                showTarget = false;
            }
        }, 1000);
    };

    const submitGuess = () => {
        if (timerInterval) clearInterval(timerInterval);

        roundScore = calculateScore();
        score += roundScore;

        players = players.map((p) => (p.name === playerName ? { ...p, score, currentRound: round, isFinished: false } : p));

        if (client) {
            client.publish(
                `ozan/colorgame/${roomId}`,
                JSON.stringify({
                    type: 'update_progress',
                    name: playerName,
                    totalScore: score,
                    round: round,
                    isFinished: false,
                }),
            );
        }

        currentView = 'result';
    };

    const nextRound = () => {
        if (round >= maxRounds) {
            players = players.map((p) => (p.name === playerName ? { ...p, isFinished: true } : p));
            if (client) {
                client.publish(
                    `ozan/colorgame/${roomId}`,
                    JSON.stringify({
                        type: 'update_progress',
                        name: playerName,
                        totalScore: score,
                        round: round,
                        isFinished: true,
                    }),
                );
            }
            currentView = 'final_result';
            return;
        }

        round++;
        // Kirim update bahwa kita masuk ke ronde berikutnya
        players = players.map((p) => (p.name === playerName ? { ...p, currentRound: round } : p));
        if (client) {
            client.publish(
                `ozan/colorgame/${roomId}`,
                JSON.stringify({
                    type: 'update_progress',
                    name: playerName,
                    totalScore: score,
                    round: round,
                    isFinished: false,
                }),
            );
        }
        startLocalRound();
    };

    const playAgain = () => {
        if (client && isHost) {
            startMultiplayerGame();
        } else if (!client) {
            startSolo();
        }
    };

    onDestroy(() => {
        if (client) client.end();
        if (timerInterval) clearInterval(timerInterval);
    });
</script>

<svelte:head>
    <title>Color Match | Portfolio Game</title>
</svelte:head>

<div class="max-w-2xl mx-auto min-h-[80vh] flex flex-col items-center justify-center p-4 w-full overflow-hidden">
    <AnimatePresence mode="wait">
        {#key currentView}
            <motion.div key={currentView} class="w-full max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                {#if currentView === 'menu'}
                    <Card class="w-full text-center">
                        <CardHeader>
                            <CardTitle class="text-3xl font-black">Color Match</CardTitle>
                            <CardDescription>Uji seberapa akurat matamu mengenali warna</CardDescription>
                        </CardHeader>
                        <CardContent class="flex flex-col gap-4">
                            <Button size="lg" onclick={() => (currentView = 'solo_setup')}>Main Solo</Button>
                            <Button size="lg" variant="secondary" onclick={() => (currentView = 'multi_setup')}>Multiplayer (Online)</Button>
                        </CardContent>
                    </Card>
                {/if}

                {#if currentView === 'solo_setup'}
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>Setup Solo</CardTitle>
                            <CardDescription>Masukkan namamu untuk mulai bermain</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-col gap-3">
                                <Label for="name">Nama Pemain</Label>
                                <Input id="name" bind:value={playerName} placeholder="Contoh: Ozan" />
                            </div>
                        </CardContent>
                        <CardFooter class="flex justify-between">
                            <Button variant="ghost" onclick={() => (currentView = 'menu')}>Kembali</Button>
                            <Button onclick={startSolo} disabled={!playerName}>Mulai Game</Button>
                        </CardFooter>
                    </Card>
                {/if}

                {#if currentView === 'multi_setup'}
                    <Card class="w-full">
                        <CardHeader>
                            <CardTitle>Multiplayer</CardTitle>
                            <CardDescription>Bermain bersama teman via Room Code</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-col gap-4 mb-6">
                                <Label for="m-name">Nama Pemain</Label>
                                <Input id="m-name" bind:value={playerName} placeholder="Contoh: Ozan" />
                            </div>

                            <Tabs value="join" class="w-full">
                                <TabsList class="grid w-full grid-cols-2">
                                    <TabsTrigger value="join">Join Room</TabsTrigger>
                                    <TabsTrigger value="create">Create Room</TabsTrigger>
                                </TabsList>
                                <TabsContent value="join" class="space-y-4 mt-4">
                                    <div class="space-y-2">
                                        <Label for="roomcode">Kode Room</Label>
                                        <Input id="roomcode" bind:value={roomId} placeholder="Masukkan 4 digit kode" class="uppercase" />
                                    </div>
                                    <Button class="w-full" onclick={joinRoom} disabled={!playerName || !roomId}>Join Game</Button>
                                </TabsContent>
                                <TabsContent value="create" class="mt-4">
                                    <Button class="w-full" variant="secondary" onclick={createRoom} disabled={!playerName}>Buat Room Baru</Button>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" class="w-full" onclick={() => (currentView = 'menu')}>Kembali ke Menu</Button>
                        </CardFooter>
                    </Card>
                {/if}

                {#if currentView === 'lobby'}
                    <Card class="w-full text-center">
                        <CardHeader>
                            <CardTitle>Room Code: <span class="text-primary font-mono bg-muted px-2 py-1 rounded">{roomId}</span></CardTitle>
                            <CardDescription>Menunggu pemain lain bergabung...</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-col gap-2 text-left mb-6">
                                <Label>Pemain ({players.length}):</Label>
                                <div class="bg-muted/50 p-3 rounded-lg flex flex-col gap-2">
                                    {#each players as player}
                                        <div class="flex items-center gap-2">
                                            <Badge variant="outline">{player.name}</Badge>
                                        </div>
                                    {/each}
                                </div>
                            </div>

                            {#if isHost}
                                <Button class="w-full" size="lg" onclick={startMultiplayerGame}>Mulai Permainan</Button>
                            {:else}
                                <p class="text-sm text-muted-foreground">Menunggu Host memulai permainan...</p>
                            {/if}
                        </CardContent>
                    </Card>
                {/if}

                {#if currentView === 'playing'}
                    <div class="flex flex-col gap-6">
                        <div class="flex justify-between items-center">
                            <Badge variant="secondary" class="scale-110">Ronde {round} / {maxRounds}</Badge>
                            <span class="font-bold text-lg">Skor: <span class="text-primary">{score.toFixed(2)}</span></span>
                        </div>

                        {#if client}
                            <div class="bg-muted/30 p-3 rounded-lg border flex flex-col gap-2">
                                <Label class="text-xs text-muted-foreground uppercase tracking-wider">Status Pemain Lain</Label>
                                <div class="flex flex-col gap-1.5">
                                    {#each players as p}
                                        <div class="flex justify-between items-center text-sm">
                                            <span class="font-medium">{p.name} {p.name === playerName ? '(Kamu)' : ''}</span>
                                            {#if p.isFinished}
                                                <Badge variant="secondary" class="text-[10px]">Selesai Game</Badge>
                                            {:else}
                                                <span class="text-xs text-muted-foreground">Ronde {p.currentRound} | {p.score.toFixed(2)} Pts</span>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        {/if}

                        <div class="flex flex-col items-center gap-2">
                            <p class="text-sm font-semibold text-muted-foreground">Ingat & Tebak Warna Ini!</p>
                            <div class="w-full h-48 rounded-xl shadow-inner transition-opacity duration-500 flex items-center justify-center relative" style="background-color: hsl({targetColor.h}, {targetColor.s}%, {targetColor.l}%); opacity: {showTarget ? '1' : '0'};">
                                {#if showTarget}
                                    <div class="absolute top-3 right-3 font-mono text-lg font-bold text-white bg-black/30 px-3 py-1 rounded-lg backdrop-blur-md shadow-sm border border-white/10">
                                        {countdown}s
                                    </div>
                                {/if}

                                {#if !showTarget}
                                    <span class="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono">Warna Disembunyikan</span>
                                {/if}
                            </div>
                        </div>

                        <Separator />

                        <div class="flex flex-col gap-6">
                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <Label>Hue (Warna)</Label>
                                    <span class="text-xs text-muted-foreground">{guessH}°</span>
                                </div>
                                <div class="relative flex items-center w-full h-12">
                                    <div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner" style="background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);"></div>
                                    <Slider class="color-slider-track absolute inset-0 w-full h-full" type="single" bind:value={guessH} max={360} step={1} />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <Label>Saturation (Intensitas)</Label>
                                    <span class="text-xs text-muted-foreground">{guessS}%</span>
                                </div>
                                <div class="relative flex items-center w-full h-12">
                                    <div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner" style="background: linear-gradient(to right, hsl({guessH}, 0%, {guessL}%), hsl({guessH}, 100%, {guessL}%));"></div>
                                    <Slider class="color-slider-track absolute inset-0 w-full h-full" type="single" bind:value={guessS} max={100} step={1} />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <Label>Lightness (Kecerahan)</Label>
                                    <span class="text-xs text-muted-foreground">{guessL}%</span>
                                </div>
                                <div class="relative flex items-center w-full h-12">
                                    <div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner" style="background: linear-gradient(to right, #000000, hsl({guessH}, {guessS}%, 50%), #ffffff);"></div>
                                    <Slider class="color-slider-track absolute inset-0 w-full h-full" type="single" bind:value={guessL} max={100} step={1} />
                                </div>
                            </div>
                        </div>

                        <div class="w-full h-24 rounded-lg shadow-md border transition-colors" style="background-color: hsl({guessH}, {guessS}%, {guessL}%);"></div>

                        <Button size="lg" class="w-full mt-2" onclick={submitGuess}>Kunci Jawaban</Button>
                    </div>
                {/if}

                {#if currentView === 'result'}
                    <Card class="w-full text-center">
                        <CardHeader>
                            <CardTitle>Hasil Ronde {round}</CardTitle>
                        </CardHeader>
                        <CardContent class="flex flex-col gap-6">
                            <div class="flex gap-4 h-24">
                                <div class="flex-1 rounded-lg border flex items-end justify-center pb-2 text-white/80 text-xs font-bold drop-shadow-md" style="background-color: hsl({targetColor.h}, {targetColor.s}%, {targetColor.l}%);">Target</div>
                                <div class="flex-1 rounded-lg border flex items-end justify-center pb-2 text-white/80 text-xs font-bold drop-shadow-md" style="background-color: hsl({guessH}, {guessS}%, {guessL}%);">Tebakanmu</div>
                            </div>

                            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 10 }}>
                                <p class="text-5xl font-black text-primary mb-2">+{roundScore.toFixed(2)}</p>
                                <p class="text-sm text-muted-foreground">Akurasi Tebakan</p>
                            </motion.div>

                            {#if client}
                                <div class="bg-muted p-4 rounded-lg text-left border">
                                    <Label class="mb-3 block text-center uppercase tracking-wider">Progress Sementara</Label>
                                    {#each [...players].sort((a, b) => b.score - a.score) as player, i}
                                        <div class="flex justify-between items-center text-sm py-1.5 border-b border-border/50 last:border-0">
                                            <span>
                                                Peringkat {i + 1}: {player.name}
                                                <span class="text-xs text-muted-foreground ml-2">
                                                    (Ronde {player.currentRound})
                                                </span>
                                            </span>
                                            <span class="font-bold">{player.score.toFixed(2)} Pts</span>
                                        </div>
                                    {/each}
                                </div>
                            {/if}

                            <Button onclick={nextRound}>{round >= maxRounds ? 'Lihat Klasemen Akhir' : 'Ronde Selanjutnya'}</Button>
                        </CardContent>
                    </Card>
                {/if}

                {#if currentView === 'final_result'}
                    <Card class="w-full text-center border-primary shadow-lg">
                        <CardHeader>
                            <CardTitle class="text-3xl font-black">Game Selesai!</CardTitle>
                            {#if !client}
                                <CardDescription>Skor Akhir Kamu: <span class="font-bold text-foreground">{score.toFixed(2)} Pts</span></CardDescription>
                            {/if}
                        </CardHeader>
                        <CardContent class="flex flex-col gap-6">
                            {#if client}
                                <div class="bg-muted p-4 rounded-xl text-left border shadow-inner">
                                    <Label class="mb-4 block text-center font-bold text-lg uppercase tracking-wider text-primary">Final Leaderboard</Label>
                                    {#each [...players].sort((a, b) => b.score - a.score) as player, i}
                                        <div class="flex justify-between items-center text-sm py-2.5 border-b last:border-0 border-border/50">
                                            <span class="font-medium flex items-center gap-2">
                                                <Badge variant={i === 0 ? 'default' : 'outline'}>Rank {i + 1}</Badge>
                                                {player.name}
                                                {#if !player.isFinished}
                                                    <span class="text-xs text-muted-foreground">(Masih Main)</span>
                                                {/if}
                                            </span>
                                            <span class="font-bold text-primary">{player.score.toFixed(2)} Pts</span>
                                        </div>
                                    {/each}
                                </div>
                            {/if}

                            <div class="flex flex-col gap-3 mt-4">
                                {#if !client || isHost}
                                    <Button size="lg" onclick={playAgain}>Main Lagi (Rematch)</Button>
                                {:else}
                                    <p class="text-sm text-muted-foreground bg-muted p-3 rounded-lg border">Menunggu Host untuk memulai Rematch...</p>
                                {/if}
                                <Button
                                    variant="ghost"
                                    onclick={() => {
                                        if (client) client.end();
                                        currentView = 'menu';
                                    }}>Kembali ke Menu Utama</Button
                                >
                            </div>
                        </CardContent>
                    </Card>
                {/if}
            </motion.div>
        {/key}
    </AnimatePresence>
</div>

<style>
    /* CSS GLOBAL: Override Slider Bawaan Shadcn */

    /* Root Slider menyesuaikan seluruh container agar area kliknya penuh h-12 */
    :global(.color-slider-track) {
        height: 100% !important;
        align-items: stretch !important;
        cursor: pointer;
    }

    /* Hapus garis bawaan */
    :global(.color-slider-track > span:first-child) {
        height: 100% !important;
        background-color: transparent !important;
    }
    :global(.color-slider-track > span:first-child > span) {
        background-color: transparent !important;
    }

    /* Ubah "Thumb" (Tombol Geser) menjadi bentuk persegi panjang 10px */
    :global(.color-slider-track [role='slider']) {
        width: 10px !important;
        height: 100% !important;
        border-radius: 4px !important;
        background-color: white !important;
        border: 2px solid rgba(0, 0, 0, 0.4) !important;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5) !important;
        top: 0 !important;
        cursor: grab;
    }

    /* Efek ketika thumb ditahan/digeser */
    :global(.color-slider-track [role='slider']:active) {
        cursor: grabbing;
    }
</style>
