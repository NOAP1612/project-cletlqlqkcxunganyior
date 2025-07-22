import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Calendar, DollarSign, Users, Wrench } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "נכס ברחוב",
    type: "תעשיה / עמקי",
    location: "רכישת נכס ברחוב",
    status: "זמין להשכרה",
    area: "תמונה + טקסט",
    price: "עקבו לעדכונים נוספים",
    kpi: "חשיפה ומיצוב בפיד",
    statusColor: "green"
  },
  {
    id: 2,
    name: "נכס פנוי - ספיר 3, ראש פינה",
    type: "שיווקי",
    location: "ראש פינה",
    status: "בתהליך השבחה",
    area: "תמונה + טקסט",
    price: "שלחו הודעה לפרטים נוספים",
    kpi: "לידים להשכרה",
    statusColor: "yellow"
  },
  {
    id: 3,
    name: "התחדרות 201, חיפה",
    type: "עדכון/עמקי",
    location: "חיפה",
    status: "מושכר",
    area: "תמונה + טקסט",
    price: "צו קבע לפרטים על הנכס",
    kpi: "לידים עתידיים",
    statusColor: "blue"
  },
  {
    id: 4,
    name: "MSP70 עברו לתחתם צהר 2 האדום",
    type: "ערכי / ערכי",
    location: "הענקם שלכם צומח דבר איתנו",
    status: "בבעלות",
    area: "תמונות לקוח + טקסט",
    price: "MSP70 עברו לתחתם צהר 2 האדום",
    kpi: "חיזוק אמינות חול עסקים",
    statusColor: "purple"
  },
  {
    id: 5,
    name: "מאחורי הקלעים באתר ברחוב",
    type: "ויזואלי / קליל",
    location: "עקבו להצגת ראשונה לפרויקט הבא",
    status: "בפיתוח",
    area: "וידאו קצר / ריכס",
    price: "מאחורי הקלעים באתר ברחוב",
    kpi: "מעורבות גבוהה",
    statusColor: "orange"
  },
  {
    id: 6,
    name: "ערך שבועי מחזון של פליקאן",
    type: "רפלקטיבי / ערכי",
    location: "שתפו איתנו כמה הערך הזה עובדכם",
    status: "פעיל",
    area: "ציטוט + גרפיקה",
    price: "ערך שבועי מחזון של פליקאן",
    kpi: "חיבור רגשי לנותח",
    statusColor: "pink"
  }
]

export function PropertiesManager() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            ניהול נכסים - פליקאן גרופ
          </CardTitle>
          <CardDescription>
            רשימת הנכסים הפעילים ומצבם הנוכחי לצורך יצירת תוכן
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {properties.map((property) => (
              <Card key={property.id} className="border-r-4 border-r-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{property.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{property.location}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={property.statusColor === 'green' ? 'default' : 'secondary'}
                      className={`${
                        property.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                        property.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                        property.statusColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                        property.statusColor === 'purple' ? 'bg-purple-100 text-purple-800' :
                        property.statusColor === 'orange' ? 'bg-orange-100 text-orange-800' :
                        'bg-pink-100 text-pink-800'
                      }`}
                    >
                      {property.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">סוג נכס</p>
                      <p className="text-sm">{property.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">פורמט תוכן</p>
                      <p className="text-sm">{property.area}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">קריאה לפעולה</p>
                      <p className="text-sm">{property.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">יעד KPI:</span>
                      <Badge variant="outline">{property.kpi}</Badge>
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
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>סטטיסטיקות נכסים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">זמינים להשכרה</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">מושכרים</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">בשיפוץ</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">סה״כ נכסים</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}