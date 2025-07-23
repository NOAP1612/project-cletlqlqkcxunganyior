import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Calendar, Tag, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Post } from '@/entities';

interface PostType {
  id: string;
  title: string;
  text: string;
  platform: string;
  topic: string;
  scheduledDate: string;
  status: string;
  imageUrl?: string;
  created_at?: string;
  updated_at?: string;
}

const ContentRepositoryPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // New post form state
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
    platform: '',
    topic: '',
    scheduledDate: '',
    status: 'טיוטה',
    imageUrl: ''
  });

  // Load posts from database on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const postsData = await Post.list('-updated_at', 100);
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading posts:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן לטעון את הפוסטים",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPost = async () => {
    if (!newPost.title || !newPost.text || !newPost.platform) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }

    try {
      const createdPost = await Post.create(newPost);
      await loadPosts(); // Refresh the list
      setNewPost({
        title: '',
        text: '',
        platform: '',
        topic: '',
        scheduledDate: '',
        status: 'טיוטה',
        imageUrl: ''
      });
      setIsAddDialogOpen(false);
      toast({
        title: "הצלחה",
        description: "הפוסט נוסף בהצלחה"
      });
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן להוסיף את הפוסט",
        variant: "destructive"
      });
    }
  };

  const handleEditPost = (post: PostType) => {
    setEditingPost(post);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!editingPost) return;

    try {
      await Post.update(editingPost.id, {
        title: editingPost.title,
        text: editingPost.text,
        platform: editingPost.platform,
        topic: editingPost.topic,
        scheduledDate: editingPost.scheduledDate,
        status: editingPost.status,
        imageUrl: editingPost.imageUrl
      });
      await loadPosts(); // Refresh the list
      setIsEditDialogOpen(false);
      setEditingPost(null);
      toast({
        title: "הצלחה",
        description: "הפוסט עודכן בהצלחה"
      });
    } catch (error) {
      console.error('Error updating post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן לעדכן את הפוסט",
        variant: "destructive"
      });
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) return;

    try {
      await Post.delete(postId);
      await loadPosts(); // Refresh the list
      toast({
        title: "הצלחה",
        description: "הפוסט נמחק בהצלחה"
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן למחוק את הפוסט",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'פורסם': return 'bg-green-100 text-green-700';
      case 'מתוכנן': return 'bg-blue-100 text-blue-700';
      case 'טיוטה': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPlatformIcon = (platform: string) => {
    return <Globe className="w-4 h-4" />;
  };

  // Filter posts based on search and filters
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = !filterPlatform || post.platform === filterPlatform;
    const matchesStatus = !filterStatus || post.status === filterStatus;
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">טוען פוסטים...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">מאגר התוכן המרכזי</h1>
          <p className="text-gray-600">ניהול מקיף של כל התוכן שלך במקום אחד</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="חיפוש פוסטים..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
              
              <Select value={filterPlatform} onValueChange={setFilterPlatform}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="פלטפורמה" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">כל הפלטפורמות</SelectItem>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="סטטוס" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">כל הסטטוסים</SelectItem>
                  <SelectItem value="פורסם">פורסם</SelectItem>
                  <SelectItem value="מתוכנן">מתוכנן</SelectItem>
                  <SelectItem value="טיוטה">טיוטה</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Plus className="w-4 h-4 ml-2" />
                  הוסף פוסט חדש
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl" dir="rtl">
                <DialogHeader>
                  <DialogTitle>הוסף פוסט חדש</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">כותרת הפוסט</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="הכנס כותרת..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="text">תוכן הפוסט</Label>
                    <Textarea
                      id="text"
                      value={newPost.text}
                      onChange={(e) => setNewPost({...newPost, text: e.target.value})}
                      placeholder="הכנס את תוכן הפוסט..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="platform">פלטפורמה</Label>
                      <Select value={newPost.platform} onValueChange={(value) => setNewPost({...newPost, platform: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="בחר פלטפורמה" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Facebook">Facebook</SelectItem>
                          <SelectItem value="Instagram">Instagram</SelectItem>
                          <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                          <SelectItem value="Twitter">Twitter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="topic">נושא</Label>
                      <Input
                        id="topic"
                        value={newPost.topic}
                        onChange={(e) => setNewPost({...newPost, topic: e.target.value})}
                        placeholder="נושא הפוסט..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="scheduledDate">תאריך מתוכנן</Label>
                      <Input
                        id="scheduledDate"
                        type="date"
                        value={newPost.scheduledDate}
                        onChange={(e) => setNewPost({...newPost, scheduledDate: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="status">סטטוס</Label>
                      <Select value={newPost.status} onValueChange={(value) => setNewPost({...newPost, status: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="טיוטה">טיוטה</SelectItem>
                          <SelectItem value="מתוכנן">מתוכנן</SelectItem>
                          <SelectItem value="פורסם">פורסם</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="imageUrl">קישור לתמונה (אופציונלי)</Label>
                    <Input
                      id="imageUrl"
                      value={newPost.imageUrl}
                      onChange={(e) => setNewPost({...newPost, imageUrl: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      ביטול
                    </Button>
                    <Button onClick={handleAddPost} className="bg-orange-500 hover:bg-orange-600">
                      הוסף פוסט
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
              <p className="text-gray-500 text-lg">לא נמצאו פוסטים</p>
              <p className="text-gray-400 mt-2">נסה לשנות את מונחי החיפוש או הוסף פוסט חדש</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.text}</p>
                    </div>
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt="תמונת פוסט" 
                        className="w-20 h-20 object-cover rounded-lg mr-4 flex-shrink-0"
                      />
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      {getPlatformIcon(post.platform)}
                      <span>{post.platform}</span>
                    </div>
                    
                    {post.topic && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Tag className="w-4 h-4" />
                        <span>{post.topic}</span>
                      </div>
                    )}
                    
                    {post.scheduledDate && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.scheduledDate).toLocaleDateString('he-IL')}</span>
                      </div>
                    )}
                    
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      עודכן: {new Date(post.updated_at || post.created_at || '').toLocaleDateString('he-IL')}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditPost(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl" dir="rtl">
            <DialogHeader>
              <DialogTitle>עריכת פוסט</DialogTitle>
            </DialogHeader>
            {editingPost && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-title">כותרת הפוסט</Label>
                  <Input
                    id="edit-title"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="edit-text">תוכן הפוסט</Label>
                  <Textarea
                    id="edit-text"
                    value={editingPost.text}
                    onChange={(e) => setEditingPost({...editingPost, text: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-platform">פלטפורמה</Label>
                    <Select value={editingPost.platform} onValueChange={(value) => setEditingPost({...editingPost, platform: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        <SelectItem value="Twitter">Twitter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="edit-topic">נושא</Label>
                    <Input
                      id="edit-topic"
                      value={editingPost.topic}
                      onChange={(e) => setEditingPost({...editingPost, topic: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-scheduledDate">תאריך מתוכנן</Label>
                    <Input
                      id="edit-scheduledDate"
                      type="date"
                      value={editingPost.scheduledDate}
                      onChange={(e) => setEditingPost({...editingPost, scheduledDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="edit-status">סטטוס</Label>
                    <Select value={editingPost.status} onValueChange={(value) => setEditingPost({...editingPost, status: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="טיוטה">טיוטה</SelectItem>
                        <SelectItem value="מתוכנן">מתוכנן</SelectItem>
                        <SelectItem value="פורסם">פורסם</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="edit-imageUrl">קישור לתמונה</Label>
                  <Input
                    id="edit-imageUrl"
                    value={editingPost.imageUrl || ''}
                    onChange={(e) => setEditingPost({...editingPost, imageUrl: e.target.value})}
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    ביטול
                  </Button>
                  <Button onClick={handleSaveEdit} className="bg-orange-500 hover:bg-orange-600">
                    שמור שינויים
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ContentRepositoryPage;