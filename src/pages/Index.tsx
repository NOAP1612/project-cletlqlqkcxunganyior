import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Calendar,
  Target,
  BarChart3,
  FileText,
  Heart,
  Share2,
  MessageCircle,
  Eye
} from "lucide-react"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">לוח בקרה - ניהול מדיה חברתית</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6 space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-l from-orange-500 to-orange-600 rounded-xl p-8 text-white">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-orange-100">פליקאן גרופ - מערכת ניהול תוכן</h2>
                <p className="text-lg opacity-90 mb-6">
                  קבוצת נדל"ן מניב מובילה בישראל מאז 2012. מתמחים ברכישה, ניהול, השכרה ואחזקת נכסים.
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                    <Calendar className="w-4 h-4 ml-2" />
                    לוח תוכן שבועי
                  </Button>
                  <Button size="lg" className="bg-white text-orange-600 border-2 border-white hover:bg-orange-50 hover:border-orange-100">
                    <BarChart3 className="w-4 h-4 ml-2" />
                    ניתוח ביצועים
                  </Button>
                </div>
              </div>
            </div>

            {/* Brand Guidelines */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Target className="w-5 h-5" />
                  קווי המותג והערכים
                </CardTitle>
                <CardDescription>
                  הערכים המנחים את התקשורת של פליקאן גרופ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">חוזק</h3>
                    <p className="text-sm text-gray-600">יציבות פיננסית ומקצועיות ברמה הגבוהה ביותר</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">יסודיות</h3>
                    <p className="text-sm text-gray-600">בדיקה מעמיקה וניתוח מקיף של כל השקעה</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">קיימות</h3>
                    <p className="text-sm text-gray-600">השקעה ארוכת טווח באחריות סביבתית</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">אחריות</h3>
                    <p className="text-sm text-gray-600">מחויבות לקהילה ולשותפים העסקיים</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Strategy Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-orange-50">
                <TabsTrigger value="posts" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">רעיונות לפוסטים</TabsTrigger>
                <TabsTrigger value="templates" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">תבניות</TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">לוח זמנים</TabsTrigger>
                <TabsTrigger value="kpis" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">KPI יעדי</TabsTrigger>
              </TabsList>

              {/* ... keep existing code (TabsContent for posts, templates, calendar) */}

              <TabsContent value="kpis" className="space-y-4">
                <Card className="border-orange-200">
                  <CardHeader className="text-right">
                    <CardTitle className="text-orange-700">KPI יעדי לכל סוג פוסט</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* ... keep existing code (rest of the KPI section) */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">12+</p>
                      <p className="text-sm text-gray-600">שנות פעילות</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">15+</p>
                      <p className="text-sm text-gray-600">נכסים בכל הארץ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">3</p>
                      <p className="text-sm text-gray-600">חברות- אחות</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
