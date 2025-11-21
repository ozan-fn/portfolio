"use client";

export default function AdminPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-foreground">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow border">
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Total Images</h2>
                    <p className="text-2xl text-foreground">0</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow border">
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Used Images</h2>
                    <p className="text-2xl text-foreground">0</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow border">
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Unused Images</h2>
                    <p className="text-2xl text-foreground">0</p>
                </div>
            </div>
        </div>
    );
}
