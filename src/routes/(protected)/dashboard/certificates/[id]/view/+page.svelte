<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Pencil, ExternalLink, Calendar, ShieldCheck, Info, ArrowUpRight, Building2, Clock, Infinity, Trophy } from "@lucide/svelte";
    import CrudHeader from "$lib/components/admin/crud-header.svelte";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";

    // Dummy data for now - should come from +page.server.ts
    let certificate = {
        id: "1",
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        issueDate: new Date("2023-06-15"),
        expiryDate: new Date("2025-06-15"),
        thumbnail: null,
    };

    function getStatus(cert: typeof certificate) {
        if (!cert.expiryDate) return "lifetime";
        const now = new Date();
        if (now > cert.expiryDate) return "expired";
        const soon = new Date();
        soon.setMonth(soon.getMonth() + 6);
        if (cert.expiryDate <= soon) return "expiring";
        return "active";
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
            case "lifetime":
                return "default";
            case "expiring":
                return "secondary";
            case "expired":
                return "outline";
            default:
                return "default";
        }
    };

    const status = getStatus(certificate);
    const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
</script>

<CrudHeader title={certificate.title} description="Verification and details for your professional certification." backUrl="/dashboard/certificates">
    {#snippet actions()}
        <Button variant="outline" href="/dashboard/certificates" target="_blank" class="gap-2">
            <ExternalLink class="h-4 w-4" />
            Public Page
        </Button>
        <Button href="/dashboard/certificates/{certificate.id}" class="gap-2">
            <Pencil class="h-4 w-4" />
            Edit Certificate
        </Button>
    {/snippet}
</CrudHeader>

<div class="px-6 pb-12 max-w-7xl mx-auto">
    <div class="grid gap-6 lg:grid-cols-3">
        <!-- Main Content Column -->
        <div class="lg:col-span-2 space-y-6">
            <!-- Thumbnail/Visual Section -->
            <Card class="overflow-hidden border-none shadow-md bg-muted/20">
                {#if certificate.thumbnail}
                    <div class="relative group">
                        <img src={certificate.thumbnail} alt={certificate.title} class="aspect-video w-full object-contain bg-white rounded-t-xl" />
                    </div>
                {:else}
                    <div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic rounded-xl border-2 border-dashed">
                        <div class="flex flex-col items-center gap-2">
                            <Trophy class="h-12 w-12 opacity-20" />
                            <p>No preview image available</p>
                        </div>
                    </div>
                {/if}
            </Card>

            <!-- Description & Content Section -->
            <Card class="shadow-sm overflow-hidden">
                <CardHeader class="border-b bg-muted/30">
                    <div class="flex items-center gap-2">
                        <Info class="h-5 w-5 text-primary" />
                        <CardTitle>Certification Details</CardTitle>
                    </div>
                    <CardDescription>Verified information about this credential</CardDescription>
                </CardHeader>
                <CardContent class="p-6 space-y-8">
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="space-y-1">
                            <h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Building2 class="h-3 w-3" /> Issuing Organization
                            </h4>
                            <p class="text-lg font-medium text-foreground">
                                {certificate.issuer}
                            </p>
                        </div>

                        <div class="space-y-1">
                            <h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <ShieldCheck class="h-3 w-3" /> Certification Status
                            </h4>
                            <div class="flex items-center gap-2 mt-1">
                                <Badge variant={getStatusColor(status)}>
                                    {statusLabel}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div class="pt-6 border-t">
                        <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Metadata / Verification</h4>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="p-4 rounded-xl border bg-muted/10">
                                <p class="text-[11px] text-muted-foreground uppercase font-bold tracking-tighter mb-1">Issue Date</p>
                                <p class="text-sm font-medium">{certificate.issueDate.toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}</p>
                            </div>
                            <div class="p-4 rounded-xl border bg-muted/10">
                                <p class="text-[11px] text-muted-foreground uppercase font-bold tracking-tighter mb-1">Expiration Date</p>
                                <p class="text-sm font-medium">
                                    {certificate.expiryDate ? certificate.expiryDate.toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" }) : "No Expiry (Lifetime)"}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <!-- Sidebar Info Column -->
        <div class="space-y-6">
            <!-- Project Stats/Meta -->
            <Card>
                <CardHeader class="py-4 border-b bg-muted/10">
                    <CardTitle class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Properties</CardTitle>
                </CardHeader>
                <CardContent class="p-6 space-y-4">
                    <div class="flex items-center justify-between text-sm py-1">
                        <span class="flex items-center text-muted-foreground text-xs">
                            <Calendar class="mr-2 h-4 w-4" />
                            Date Added
                        </span>
                        <span class="font-medium text-xs">Recently</span>
                    </div>
                    <div class="flex items-center justify-between text-sm py-1">
                        <span class="flex items-center text-muted-foreground text-xs">
                            <Clock class="mr-2 h-4 w-4" />
                            Validity
                        </span>
                        {#if status === "expired"}
                            <Badge variant="outline" class="text-[10px] text-destructive border-destructive/30">Expired</Badge>
                        {:else if status === "lifetime"}
                            <Badge variant="secondary" class="text-[10px]">Lifetime Access</Badge>
                        {:else}
                            <Badge variant="secondary" class="text-[10px]">Valid Credential</Badge>
                        {/if}
                    </div>
                </CardContent>
            </Card>

            <!-- Links Section -->
            <Card>
                <CardHeader class="py-4 border-b bg-muted/10">
                    <CardTitle class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Verification</CardTitle>
                </CardHeader>
                <CardContent class="p-6">
                    <div class="flex flex-col gap-3">
                        <Button variant="outline" class="w-full justify-between h-auto py-3 px-4 rounded-xl border-dashed">
                            <span class="text-xs italic text-muted-foreground">No verification link set</span>
                            <ArrowUpRight class="h-3 w-3 opacity-30" />
                        </Button>
                        <p class="text-[10px] text-center text-muted-foreground italic">Add a link to the certificate issuer's portal to allow others to verify this credential.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</div>
