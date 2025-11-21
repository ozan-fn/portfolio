"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

function MediaPage() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [mediaList, setMediaList] = useState<any[]>([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const isMounted = useRef(false);

    const fetchMedia = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/media?page=${page}&limit=${limit}`);
            const data = await res.json();
            setMediaList(data.media);
            setTotalPages(data.totalPages);
        } catch (err) {
            setMessage("Gagal mengambil media");
        }
        setLoading(false);
    }, [page, limit]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile));
        } else {
            setPreviewUrl(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;
        setUploading(true);
        setMessage("");
        try {
            // Deteksi type berdasarkan mimetype
            let type = file.type.startsWith("image/") ? "image" : file.type.startsWith("video/") ? "video" : "raw";
            // 1. Dapatkan signature dari backend
            const sigRes = await fetch("/api/media/signature", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type }),
            });
            const sigData = await sigRes.json();
            if (!sigData.signature || !sigData.timestamp) {
                setMessage("Gagal dapat signature");
                setUploading(false);
                return;
            }
            // 2. Upload langsung ke Cloudinary
            const formData = new FormData();
            formData.append("file", file);
            formData.append("api_key", sigData.apikey);
            formData.append("timestamp", sigData.timestamp);
            formData.append("signature", sigData.signature);
            formData.append("folder", sigData.folder);
            formData.append("public_id", sigData.public_id);
            const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/${sigData.resource_type}/upload`, {
                method: "POST",
                body: formData,
            });
            const cloudData = await cloudRes.json();
            if (cloudData.secure_url) {
                // 3. Simpan ke database
                const folder = cloudData.asset_folder;
                const publicId = cloudData.display_name;
                const format = cloudData.format;
                const saveRes = await fetch("/api/media", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ publicId, folder, format, type }),
                });
                const saveData = await saveRes.json();
                if (saveData.status === "ok") {
                    setMessage("Upload sukses");
                    setFile(null);
                    setPreviewUrl(null);
                    fetchMedia();
                } else {
                    setMessage("Upload sukses tapi gagal simpan ke DB");
                }
            } else {
                setMessage("Upload gagal");
            }
        } catch (err) {
            setMessage("Error upload");
        }
        setUploading(false);
    };

    const handleDelete = async (publicId: string) => {
        setMessage("");
        setDeletingId(publicId);
        try {
            const res = await fetch(`/api/media?publicId=${encodeURIComponent(publicId)}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.status === "ok") {
                setMessage("Delete sukses");
                fetchMedia();
            } else {
                setMessage("Delete gagal");
            }
        } catch (err) {
            setMessage("Error delete");
        }
        setDeletingId(null);
    };

    // Fetch media list on mount & page change
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            fetchMedia();
        } else {
            fetchMedia();
        }
    }, [fetchMedia]);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-0">
            <h1 className="mb-4 text-2xl font-bold">Media Upload & Delete</h1>
            <div className="mb-6 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <input type="file" onChange={handleFileChange} disabled={uploading} className="mb-2" />
                {previewUrl && (file?.type.startsWith("image/") || file?.type.startsWith("video/")) && (
                    <div className="mt-2">
                        <span className="text-xs text-gray-500">Preview:</span>
                        {file?.type.startsWith("video/") ? <video src={previewUrl} controls className="mt-1 h-32 rounded border object-contain" /> : <img src={previewUrl} alt="Preview" className="mt-1 h-32 rounded border object-contain" />}
                    </div>
                )}
                <Button className="mt-2" onClick={handleUpload} disabled={uploading || !file}>
                    {uploading ? "Uploading..." : "Upload"}
                </Button>
                {message && <div className="mt-2 text-sm text-red-600">{message}</div>}
            </div>
            <hr className="my-6" />
            <h2 className="mb-4 text-xl font-semibold">Media List</h2>
            <div className="hidden max-h-96 overflow-x-auto overflow-y-auto rounded-lg bg-white shadow md:block dark:bg-gray-800">
                {loading ? (
                    <div className="space-y-2 p-4">
                        {[...Array(limit)].map((_, i) => (
                            <Skeleton key={i} className="h-6 w-full" />
                        ))}
                    </div>
                ) : (
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">Thumbnail</th>
                                <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">File Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">Type</th>
                                <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">Uploaded At</th>
                                <th className="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {mediaList.map((media, i) => {
                                const filePath = `${media.folder}/${media.publicId}.${media.format}`;
                                const url = media.type === "image" ? `https://res.cloudinary.com/djuiy8ozc/image/upload/${filePath}` : media.type === "video" ? `https://res.cloudinary.com/djuiy8ozc/video/upload/${filePath}` : `https://res.cloudinary.com/djuiy8ozc/raw/upload/${filePath}`;
                                return (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-4 py-2">{media.type === "image" ? <img src={url} alt={filePath} className="h-16 w-16 rounded border object-cover" loading="lazy" /> : media.type === "video" ? <video src={url} className="h-16 w-16 rounded border object-cover" /> : <div className="flex h-16 w-16 items-center justify-center rounded border bg-gray-100 dark:bg-gray-600">📎</div>}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{filePath}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{media.type}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">{new Date(media.createdAt).toLocaleDateString()}</td>
                                        <td className="px-4 py-2">
                                            <Button variant="destructive" size="sm" onClick={() => handleDelete(`${media.folder}/${media.publicId}`)} disabled={!!deletingId}>
                                                {deletingId === `${media.folder}/${media.publicId}` ? "Deleting..." : "Delete"}
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="block md:hidden">
                {loading ? (
                    <div className="space-y-2">
                        {[...Array(limit)].map((_, i) => (
                            <Skeleton key={i} className="h-6 w-full" />
                        ))}
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {mediaList.map((media, i) => {
                            const filePath = `${media.folder}/${media.publicId}.${media.format}`;
                            const url = media.type === "image" ? `https://res.cloudinary.com/djuiy8ozc/image/upload/${filePath}` : media.type === "video" ? `https://res.cloudinary.com/djuiy8ozc/video/upload/${filePath}` : `https://res.cloudinary.com/djuiy8ozc/raw/upload/${filePath}`;
                            return (
                                <li key={i} className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                                    <div className="flex items-center space-x-4">
                                        {media.type === "image" ? <img src={url} alt={filePath} className="h-16 w-16 rounded border object-cover" loading="lazy" /> : media.type === "video" ? <video src={url} className="h-16 w-16 rounded border object-cover" /> : <div className="flex h-16 w-16 items-center justify-center rounded border bg-gray-100 dark:bg-gray-600">📎</div>}
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{filePath}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Type: {media.type} | Uploaded: {new Date(media.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(`${media.folder}/${media.publicId}`)} disabled={!!deletingId}>
                                            {deletingId === `${media.folder}/${media.publicId}` ? "Deleting..." : "Delete"}
                                        </Button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1 || loading}>
                    Prev
                </Button>
                <span className="mx-2 text-sm">
                    Page {page} / {totalPages}
                </span>
                <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages || loading}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export const Route = createFileRoute("/admin/media" as any)({
    component: MediaPage as any,
});
