import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Target, Users, TrendingUp, Heart, Eye, MessageCircle } from "lucide-react"

const weeklyContent = [
  {
    day: "ראשון",
    type: "השראה/ערך",
    content: "רכישת נכס ברחוב",
    format: "תמונה + טקסט",
    cta: "עקבו לעדכונים נוספים",
    kpi: "חשיפה ומיצוב בפיד",
    color: "blue"
  },
  {
    day: "שני",
    type: "שיווקי", 
    content: "נכס פנוי - ספיר 3, ראש פינה",
    format: "תמונה + טקסט",
    cta: "שלחו הודעה לפרטים נוספים",
    kpi: "לידים להשכרה",
    color: "green"
  },
  {
    day: "שלישי",
    type: "עדכון עסקי",
    content: "צו קבע לפרטים על הנכס",
    format: "תמונה + טקסט",
    cta: "עקבו/עדכון",
    kpi: "לידים עתידיים",
    color: "purple"
  },
  {
    day: "רביעי", 
    type: "חיזוק אמינות חול עסקים",
    content: "הענקם שלכם צומח דבר איתנו",
    format: "תמונות לקוח + טקסט",
    cta: "MSP70 עברו לתחתם צהר 2 האדום",
    kpi: "חיזוק אמינות חול עסקים",
    color: "orange"
  },
  {
    day: "חמישי",
    type: "מעורבות גבוהה",
    content: "עקבו להצגת ראשונה לפרויקט הבא",
    format: "וידאו קצר / ריכס",
    cta: "מאחורי הקלעים באתר ברחוב",
    kpi: "מעורבות גבוהה",
    color: "teal"
  },
  {
    day: "שישי",
    type: "חיבור רגשי לנותח",
    content: "שתפו איתנו כמה הערך הזה עובדכם",
    format: "ציטוט + גרפיקה",
    cta: "ערך שבועי מחזון של פליקאן",
    kpi: "חיבור רגשי לנותח",
    color: "pink"
  }
]

export function ContentCalendar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            תכנית תוכן שבועית - פליקאן גרופ
          </CardTitle>
          <CardDescription>
            לוח זמנים מפורט לפרסום תוכן במדיה החברתית
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {weeklyContent.map((item, index) => (
              <div key={index} className={`p-4 border-r-4 border-${item.color}-500 bg-${item.color}-50/30 rounded-lg`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{item.day}</h3>
                    <Badge variant="secondary" className="mt-1">{item.type}</Badge>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>10:00</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">{item.content}</p>
                  <p className="text-sm text-gray-600">
                    <strong>פורמט:</strong> {item.format}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>קריאה לפעולה:</strong> {item.cta}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">יעד KPI:</span>
                    <Badge variant="outline">{item.kpi}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>הערות תפעוליות</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2">סטורי ופרסום</h4>
            <p className="text-sm">כל פוסט יעלה גם לסטורי עם קישור ליצירת קשר או קריאה לפעולה</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold mb-2">פרסום ממומן</h4>
            <p className="text-sm">פוסטים שיווקיים יקודמו באופן ממומן לקהל רלוונטי (בעלי עסקים בצפון/דרום)</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold mb-2">תוכן נוסף</h4>
            <p className="text-sm">כדאי לשלב אחת לשבוע גם תוכן מהבלוג / כתבה רלוונטית</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}