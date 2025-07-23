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
    { id: "2", title: "הלב הפועם של חיפה", date: "04.08.2025" }
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
                
                {/* ... keep existing code (welcome header, core actions, and latest activity sections) */}
              </div>

              {/* Right Column - At a Glance (1/3 width) */}
              <div className="space-y-6">
                
                {/* ... keep existing code (performance metrics section) */}

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