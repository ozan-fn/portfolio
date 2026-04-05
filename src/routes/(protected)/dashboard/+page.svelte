<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Badge } from '$lib/components/ui/badge';
    import { LayoutDashboard, Briefcase, FileText, Users, TrendingUp } from '@lucide/svelte';

    const stats = [
        {
            title: 'Total Projects',
            value: '12',
            description: '+2 dari bulan lalu',
            icon: Briefcase,
            color: 'text-blue-500',
        },
        {
            title: 'Blog Posts',
            value: '24',
            description: '5 draf perlu direview',
            icon: FileText,
            color: 'text-purple-500',
        },
        {
            title: 'Visitors',
            value: '1,234',
            description: '+15% traffic naik dek',
            icon: Users,
            color: 'text-green-500',
        },
        {
            title: 'Engagement',
            value: '89%',
            description: 'Gak kena mental',
            icon: TrendingUp,
            color: 'text-orange-500',
        },
    ];

    const recentActivities = [
        { id: 1, action: 'Updated Project', target: 'E-Commerce Microservices', time: '2 jam yang lalu', status: 'Success' },
        { id: 2, action: 'New Blog Post', target: 'Belajar Rust Sampai Tipes', time: '5 jam yang lalu', status: 'Draft' },
        { id: 3, action: 'System Backup', target: 'Database Production', time: '1 hari yang lalu', status: 'Success' },
        { id: 4, action: 'Failed Login', target: 'IP: 192.168.1.1 (Bobol kah?)', time: '2 hari yang lalu', status: 'Warning' },
    ];
</script>

<div class="flex flex-col gap-8">
    <div>
        <h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p class="text-muted-foreground">Selamat datang kembali, si paling tech stack. Monitor semuanya di sini.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {#each stats as stat}
            <Card.Root>
                <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Card.Title class="text-sm font-medium">{stat.title}</Card.Title>
                    <stat.icon size={16} class="text-muted-foreground {stat.color}" />
                </Card.Header>
                <Card.Content>
                    <div class="text-2xl font-bold">{stat.value}</div>
                    <p class="text-xs text-muted-foreground italic">{stat.description}</p>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <!-- Recent Activity -->
        <Card.Root class="col-span-full lg:col-span-4">
            <Card.Header>
                <Card.Title>Recent Activity</Card.Title>
                <Card.Description>Log aktivitas terakhir di sistem portfolio kamu.</Card.Description>
            </Card.Header>
            <Card.Content>
                <div class="space-y-6">
                    {#each recentActivities as activity}
                        <div class="flex items-center gap-4">
                            <div class="size-2 rounded-full {activity.status === 'Success' ? 'bg-green-500' : activity.status === 'Warning' ? 'bg-red-500' : 'bg-blue-500'}"></div>
                            <div class="flex-1 space-y-1">
                                <p class="text-sm font-medium leading-none">{activity.action}: <span class="text-muted-foreground">{activity.target}</span></p>
                                <p class="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                            <Badge variant="outline" class="text-[10px]">{activity.status}</Badge>
                        </div>
                    {/each}
                </div>
            </Card.Content>
        </Card.Root>

        <!-- System Status -->
        <Card.Root class="col-span-full lg:col-span-3">
            <Card.Header>
                <Card.Title>System Status</Card.Title>
                <Card.Description>Kesehatan server saat ini.</Card.Description>
            </Card.Header>
            <Card.Content class="space-y-4">
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                        <span>Server Load</span>
                        <span class="font-bold text-green-500">Aman Dek (12%)</span>
                    </div>
                    <div class="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <div class="h-full bg-green-500 w-[12%]"></div>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                        <span>Memory Usage</span>
                        <span class="font-bold text-blue-500">45%</span>
                    </div>
                    <div class="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <div class="h-full bg-blue-500 w-[45%]"></div>
                    </div>
                </div>
                <div class="rounded-lg bg-muted p-4 text-xs italic text-muted-foreground border border-dashed border-primary/20">"Firewall aktif. Percobaan bobol akan otomatis dialihkan ke video tutorial 'Cara Belajar HTML Dasar'."</div>
            </Card.Content>
        </Card.Root>
    </div>
</div>
