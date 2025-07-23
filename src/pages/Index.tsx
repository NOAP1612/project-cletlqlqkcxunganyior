import { useState } from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  LayoutGrid,
  CalendarDays,
  BarChart3,
  ArrowLeft,
  Edit,
  Plus
} from "lucide-react"
import EditScheduledPostDialog from "@/components/EditScheduledPostDialog"
import { toast } from "@/hooks/use-toast"

interface ScheduledPost {
  id: string;
  title: string;
  date: string;
}

const Index = () => {
  // State for scheduled posts
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([
    { id: "1", title: "ברוכים הבאים MSP70!", date: "28.07.2025" },
    { id: "2", title: "חיפה", date: "04.08.2025" }
  ]);
  
  // State for edit dialog
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<ScheduledPost | null>(null);

  // Handle edit post
  const handleEditPost = (post: ScheduledPost) => {
    setEditingPost(post);
    setIsEditDialogOpen(true);
  };

  // Handle save edit
  const handleSaveEdit = async (updatedPost: ScheduledPost): Promise<boolean> => {
    try {
      // Update the post in the local state
      setScheduledPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === updatedPost.id ? updatedPost : post
        )
      );
      
      toast({
        title: "הצלחה",
        description: "הפוסט עודכן בהצלחה"
      });
      
      return true;
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן לעדכן את הפוסט",
        variant: "destructive"
      });
      return false;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">מרכז הבקרה - פליקאן גרופ</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {/* Two Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Main Workspace (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Component 1: Welcome Header */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-orange-700 text-right">
                    ניהול סושיאל - פליקאן גרופ
                  </h1>
                  <p className="text-lg text-gray-600 text-right leading-relaxed">
                    ברוכים הבאים למרכז הבקרה של הרשתות החברתיות. נתחיל ליצור תוכן מנצח.
                  </p>
                </div>

                {/* Component 2: Core Actions */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-orange-700 text-right">פעולות מרכזיות</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/content-dashboard" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <LayoutGrid className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">לוח ניהול תוכן</h3>
                          <p className="text-sm text-gray-600">ניהול ויצירת תוכן למדיה חברתית</p>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/calendar" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <CalendarDays className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">לוח שנה (קלנדר)</h3>
                          <p className="text-sm text-gray-600">תכנון ותזמון פרסומים</p>
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 hover:border-orange-300 transition-colors cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <a href="/analytics" className="block">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                            <BarChart3 className="w-8 h-8 text-orange-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-orange-700 mb-2">ניתוח ביצועים (אנליטיקס)</h3>
                          <p className="text-sm text-gray-600">מדדי ביצוע ותובנות</p>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Component 3: Latest Activity Feed */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-orange-700 text-right">פיד פעילות אחרון</h2>
                  <div className="space-y-4">
                    
                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">מתוכנן</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">נוסף פוסט חדש ללוח התוכן</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          אכלוס חדש בראש פינה: חברת MSP70 עברה למתחם החדש שלנו.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">רעיון</Badge>
                        </div>
                        <CardTitle className="text-right text-lg">רעיון לפוסט חדש</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-right text-gray-700 leading-relaxed">
                          כתבה כלכלית על פער התשואות בין נדל"ן לוגיסטי למגורים. אפשר להפוך לאינפוגרפיקה.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Column - At a Glance (1/3 width) */}
              <div className="space-y-6">
                
                {/* Component 4: Performance Metrics */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 text-right">מדדי ביצוע</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">140</p>
                        <p className="text-sm text-gray-600">סה"כ עוקבים (פייסבוק)</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">10%</p>
                        <p className="text-sm text-gray-600">מעורבות החודש (Engagement)</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">0</p>
                        <p className="text-sm text-gray-600">פוסטים שפורסמו החודש</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <LayoutGrid className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Component 5: Upcoming Posts - Now Editable */}
                <Card className="border-orange-200">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-orange-700 text-right">פוסטים מתוכננים</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {scheduledPosts.map(post => (
                        <div key={post.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg group">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleEditPost(post)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <div className="text-right">
                            <p className="font-semibold text-orange-700">{post.title}</p>
                            <p className="text-sm text-gray-600">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => window.location.href = '/calendar'}
                    >
                      ללוח השנה המלא
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>

      {/* Edit Dialog */}
      <EditScheduledPostDialog
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setEditingPost(null);
        }}
        post={editingPost}
        onSave={handleSaveEdit}
      />
    </SidebarProvider>
  );
};

export default Index;