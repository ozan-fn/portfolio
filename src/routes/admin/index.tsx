"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

interface Stats {
    totalMedia: number;
    totalCloudinary: number;
    storageUsed: string;
    recentMedia: { publicId: string; folder: string; format: string; type: string; createdAt: string }[];
}

function Admin() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [syncing, setSyncing] = useState(false);

    const fetchStats = () => {
        fetch("/api/media/stats")
            .then((res) => res.json())
            .then(setStats)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const handleSync = async () => {
        setSyncing(true);
        await fetch("/api/media/sync", { method: "POST" });
        fetchStats();
        setSyncing(false);
    };

    if (loading) {
        return (
            <div>
                <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                        <div className="mb-2 h-6 rounded bg-gray-300"></div>
                        <div className="h-8 rounded bg-gray-300"></div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                        <div className="mb-2 h-6 rounded bg-gray-300"></div>
                        <div className="h-8 rounded bg-gray-300"></div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                        <div className="mb-2 h-6 rounded bg-gray-300"></div>
                        <div className="h-4 rounded bg-gray-300"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Total Media (DB)</h2>
                    <p className="text-3xl font-bold text-blue-600">{stats?.totalMedia || 0}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cloudinary: {stats?.totalCloudinary || 0}</p>
                    {/* {stats && stats.totalMedia !== stats.totalCloudinary && ( */}
                    <button onClick={handleSync} disabled={syncing} className="mt-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50">
                        {syncing ? "Syncing..." : "Sync"}
                    </button>
                    {/* )} */}
                </div>
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Storage Used</h2>
                    <p className="text-3xl font-bold text-green-600">{stats?.storageUsed || "0 MB"}</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                    {stats?.recentMedia?.length ? (
                        <ul className="text-sm text-gray-600 dark:text-gray-400">
                            {stats.recentMedia.map((media, i) => (
                                <li key={i} className="truncate">
                                    {media.type}: {`${media.publicId}.${media.format}`} - {new Date(media.createdAt).toLocaleDateString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No recent activity</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export const Route = createFileRoute("/admin" as any)({
    component: Admin as any,
});
