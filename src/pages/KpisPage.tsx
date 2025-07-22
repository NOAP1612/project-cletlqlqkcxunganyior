import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

const KpisPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">יעדים</h1>
            </div>
          </header>
          <main className="flex-1 p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-orange-700">בקרוב...</h2>
              <p className="text-gray-600 mt-2">כאן יוצגו היעדים ומדדי הביצוע המרכזיים (KPIs).</p>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default KpisPage;