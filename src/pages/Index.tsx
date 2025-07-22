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
                    <h3 className="font-semibold text-orange-700 mb-2">שפה מקצועית אך נגישה</h3>
                    <p className="text-sm text-gray-600">בלי פלצנות נדל"נית, אבל גם בלי שטחיות.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">דגש על פעולה ועשייה</h3>
                    <p className="text-sm text-gray-600">לא "אנחנו מאמינים ב..." אלא "אנחנו עושים את זה בפועל ב..."</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">שקיפות ועדכניות</h3>
                    <p className="text-sm text-gray-600">עדכון שוטף על נכסים, עסקאות, מגמות וערך שנוצר בפועל.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-700 mb-2">עיצוב סולידי עם אמירה</h3>
                    <p className="text-sm text-gray-600">צבעים עסקיים (כתום, לבן, שחור), טיפוגרפיה ברורה, מינימליזם עם נוכחות.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

// ... keep existing code (Content Strategy Tabs and Quick Stats)
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;