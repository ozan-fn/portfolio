export default function AdminImagesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-foreground">Manage Images</h1>
            <div className="bg-card p-6 rounded-lg shadow border">
                <p className="mb-4 text-foreground">List of uploaded images will be displayed here.</p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90">Upload New Image</button>
            </div>
        </div>
    );
}
