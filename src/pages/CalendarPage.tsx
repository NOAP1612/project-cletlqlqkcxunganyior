import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const CalendarPage = () => {
  // Calendar data for August 2025
  const calendarData = {
    3: {
      title: "פתיחת חודש אוגוסט",
      description: "חודש חדש, הזדמנויות חדשות. נכסים זמינים להשכרה במרכזים לוגיסטיים מובילים. לפרטים, פנו אלינו.",
      status: "רעיון",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    6: {
      title: "זרקור על נכס: חיפה",
      description: "מתחם התעשייה שלנו בהסתדרות, חיפה, מציע 15,000 מ\"ר של שטחי תעשייה ולוגיסטיקה במיקום אסטרטגי.",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700"
    },
    11: {
      title: "על חיבורים ועסקים",
      description: "הצלחה עסקית בנויה על חיבורים נכונים. גם בנדל\"ן. ט\"ו באב הוא תזכורת לחשיבות של בחירת השותפים הנכונים למסע.",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700"
    },
    14: {
      title: "לוגיסטיקה במספרים: התשואה האמיתית",
      description: "התשואה על נדל\"ן לוגיסטי בישראל מגיעה עד 9.5%, לעומת כ-3% במגורים. נתונים מהשטח.",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700"
    },
    19: {
      title: "לקוח חדש: MSP70",
      description: "אנו מברכים את חברת MSP70 על הצטרפותה לנכס שלנו באזור התעשייה 'צחר', ראש פינה. מאחלים להם הצלחה.",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700"
    },
    25: {
      title: "מהתקשורת: ההשקעה באופקים",
      description: "מבט על הרכישה האסטרטגית שלנו באופקים, כפי שסוקרה בתקשורת. מהלך שמחזק את התעשייה בדרום.",
      status: "רעיון",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    28: {
      title: "היערכות לספטמבר",
      description: "נערכים לחודש החגים. הזדמנות לתכנון אסטרטגי של הרבעון האחרון של השנה.",
      status: "רעיון",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  };

  // Days of the week in Hebrew
  const daysOfWeek = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

  // Generate calendar grid for August 2025
  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(2025, 7, 1).getDay(); // August 1, 2025 (0 = Sunday)
    const daysInMonth = new Date(2025, 8, 0).getDate(); // Days in August

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
                  לוח תוכן חודשי: אוגוסט 2025
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowRight className="w-4 h-4 ml-2" />
                      ספטמבר
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      יולי
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