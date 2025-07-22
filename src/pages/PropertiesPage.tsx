import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { PropertiesManager } from "@/components/PropertiesManager"

const PropertiesPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">ניהול נכסים ופוסטים - פליקאן גרופ</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <PropertiesManager />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default PropertiesPage;