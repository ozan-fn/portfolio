<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { LayoutDashboard, Briefcase, FileText, Settings, LogOut, User, Tag, Award } from "@lucide/svelte";
  import ModeToggle from "$lib/components/mode-toggle.svelte";
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";

  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Briefcase,
    },
    {
      title: "Certificates",
      url: "/dashboard/certificates",
      icon: Award,
    },
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: FileText,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: Tag,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          goto("/login");
        },
      },
    });
  }
</script>

<Sidebar.Root>
  <Sidebar.Header class="border-b p-4">
    <div class="flex items-center gap-2 font-bold">
      <div class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
        <LayoutDashboard size={18} />
      </div>
      <span class="text-lg tracking-tight">Admin Panel</span>
    </div>
  </Sidebar.Header>

  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Main Menu</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={page.url.pathname === item.url || (item.url !== "/dashboard" && page.url.pathname.startsWith(item.url))}>
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>

  <Sidebar.Footer class="border-t p-4">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between px-2">
        <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">Appearance</span>
        <ModeToggle />
      </div>

      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton onclick={handleLogout} class="text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut size={18} />
            <span>Sign Out</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </div>
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
