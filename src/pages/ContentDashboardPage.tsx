import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Calendar, Edit, Eye, Plus } from "lucide-react";

const ContentDashboardPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <main className="flex-1 p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-orange-700">לוח ניהול תוכן - פליקאן גרופ</h1>
                <p className="text-gray-600 mt-2">ניהול מקיף של תוכן מדיה חברתית</p>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 ml-2" />
                תוכן חדש
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Section 1: Ideas & Drafts */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Edit className="w-5 h-5 text-orange-600" />
                  <h2 className="text-xl font-semibold text-orange-700">רעיונות וטיוטות</h2>
                </div>
                
                <Card className="border-orange-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">רעיון</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">סדרת פוסטים על הנכס החדש בספיר 3, ראש פינה</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-right">
                      טיזר, פוסט חשיפה עם תמונות, וסרטון סיור בנכס.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">רעיון</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">פוסט 'מאחורי הקלעים' על הרכישה באופקים</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-right">
                      לראיין את מוטי גולדשטיין על החשיבות האסטרטגית של הרכישה ומה זה אומר על החזון של החברה.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">רעיון</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">פוסט נתונים: 'למה לוגיסטיקה?'</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-right">
                      אינפוגרפיקה שמסבירה את פער התשואות בין נדל"ן לוגיסטי למגורים. להשתמש בנתונים מהכתבה.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2: Scheduled Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-blue-700">תוכן בתכנון</h2>
                </div>
                
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">מתוכנן</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">ברוכים הבאים MSP70!</CardTitle>
                    <div className="flex items-center gap-2 justify-end text-sm text-gray-600">
                      <span>28.07.2025</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right text-gray-700 leading-relaxed">
                      שמחים לקבל את פני חברת MSP70 למשפחת פליקאן! החברה התרחבה ועברה למתחם החדש שלנו בא.ת. צחר, ראש פינה. מאחלים לכם צמיחה והצלחה! #פליקאןגרופ #קהילהעסקית
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">מתוכנן</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">הלב הפועם של חיפה</CardTitle>
                    <div className="flex items-center gap-2 justify-end text-sm text-gray-600">
                      <span>04.08.2025</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right text-gray-700 leading-relaxed">
                      הכירו את מתחם פליקאן גרופ בהסתדרות 199, חיפה – 15,000 מ"ר של הזדמנויות לעסקים שרוצים להיות במרכז העניינים. #חיפה #נדלןמסחרי
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 3: Recently Published */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-semibold text-green-700">פורסם לאחרונה</h2>
                </div>
                
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">פורסם</Badge>
                    </div>
                    <CardTitle className="text-right text-lg">רכישת ענק באופקים</CardTitle>
                    <div className="flex items-center gap-2 justify-end text-sm text-gray-600">
                      <span>21.07.2025</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right text-gray-700 leading-relaxed">
                      גאווה דרומית! פליקאן גרופ השלימה רכישת מתחם תעשייה ענק באופקים בהשקעה של 47 מלש"ח. מהלך שמחזק את הדרום ומציב סטנדרט חדש בתעשייה. #פליקאןגרופ #אופקים
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-700 mb-4 text-right">פעולות מהירות</h3>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  צפייה בלוח השנה
                </Button>
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  תבניות פוסטים
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  יצירת פוסט חדש
                </Button>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ContentDashboardPage;