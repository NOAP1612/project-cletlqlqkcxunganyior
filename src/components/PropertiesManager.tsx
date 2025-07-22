import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Calendar, DollarSign, Users, Wrench, Camera } from "lucide-react"

const futurePosts = [
  {
    id: 1,
    title: "פליקאן גרופ בירוחם – השקעה בפריפריה עם ערך אמיתי.",
    content: "אנחנו שמחים להודיע על רכישת נכס חדש בירוחם, כחלק מהרחבת הפעילות שלנו בדרום. הנכס מצטרף לאסטרטגיה שלנו לחזק אזורים מתפתחים עם פוטנציאל נדל\"ן גבוה וקהילות חזקות.",
    hashtags: "#ירוחם #נדלןבדרום #השקעותנדלן #פליקאןגרופ #פיתוחפריפריה",
    cta: "רוצים לשמוע איך פליקאן מזהה הזדמנויות במקומות שאחרים מפספסים?",
    kpi: "חשיפה וחיזוק מיצוב כאסטרטגיים לטווח ארוך עם חזון חברתי-כלכלי.",
    image: "מבט מרחפן או צילום חזיתי של המבנה עם המדבר ברקע",
    location: "ירוחם",
    status: "פרויקט עתידי",
    statusColor: "blue"
  },
  {
    id: 2,
    title: "נכס נוסף לפורטפוליו של פליקאן – רח' הסתדרות 201, חיפה.",
    content: "הצפון מתעורר – ורחוב ההסתדרות הוא מרכז העסקים הבא. פליקאן רכשה נכס משרדים אסטרטגי בציר תנועה מרכזי, עם נגישות גבוהה ואפשרויות השבחה.",
    hashtags: "#חיפה #נדלןמסחרי #הסתדרות201 #פליקאןגרופ #משרדיםבצפון",
    cta: "מחפשים מיקום מעולה למשרד הבא שלכם? דברו איתנו.",
    kpi: "בידול באזור הצפון ויצירת לידים להשכרה עתידית.",
    image: "שוט של חזית הבניין עם כיתוב “הסתדרות 201” מודגש",
    location: "חיפה",
    status: "פרויקט עתידי",
    statusColor: "blue"
  }
];

const currentPosts = [
  {
    id: 3,
    title: "כשחברות צומחות – הן בוחרות פליקאן.",
    content: "חברת MSP70 התרחבה ועברה למתחם החדש שלנו בצחר האודם 2. בפליקאן אנחנו יודעים להתאים את החלל לצרכים של עסקים בצמיחה – עם תשתיות, שירות וליווי אישי.",
    hashtags: "#צחרהאודם #MSP70 #מעברעסקי #פליקאןגרופ #תעשיהבצפון",
    cta: "גם החברה שלכם מתרחבת? יש לנו את החלל המושלם בשבילכם.",
    kpi: "בניית אמון מול עסקים והצגת יכולת התאמה לצרכים תפעוליים.",
    image: "צוות MSP70 בכניסה למתחם החדש עם שילוט לוגו",
    location: "צחר האודם 2",
    status: "מושכר",
    statusColor: "purple"
  },
  {
    id: 4,
    title: "להשכרה עכשיו: ספיר 3, ראש פינה – אזור תעשייה צחר",
    content: "מחפשים מקום לעסק בצפון? הנכס החדש שלנו – 420 מ\"ר של חלל תעשייתי איכותי – מחכה לדייר הבא. תשתיות חדשות, נגישות מלאה, ליווי מקצועי של פליקאן.",
    hashtags: "#ראשפינה #להשכרה #נדלןתעשייתי #פליקאןגרופ #אזורצחר",
    cta: "שלחו לנו הודעה ונחזור אליכם עם כל הפרטים.",
    kpi: "לידים ישירים להשכרה.",
    image: "שטח פתוח / מחסן מואר ונקי / שלט \"להשכרה\"",
    location: "ראש פינה",
    status: "זמין להשכרה",
    statusColor: "green"
  }
];

const PostCard = ({ post }) => (
  <Card className={`border-r-4 border-${post.statusColor}-500`}>
    <CardContent className="p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{post.location}</span>
          </div>
        </div>
        <Badge 
          className={`bg-${post.statusColor}-100 text-${post.statusColor}-800 border-${post.statusColor}-200`}
        >
          {post.status}
        </Badge>
      </div>
      
      <p className="text-sm text-gray-700 mb-3">{post.content}</p>
      
      <div className="mb-4">
        <p className="text-xs text-gray-500">{post.hashtags}</p>
      </div>

      <div className="p-3 bg-gray-50 rounded-lg mb-4">
        <p className="text-sm font-medium text-gray-800">קריאה לפעולה:</p>
        <p className="text-sm text-gray-600">{post.cta}</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Camera className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium">ויז'ואל מומלץ:</span>
        <span className="text-sm text-gray-600">{post.image}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">יעד KPI:</span>
          <Badge variant="outline">{post.kpi}</Badge>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Wrench className="w-4 h-4 ml-1" />
            ערוך
          </Button>
          <Button size="sm">
            <Calendar className="w-4 h-4 ml-1" />
            תזמן פוסט
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export function PropertiesManager() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            ניהול פוסטים ותכנים - פליקאן גרופ
          </CardTitle>
          <CardDescription>
            רשימת הפוסטים המתוכננים והנוכחיים, מוכנים לפרסום
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pelican-navy">פוסטים נוכחיים</h3>
              <div className="grid gap-4">
                {currentPosts.map((post) => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pelican-navy">פוסטים עתידיים</h3>
              <div className="grid gap-4">
                {futurePosts.map((post) => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>סטטיסטיקות נכסים ותכנים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">זמין להשכרה</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">1</div>
              <div className="text-sm text-gray-600">מושכר</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">פרויקטים עתידיים</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <div className="text-sm text-gray-600">סה״כ פוסטים</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}