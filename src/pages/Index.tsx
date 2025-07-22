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

            {/* Content Strategy Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-orange-50">
                <TabsTrigger value="posts" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">רעיונות לפוסטים</TabsTrigger>
                <TabsTrigger value="templates" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">תבניות</TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">לוח זמנים</TabsTrigger>
                <TabsTrigger value="kpis" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">יעדים</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                <div className="grid gap-6">
                  <Card className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-700 text-right">רעיונות לפוסטים מקצועיים</CardTitle>
                      <CardDescription className="text-right">3 רעיונות באווירה מקצועית, אמינה ואנושית</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 text-right">
                      <div className="border-r-4 border-orange-500 pr-4">
                        <h3 className="font-semibold mb-2 text-orange-700">1. פוסט אינפורמטיבי - נכס חדש</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          הצגת נכס חדש שנרכש או שופץ, עם דגש על הערך המוסף לקהילה
                        </p>
                        <div className="flex gap-2 mb-2 justify-end">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">תמונות איכותיות</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">וידאו קצר</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">אינפוגרפיקה</Badge>
                        </div>
                        <p className="text-xs text-gray-500">קריאה לפעולה: "למידע נוסף על השכרת שטחים"</p>
                      </div>

                      <div className="border-r-4 border-orange-400 pr-4">
                        <h3 className="font-semibold mb-2 text-orange-700">2. פוסט מבוסס ערכים - אחריות קהילתית</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          שיתוף פעילויות אחריות תאגידית, תמיכה בקהילה המקומית
                        </p>
                        <div className="flex gap-2 mb-2 justify-end">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">תמונות מהפעילות</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">ציטוטים מעצבנים</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">סטטיסטיקות השפעה</Badge>
                        </div>
                        <p className="text-xs text-gray-500">קריאה לפעולה: "הצטרפו אלינו למען הקהילה"</p>
                      </div>

                      <div className="border-r-4 border-orange-300 pr-4">
                        <h3 className="font-semibold mb-2 text-orange-700">3. פוסט שיווקי - נכס פנוי להשכרה</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          הצגת נכס זמין להשכרה עם דגש על היתרונות והמיקום
                        </p>
                        <div className="flex gap-2 mb-2 justify-end">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">סיור וירטואלי</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">מפת מיקום</Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">פרטים טכניים</Badge>
                        </div>
                        <p className="text-xs text-gray-500">קריאה לפעולה: "צרו קשר לתיאום פגישה"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="space-y-4">
                <div className="grid gap-4">
                  <Card className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-700 text-right">תבניות פוסטים מוכנות</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-right">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold mb-2 text-orange-700">פוסט אינפורמטיבי - נכס חדש</h4>
                        <p className="text-sm mb-2"><strong>כותרת:</strong> "נכס חדש בתיק פליקאן גרופ 🏢"</p>
                        <p className="text-sm mb-2"><strong>טקסט:</strong> רכישת נכס ברחוב X - מיקום אסטרטגי, השבחה מתוכננת</p>
                        <p className="text-sm mb-2"><strong>תגים:</strong> #נדלן_מניב #השקעות #פליקאן_גרופ #נכסים_מסחריים</p>
                        <Badge variant="outline" className="border-orange-300 text-orange-700">יעד: חשיפה ומיצוב בפיד</Badge>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold mb-2 text-orange-700">פוסט ערכי - אחריות קהילתית</h4>
                        <p className="text-sm mb-2"><strong>כותרת:</strong> "יחד למען הקהילה 🤝"</p>
                        <p className="text-sm mb-2"><strong>טקסט:</strong> תמיכה בפרויקט קהילתי - אחריות חברתית בפעולה</p>
                        <p className="text-sm mb-2"><strong>תגים:</strong> #אחריות_חברתית #קהילה #פליקאן_גרופ #ערכים</p>
                        <Badge variant="outline" className="border-orange-300 text-orange-700">יעד: אנגייג'מנט וחיבור רגשי</Badge>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold mb-2 text-orange-700">פוסט שיווקי - השכרה</h4>
                        <p className="text-sm mb-2"><strong>כותרת:</strong> "שטח מסחרי זמין להשכרה 📍"</p>
                        <p className="text-sm mb-2"><strong>טקסט:</strong> מיקום מעולה, תנאים אטרקטיביים - הזדמנות עסקית</p>
                        <p className="text-sm mb-2"><strong>תגים:</strong> #השכרה #שטחים_מסחריים #הזדמנות_עסקית #פליקאן</p>
                        <Badge variant="outline" className="border-orange-300 text-orange-700">יעד: לידים ופניות עסקיות</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="calendar" className="space-y-4">
                <Card className="border-orange-200">
                  <CardHeader className="text-right">
                    <CardTitle className="text-orange-700">לוח זמנים שבועי</CardTitle>
                    <CardDescription>תכנון תוכן לפי ימי השבוע</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-right">
                        <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                          <h3 className="font-semibold text-orange-600 mb-2">יום ראשון</h3>
                          <p className="text-sm font-medium mb-1">השראה/ערך</p>
                          <p className="text-xs text-gray-600">פעילות אחריות תאגידית או ציטוט מחזון החברה</p>
                        </div>
                        <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                          <h3 className="font-semibold text-orange-600 mb-2">יום שלישי</h3>
                          <p className="text-sm font-medium mb-1">שיווקי</p>
                          <p className="text-xs text-gray-600">פרסום נכס חדש להשכרה או מכירה</p>
                        </div>
                        <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                          <h3 className="font-semibold text-orange-600 mb-2">יום חמישי</h3>
                          <p className="text-sm font-medium mb-1">עדכון עסקי</p>
                          <p className="text-xs text-gray-600">חדשות החברה, רכישות או תהליכי השבחה</p>
                        </div>
                        <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                          <h3 className="font-semibold text-orange-600 mb-2">יום שישי</h3>
                          <p className="text-sm font-medium mb-1">מאחורי הקלעים</p>
                          <p className="text-xs text-gray-600">תמונת הצוות או אנקדוטה מהשטח</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kpis" className="space-y-4">
                <Card className="border-orange-200">
                  <CardHeader className="text-right">
                    <CardTitle className="text-orange-700">יעדים לכל סוג פוסט</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg bg-orange-50">
                        <div className="text-right">
                          <h4 className="font-semibold text-orange-700">פוסטים אינפורמטיביים</h4>
                          <p className="text-sm text-gray-600">נכסים חדשים ועדכונים</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <Eye className="w-3 h-3 ml-1" />
                            חשיפה
                          </Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <Users className="w-3 h-3 ml-1" />
                            קהל עסקי
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg bg-orange-50">
                        <div className="text-right">
                          <h4 className="font-semibold text-orange-700">פוסטים ערכיים</h4>
                          <p className="text-sm text-gray-600">אחריות חברתית וקהילה</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <Heart className="w-3 h-3 ml-1" />
                            אנגייג'מנט
                          </Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <Share2 className="w-3 h-3 ml-1" />
                            שיתופים
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg bg-orange-50">
                        <div className="text-right">
                          <h4 className="font-semibold text-orange-700">פוסטים שיווקיים</h4>
                          <p className="text-sm text-gray-600">נכסים זמינים להשכרה</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <MessageCircle className="w-3 h-3 ml-1" />
                            לידים
                          </Badge>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <TrendingUp className="w-3 h-3 ml-1" />
                            המרות
                          </Badge>
                        </div>
                      </div>
                    </div>
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
                      <p className="text-sm text-gray-600">נכסים ברחבי הארץ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">3</p>
                      <p className="text-sm text-gray-600">יעדים</p>
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