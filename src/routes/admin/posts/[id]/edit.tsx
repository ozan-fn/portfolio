import { createFileRoute } from "@tanstack/react-router";

function EditPostPage() {
    return <div>Edit Post Page - TODO: Implement</div>;
}

export const Route = createFileRoute("/admin/posts/[id]/edit" as any)({
    component: EditPostPage as any,
});
