import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  LayoutGrid,
  CalendarDays,
  BarChart3,
  ArrowLeft
} from "lucide-react"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">מרכז הבקרה - פליקאן גרופ</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {/* Two Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Main Workspace (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* ... keep existing code (welcome header and core actions sections) */}

                {/* Component 3: Latest Activity Feed */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-orange-700 text-right">פיד פעילות אחרון</h2>
                  <div className="space-y-4">
                    
                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">מתוכנן</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">נוסף פוסט חדש ללוח התוכן</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          אכלוס חדש בראש פינה: חברת MSP70 עברה למתחם החדש שלנו.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">רעיון</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">רעיון לפוסט חדש</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          כתבה כלכלית על פער התשואות בין נדל"ן לוגיסטי למגורים. אפשר להפוך לאינפוגרפיקה.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Column - At a Glance (1/3 width) */}
              <div className="space-y-6">
                
                {/* ... keep existing code (performance metrics section) */}

                {/* Component 5: Upcoming Posts */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 text-right">פוסטים מתוכננים</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="text-right">
                          <p className="font-semibold text-orange-700">עדכון שוק נדל"ן - ינואר 2025</p>
                          <p className="text-sm text-gray-600">28.07.2025</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="text-right">
                          <p className="font-semibold text-orange-700">טיפים להשקעה נדל"ן חכמה</p>
                          <p className="text-sm text-gray-600">04.08.2025</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => window.location.href = '/calendar'}
                    >
                      ללוח השנה המלא
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;