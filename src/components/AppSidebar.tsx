import {
  Calendar,
  Home,
  Archive,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Building2,
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

// Menu items.
const items = [
  {
    title: "דף הבית",
    url: "/",
    icon: Home,
  },
  {
    title: "לוח תוכן חודשי",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "מאגר תוכן",
    url: "/content-repository",
    icon: Archive,
  },
]

// Social media links
const socialLinks = [
  {
    title: "Facebook",
    url: "https://facebook.com",
    icon: Facebook,
  },
  {
    title: "Instagram", 
    url: "https://instagram.com",
    icon: Instagram,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
  },
  {
    title: "YouTube",
    url: "https://youtube.com",
    icon: Youtube,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-l border-orange-200" side="right">
      <SidebarHeader className="p-4 border-b border-orange-200">
        <div className="flex items-center gap-2 text-right">
          <Building2 className="w-6 h-6 text-orange-600" />
          <div>
            <h2 className="font-bold text-orange-700">פליקאן גרופ</h2>
            <p className="text-sm text-orange-600">מערכת ניהול תוכן</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-right text-orange-700 font-semibold">
            ניווט ראשי
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-right justify-end hover:bg-orange-50">
                    <a href={item.url} className="flex items-center gap-2">
                      <span>{item.title}</span>
                      <item.icon className="w-4 h-4" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-right text-orange-700 font-semibold">
            רשתות חברתיות
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild className="text-right justify-end hover:bg-orange-50">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>{link.title}</span>
                      <link.icon className="w-4 h-4" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-orange-200">
        <div className="text-center text-sm text-orange-600">
          © 2025 פליקאן גרופ
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}