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
import { Home, Calendar, BarChart3, Archive, Instagram, Facebook, Globe } from "lucide-react"

// Menu items
const items = [
  {
    title: "דף הבית",
    url: "/",
    icon: Home,
  },
  {
    title: "לוח שנה (קלנדר)",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "מאגר תוכן",
    url: "/content-repository",
    icon: Archive,
  },
  {
    title: "ניתוח ביצועים (אנליטיקס)",
    url: "/analytics",
    icon: BarChart3,
  },
]

// Social media links
const socialLinks = [
  {
    title: "אתר החברה",
    url: "https://pelican-group.co.il",
    icon: Globe,
  },
  {
    title: "אינסטגרם",
    url: "https://instagram.com/pelican_group_il",
    icon: Instagram,
  },
  {
    title: "פייסבוק",
    url: "https://facebook.com/pelicangroup.il",
    icon: Facebook,
  },
]

export function AppSidebar() {
  const dir = "rtl";

  return (
    <Sidebar dir={dir} side={dir === "rtl" ? "right" : "left"}>
      <SidebarHeader className="p-4">
        <div className="text-center">
          <h2 className="text-lg font-bold text-orange-700">פליקאן גרופ</h2>
          <p className="text-sm text-gray-600">מערכת ניהול תוכן</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">ניווט ראשי</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 hover:bg-orange-50 hover:text-orange-700 transition-colors">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">קישורים חברתיים</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 פליקאן גרופ</p>
          <p>כל הזכויות שמורות</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}