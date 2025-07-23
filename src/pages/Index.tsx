import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  LayoutGrid,
  CalendarDays,
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
              
              {/* Left Column - Main Content (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Component 1: Welcome Header */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-orange-700 text-right">
                    ברוכים הבאים, מערכת ניהול פליקאן גרופ
                  </h1>
                  <p className="text-lg text-gray-600 text-right leading-relaxed">
                    מכאן תוכלו לנהל את הנכסים, התוכן והנוכחות הדיגיטלית של החברה.
                  </p>
                </div>

                {/* Component 2: Quick Actions */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-orange-700 text-right">פעולות מהירות</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/properties" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <Building2 className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">ניהול נכסים</h3>
                          <p className="text-sm text-gray-600">צפייה וניהול תיק הנכסים</p>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/content-dashboard" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <LayoutGrid className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">לוח ניהול תוכן</h3>
                          <p className="text-sm text-gray-600">ניהול תוכן מדיה חברתית</p>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/calendar" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <CalendarDays className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">לוח שנה (קלנדר)</h3>
                          <p className="text-sm text-gray-600">תכנון תוכן שבועי</p>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Component 3: Recent Updates */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-orange-700 text-right">עדכונים אחרונים</h2>
                  <div className="space-y-4">
                    
                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">תוכן חדש</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">אכלוס חדש בראש פינה</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          חברת MSP70 התרחבה ועברה למתחם החדש שלנו באזור התעשייה 'צחר'. ברוכים הבאים!
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">חדשות החברה</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">רכישה אסטרטגית באופקים</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          השלמנו רכישת מתחם תעשייה באופקים בהשקעה של 47 מלש"ח. צעד נוסף לחיזוק הנגב.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar Information (1/3 width) */}
              <div className="space-y-6">
                
                {/* Component 4: Key Metrics */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 text-right">מדדים עיקריים</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">14</p>
                        <p className="text-sm text-gray-600">נכסים בניהול</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">3</p>
                        <p className="text-sm text-gray-600">נכסים פנויים להשכרה</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">8</p>
                        <p className="text-sm text-gray-600">פוסטים מתוכננים לחודש הקרוב</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <LayoutGrid className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Component 5: Featured Property */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 text-right">נכס מומלץ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-orange-700 mb-2">
                        חדש להשכרה: ספיר 3, ראש פינה
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        מבנה תעשייה ולוגיסטיקה מודרני במיקום אסטרטגי.
                      </p>
                      <Button 
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        onClick={() => window.location.href = '/properties'}
                      >
                        לפרטים נוספים
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </div>
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