import { useState } from "react"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Archive, Edit, Trash2, Calendar, Target, Building, Image as ImageIcon } from "lucide-react"
import { AddPostDialog } from "@/components/AddPostDialog"
import { useToast } from "@/hooks/use-toast"

const ContentRepositoryPage = () => {
  const { toast } = useToast()
  
  const [contentPosts, setContentPosts] = useState([
    {
      id: 1,
      title: "זרקור על נכס: חיפה",
      text: "מתחם התעשייה שלנו בהסתדרות, חיפה, מציע 15,000 מ\"ר של שטחי תעשייה ולוגיסטיקה במיקום אסטרטגי. המקום מציע נגישות גבוהה וסביבה עסקית תומכת. לפרטים נוספים ותיאום סיור, פנו אלינו.",
      platform: "Facebook",
      topic: "נכס בחיפה",
      date: "06/08/2025",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "על חיבורים ועסקים",
      text: "הצלחה עסקית בנויה על חיבורים נכונים. גם בנדל\"ן. ט\"ו באב הוא תזכורת לחשיבות של בחירת השותפים הנכונים למסע, והמיקום הנכון לצמיחה.",
      platform: "Instagram",
      topic: "תדמית",
      date: "11/08/2025",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "לקוח חדש: MSP70",
      text: "אנו מברכים את חברת MSP70 על הצטרפותה לנכס שלנו באזור התעשייה 'צחר', ראש פינה. החברה, שמתמחה בפתרונות טכנולוגיים, התרחבה לאחרונה למשרדים החדשים. מאחלים להם הצלחה.",
      platform: "Facebook",
      topic: "חדשות החברה",
      date: "19/08/2025",
      status: "מתוכנן",
      statusColor: "bg-green-100 text-green-700",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "לוגיסטיקה במספרים: התשואה האמיתית",
      text: "התשואה על נדל\"ן לוגיסטי בישראל מגיעה עד 9.5%, לעומת כ-3% במגורים. נתונים מהשטח שמראים מדוע זהו אפיק ההשקעה המרכזי כיום. #נדלןמניב #השקעות #כלכלה",
      platform: "Instagram / Facebook",
      topic: "נתוני שוק",
      date: "14/08/2025",
      status: "טיוטה",
      statusColor: "bg-blue-100 text-blue-700",
      imageUrl: "/api/placeholder/400/300"
    }
  ]);

  const handleAddPost = (newPost: any) => {
    setContentPosts(prev => [newPost, ...prev])
  }

  const handleDeletePost = (postId: number) => {
    setContentPosts(prev => prev.filter(post => post.id !== postId))
    toast({
      title: "נמחק בהצלחה",
      description: "הפוסט נמחק מהמאגר"
    })
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <Archive className="w-5 h-5 text-orange-600" />
              <h1 className="text-xl font-bold text-orange-600">מאגר תוכן</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-orange-700 text-right mb-4">
                    מאגר התוכן המרכזי
                  </h1>
                  <p className="text-gray-600 text-right text-lg">
                    ניהול מרכזי של כל התוכן והפוסטים לרשתות החברתיות
                  </p>
                </div>
                <AddPostDialog onAddPost={handleAddPost} />
              </div>

              {/* Content Cards Grid */}
              <div className="grid gap-6">
                {contentPosts.map((post) => (
                  <Card key={post.id} className="border-orange-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`${post.statusColor}`}
                          >
                            {post.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-orange-700 text-right flex-1">
                          {post.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Post Image */}
                      {post.imageUrl && (
                        <div className="relative">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-64 object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/api/placeholder/400/300";
                            }}
                          />
                          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2">
                            <ImageIcon className="w-4 h-4 text-orange-600" />
                          </div>
                        </div>
                      )}
                      
                      {/* Post Text */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800 text-right leading-relaxed">
                          {post.text}
                        </p>
                      </div>
                      
                      {/* Post Metadata */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-sm text-gray-600">פלטפורמה:</span>
                          <Target className="w-4 h-4 text-orange-600" />
                          <span className="font-medium text-gray-800">{post.platform}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-sm text-gray-600">נושא:</span>
                          <Building className="w-4 h-4 text-orange-600" />
                          <span className="font-medium text-gray-800">{post.topic}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-sm text-gray-600">תאריך מתוכנן:</span>
                          <Calendar className="w-4 h-4 text-orange-600" />
                          <span className="font-medium text-gray-800">{post.date}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 justify-start pt-4">
                        <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                          <Edit className="w-4 h-4 ml-2" />
                          ערוך
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="w-4 h-4 ml-2" />
                          מחק
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-700">{contentPosts.length}</div>
                    <div className="text-sm text-orange-600">סה"כ פוסטים</div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">
                      {contentPosts.filter(post => post.status === "טיוטה").length}
                    </div>
                    <div className="text-sm text-blue-600">טיוטות</div>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-700">
                      {contentPosts.filter(post => post.status === "מתוכנן").length}
                    </div>
                    <div className="text-sm text-green-600">מתוכננים</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ContentRepositoryPage;