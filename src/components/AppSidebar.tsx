import {
  Calendar,
  BarChart3,
  FileText,
  Settings,
  Home,
  Users,
  Target,
  TrendingUp,
  Building2,
  LayoutGrid,
  Globe,
  Instagram,
  Facebook
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
    title: "ניהול תוכן",
    url: "/content-dashboard",
    icon: LayoutGrid,
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
    title: "יעדים",
    url: "/kpis",
    icon: Target,
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="right" className="border-l border-orange-200">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-orange-600">פליקאן גרופ</h2>
            <p className="text-sm text-muted-foreground">ניהול מדיה חברתית</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700">ניווט ראשי</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-orange-50 hover:text-orange-700">
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

      {/* Social Media Links Section */}
      <div className="flex justify-center items-center gap-4 p-4 border-t border-orange-200">
        <a 
          href="https://www.pelicangroup.co.il/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors"
        >
          <Globe className="w-4 h-4 text-orange-600 hover:text-orange-700" />
        </a>
        <a 
          href="https://www.instagram.com/pelican_group_il/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors"
        >
          <Instagram className="w-4 h-4 text-orange-600 hover:text-orange-700" />
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=100071268714319" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors"
        >
          <Facebook className="w-4 h-4 text-orange-600 hover:text-orange-700" />
        </a>
      </div>
    </Sidebar>
  )
}