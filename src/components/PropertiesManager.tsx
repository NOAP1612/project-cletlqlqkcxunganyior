import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Calendar, DollarSign, Users, Wrench, Camera } from "lucide-react"

const futurePosts = [
  {
    id: 1,
    title: "פליקאן גרופ בירוחם 	6 השקעה בפריפריה עם ערך אמיתי.",
    content: "אנחנו שמחים להודיע על רכישת נכס חדש בירוחם, כחלק מהרחבת הפעילות שלנו בדרום. הנכס מצטרף לאסטרטגיה שלנו לחזק אזורים מתפתחים עם פוטנציאל נדל\"ן גבוה וקהילות חזקות.",
    hashtags: "#ירוחם #נדלןבדרום #השקעותנדלן #פליקאןגרופ #פיתוחפריפריה",
    cta: "רוצים לשמוע איך פליקאן מזהה הזדמנויות במקומות שאחרים מפספסים?",
    kpi: "חשיפה וחיזוק מיצוב כאסטרטגיים לטווח ארוך עם חזון חברתי-כלכלי.",
    image: "מבט מרחפן או צילום חזיתי של המבנה עם המדבר ברקע",
    location: "ירוחם",
    status: "פרויקט עתידי",
    statusColor: "orange"
  },
  {
    id: 2,
    title: "נכס נוסף לפורטפוליו של פליקאן 	6 רח' הסתדרות 201, חיפה.",
    content: "הצפון מתעורר 	6 ורחוב ההסתדרות הוא מרכז העסקים הבא. פליקאן רכשה נכס משרדים אסטרטגי בציר תנועה מרכזי, עם נגישות גבוהה ואפשרויות השבחה.",
    hashtags: "#חיפה #נדלןמסחרי #הסתדרות201 #פליקאןגרופ #משרדיםבצפון",
    cta: "מחפשים מיקום מעולה למשרד הבא שלכם? דברו איתנו.",
    kpi: "בידול באזור הצפון ויצירת לידים להשכרה עתידית.",
    image: "שוט של חזית הבניין עם כיתוב הסתדרות 201 מודגש",
    location: "חיפה",
    status: "פרויקט עתידי",
    statusColor: "orange"
  }
];

const currentPosts = [
  {
    id: 3,
    title: "כשחברות צומחות 	6 הן בוחרות פליקאן.",
    content: "חברת MSP70 התרחבה ועברה למתחם החדש שלנו בצחר האודם 2. בפליקאן אנחנו יודעים להתאים את החלל לצרכים של עסקים בצמיחה 	6 עם תשתיות, שירות וליווי אישי.",
    hashtags: "#צחרהאודם #MSP70 #מעברעסקי #פליקאןגרופ #תעשיהבצפון",
    cta: "גם החברה שלכם מתרחבת? יש לנו את החלל המושלם בשבילכם.",
    kpi: "בניית אמון מול עסקים והצגת יכולת התאמה לצרכים תפעוליים.",
    image: "צוות MSP70 בכניסה למתחם החדש עם שילוט לוגו",
    location: "צחר האודם 2",
    status: "מושכר",
    statusColor: "gray"
  },
  {
    id: 4,
    title: "להשכרה עכשיו: ספיר 3, ראש פינה 	6 אזור תעשייה צחר",
    content: "מחפשים מקום לעסק בצפון? הנכס החדש שלנו 	6 420 מ\"ר של חלל תעשייתי איכותי 	6 מחכה לדייר הבא. תשתיות חדשות, נגישות מלאה, ליווי מקצועי של פליקאן.",
    hashtags: "#ראשפינה #להשכרה #נדלןתעשייתי #פליקאןגרופ #אזורצחר",
    cta: "שלחו לנו הודעה ונחזור אליכם עם כל הפרטים.",
    kpi: "לידים ישירים להשכרה.",
    image: "שטח פתוח / מחסן מואר ונקי / שלט להשכרה",
    location: "ראש פינה",
    status: "זמין להשכרה",
    statusColor: "orange"
  }
];

const PostCard = ({ post }) => (
  <Card className={`border-r-4 ${post.statusColor === 'orange' ? 'border-orange-500' : 'border-gray-500'} border-orange-200`}>
    <CardContent className="p-4">
// ... keep existing code (card content before KPI)

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">יעד KPI:</span>
          <Badge variant="outline" className="border-orange-300 text-orange-700">{post.kpi}</Badge>
        </div>
        <div className="flex gap-2">
// ... keep existing code (buttons)
        </div>
      </div>
    </CardContent>
  </Card>
);

export function PropertiesManager() {
// ... keep existing code (rest of the component)
}
