import { 
  LayoutDashboard, 
  Code, 
  Megaphone, 
  Palette, 
  Users, 
  DollarSign 
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Engineering", url: "/engineering", icon: Code },
  { title: "Marketing", url: "/marketing", icon: Megaphone },
  { title: "Product & Design", url: "/product", icon: Palette },
  { title: "HR", url: "/hr", icon: Users },
  { title: "Finance", url: "/finance", icon: DollarSign },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent>
        <div className="px-3 py-4">
          <h2 className={`font-semibold text-lg transition-opacity ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
            HR Analytics
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'opacity-0' : 'opacity-100'}>
            Departments
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
