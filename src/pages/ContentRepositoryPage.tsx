import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ContentFilters from '@/components/ContentFilters';
import AddPostDialog from '@/components/AddPostDialog';
import EditPostDialog from '@/components/EditPostDialog';
import PostCard from '@/components/PostCard';
import { usePosts } from '@/hooks/usePosts';

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
  const { posts, isLoading, addPost, updatePost, deletePost } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostType | null>(null);

  const handleAddPost = async (newPost: any) => {
    const success = await addPost(newPost);
    return success;
  };

  const handleEditPost = (post: PostType) => {
    setEditingPost(post);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = async (post: PostType) => {
    const success = await updatePost(post);
    if (success) {
      setIsEditDialogOpen(false);
      setEditingPost(null);
    }
  };

  const handleDeletePost = async (postId: string) => {
    await deletePost(postId);
  };

  // Filter posts based on search and filters
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = !filterPlatform || filterPlatform === 'all' || post.platform === filterPlatform;
    const matchesStatus = !filterStatus || filterStatus === 'all' || post.status === filterStatus;
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  if (isLoading) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full" dir="rtl">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
              <SidebarTrigger className="-mr-1" />
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-orange-600">מאגר התוכן המרכזי</h1>
              </div>
            </header>
            <main className="flex-1 p-6">
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">טוען פוסטים...</p>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-orange-200 px-6">
            <SidebarTrigger className="-mr-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-orange-600">מאגר התוכן המרכזי</h1>
            </div>
          </header>
          
          <main className="flex-1 p-6 bg-gradient-to-br from-orange-50 to-white">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">מאגר התוכן המרכזי</h1>
                <p className="text-gray-600">ניהול מקיף של כל התוכן שלך במקום אחד</p>
              </div>

              {/* Controls */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <ContentFilters
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterPlatform={filterPlatform}
                    setFilterPlatform={setFilterPlatform}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                  />
                  <AddPostDialog onAddPost={handleAddPost} />
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
                    <PostCard
                      key={post.id}
                      post={post}
                      onEdit={handleEditPost}
                      onDelete={handleDeletePost}
                    />
                  ))
                )}
              </div>

              {/* Edit Dialog */}
              <EditPostDialog
                isOpen={isEditDialogOpen}
                onClose={() => {
                  setIsEditDialogOpen(false);
                  setEditingPost(null);
                }}
                post={editingPost}
                onSave={handleSaveEdit}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ContentRepositoryPage;