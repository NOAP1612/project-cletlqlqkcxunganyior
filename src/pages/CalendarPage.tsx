import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const CalendarPage = () => {
  // Calendar data for September 2025
  const calendarData = {
    1: {
      title: "תחילת חודש, הזדמנויות חדשות",
      description: "פוסט פתיחת חודש עם תזכורת על הנכסים הזמינים שלנו.",
      status: "רעיון",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    4: {
      title: "פוסט נתונים: למה לוגיסטיקה?",
      description: "ידעתם שתשואה על נדל\"ן לוגיסטי מגיעה ל-9.5%? אינפוגרפיקה קצרה על ההשקעה החכמה הבאה.",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700"
    },
    9: {
      title: "טיזר: משהו חדש בצפון...",
      description: "פוסט תמונה מסקרן. \"ההזדמנות הבאה של העסק שלכם מחכה בצפון. פרטים בקרוב... #פליקאןגרופ #ראשפינה\"",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700"
    },
    15: {
      title: "חשיפה: נכס חדש בספיר 3!",
      description: "חדש להשכרה! ✨ מבנה לוגיסטי מודרני בספיר 3, א.ת. צחר. מיקום מושלם לעסק שרוצה לצמוח. תייגו מנהל/ת שחייב/ת לראות!",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700"
    },
    22: {
      title: "ברכת שנה טובה",
      description: "עיצוב חגיגי עם טקסט: \"שנה טובה ומתוקה של צמיחה, שגשוג והצלחה. מצוות פליקאן גרופ.\"",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700"
    },
    25: {
      title: "מבט על הרכישה באופקים",
      description: "בונים את עתיד הדרום. מבט על מאחורי הקלעים של רכישת הענק שלנו באופקים. #נדלןמניב #אופקים",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700"
    },
    30: {
      title: "סיכום חודש וקריאה לפעולה",
      description: "ספטמבר היה חודש של התחדשות. מה התכניות שלכם לאוקטובר? דברו איתנו, אולי הנכס הבא שלכם מחכה אצלנו.",
      status: "רעיון",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  };

  // Days of the week in Hebrew
  const daysOfWeek = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

  // Generate calendar grid for September 2025
  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(2025, 8, 1).getDay(); // September 1, 2025 (0 = Sunday)
    const daysInMonth = new Date(2025, 9, 0).getDate(); // Days in September

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <h1 className="text-xl font-bold text-orange-600">לוח תוכן חודשי</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-orange-700 text-right mb-4">
                  לוח תוכן חודשי: ספטמבר 2025
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowRight className="w-4 h-4 ml-2" />
                      אוקטובר
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      אוגוסט
                    </Button>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="bg-white rounded-lg border border-orange-200 overflow-hidden">
                {/* Days of Week Header */}
                <div className="grid grid-cols-7 bg-orange-50 border-b border-orange-200">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="p-4 text-center font-semibold text-orange-700 border-l border-orange-200 last:border-l-0">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((day, index) => (
                    <div 
                      key={index} 
                      className="min-h-[120px] border-b border-l border-orange-200 last:border-l-0 p-2"
                    >
                      {day && (
                        <>
                          <div className="text-sm font-semibold text-gray-600 mb-2 text-right">
                            {day}
                          </div>
                          {calendarData[day] && (
                            <Card className="border-orange-200 bg-orange-50/50 h-full">
                              <CardHeader className="p-2 pb-1">
                                <div className="flex items-start justify-between gap-1">
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs ${calendarData[day].statusColor}`}
                                  >
                                    {calendarData[day].status}
                                  </Badge>
                                </div>
                                <CardTitle className="text-xs font-semibold text-right leading-tight">
                                  {calendarData[day].title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-2 pt-0">
                                <p className="text-xs text-gray-600 text-right leading-tight line-clamp-3">
                                  {calendarData[day].description}
                                </p>
                              </CardContent>
                            </Card>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">רעיון</Badge>
                  <span className="text-sm text-gray-600">רעיונות לתוכן</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">טיוטה</Badge>
                  <span className="text-sm text-gray-600">בשלבי כתיבה</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">מתוכנן</Badge>
                  <span className="text-sm text-gray-600">מוכן לפרסום</span>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CalendarPage;