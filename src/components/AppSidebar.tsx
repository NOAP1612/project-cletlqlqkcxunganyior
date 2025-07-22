import {
  Calendar,
  BarChart3,
  FileText,
  Settings,
  Home,
  Users,
  Target,
  TrendingUp,
  Building2
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "דף הבית",
    url: "/",
    icon: Home,
  },
  {
    title: "לוח תוכן שבועי",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "תבניות פוסטים",
    url: "/templates",
    icon: FileText,
  },
  {
    title: "ניתוח ביצועים",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "ניהול נכסים",
    url: "/properties",
    icon: Building2,
  },
  {
    title: "קהל יעד",
    url: "/audience",
    icon: Users,
  },
  {
    title: "יעדי KPI",
    url: "/kpis",
    icon: Target,
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="right" className="border-l">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pelican-blue to-pelican-navy rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-pelican-navy">פליקאן גרופ</h2>
            <p className="text-sm text-muted-foreground">ניהול מדיה חברתית</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ניווט ראשי</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-6">
        <div className="text-xs text-muted-foreground text-center">
          <p>© 2024 פליקאן גרופ</p>
          <p>מערכת ניהול תוכן</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}