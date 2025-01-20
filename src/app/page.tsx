"use client";

import { createShortLink } from "@/actions/links";
import { ModeToggle } from "@/components/mode-toggle";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const [custom, setCustom] = useState("");
    const [result, setResult] = useState<string | null>(null);
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);

    const handleSubmit = async () => {
        setLoading(true);
        const loadingToast = toast.loading("Proses sedang berjalan...", {
            richColors: true,
            description: "Mohon tunggu sebentar sementara kami memproses URL Anda.",
        });

        try {
            z.string().url().parse(input);

            const res = await createShortLink(input, custom);
            toast.success("URL berhasil dipersingkat!", {
                richColors: true,
                description: "URL Anda telah berhasil dipersingkat.",
            });
            setResult(res.short_url);
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log(error.message);
                toast.error("Terjadi kesalahan. Silakan coba lagi.", {
                    richColors: true,
                    description: error.issues[0].message,
                });
            }
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 50));
            toast.dismiss(loadingToast);
            setLoading(false);
        }
    };

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <div className="h-screen">
                {/* scrollbar overflow-auto */}
                <BackgroundBeamsWithCollision className="fixed left-0 top-0 -z-10 !h-screen w-screen" children={<></>} />

                <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-6 px-4 md:flex-row-reverse">
                    <h2 className="text-center text-2xl font-bold md:text-4xl lg:text-6xl">
                        Apa yang lebih keren dari UNTITLED?
                        <div className="mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
                                <span className="">Link super cepat.</span>
                            </div>
                        </div>
                    </h2>

                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Persingkat URL Anda</CardTitle>
                            <CardDescription>Singkatkan URL panjang Anda dengan cepat dan mudah!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="long-url">URL Panjang</Label>
                                    <Input id="long-url" placeholder="Masukkan URL panjang Anda di sini" value={input} onChange={(e) => setInput(e.target.value)} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="short-url">URL Pendek Kustom (Opsional)</Label>
                                    <Input id="short-url" placeholder="Masukkan URL pendek kustom Anda di sini" value={custom} onChange={(e) => setCustom(e.target.value)} />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button disabled={loading} onClick={handleSubmit} className="w-full">
                                Persingkat URL
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* <div className="flex h-screen w-1 shrink-0"></div> */}
            </div>

            <motion.div className="fixed left-0 top-0 w-screen border-b px-4">
                <div className="container mx-auto flex h-16 flex-row items-center">
                    <p className="text-lg font-semibold">UNTITLED</p>

                    <div className="ml-auto">
                        <ModeToggle />
                    </div>
                </div>
            </motion.div>

            {currentUrl && (
                <Dialog open={!!result} onOpenChange={() => setResult("")}>
                    <DialogTrigger asChild></DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Shortened URL</DialogTitle>
                            <DialogDescription>Berikut adalah hasil URL yang sudah dipersingkat. Klik salin untuk menyalin ke clipboard.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="original-url" className="text-right">
                                    URL Asli
                                </Label>
                                <Input id="original-url" value={input} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="short-url" className="text-right">
                                    URL Pendek
                                </Label>
                                <Input id="short-url" value={currentUrl + result} className="col-span-3" readOnly />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" onClick={() => navigator.clipboard.writeText(currentUrl + result)}>
                                Salin URL Pendek
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
