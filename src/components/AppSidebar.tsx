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
    url: "https://www.facebook.com/p/%D7%A4%D7%9C%D7%99%D7%A7%D7%90%D7%9F-%D7%92%D7%A8%D7%95%D7%A4-pelican-group-100071268714319/?_rdr",
    icon: Facebook,
  },
  {
    title: "Instagram", 
    url: "https://www.instagram.com/pelican_group_il/",
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
          <div className="flex-1 text-right">
            <h2 className="font-bold text-orange-700">פליקאן גרופ</h2>
            <p className="text-sm text-orange-600">מערכת ניהול תוכן</p>
          </div>
          <Building2 className="w-6 h-6 text-orange-600" />
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
                  <SidebarMenuButton asChild className="text-right hover:bg-orange-50">
                    <a href={item.url} className="flex items-center justify-between w-full">
                      <item.icon className="w-4 h-4" />
                      <span className="flex-1 text-right mr-2">{item.title}</span>
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
                  <SidebarMenuButton asChild className="text-right hover:bg-orange-50">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="flex-1 text-right mr-2">{link.title}</span>
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
          © 2025 fizz media
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
