import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { ContentCalendar } from "@/components/ContentCalendar"

const CalendarPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">לוח תוכן שבועי - פליקאן גרופ</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <ContentCalendar />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CalendarPage;