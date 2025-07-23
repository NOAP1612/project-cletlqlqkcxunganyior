import { useState, useEffect } from 'react';
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

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const addPost = async (newPost: Omit<PostType, 'id' | 'created_at' | 'updated_at'>) => {
    if (!newPost.title || !newPost.text || !newPost.platform) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return false;
    }

    try {
      await Post.create(newPost);
      await loadPosts();
      toast({
        title: "הצלחה",
        description: "הפוסט נוסף בהצלחה"
      });
      return true;
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן להוסיף את הפוסט",
        variant: "destructive"
      });
      return false;
    }
  };

  const updatePost = async (post: PostType) => {
    try {
      await Post.update(post.id, {
        title: post.title,
        text: post.text,
        platform: post.platform,
        topic: post.topic,
        scheduledDate: post.scheduledDate,
        status: post.status,
        imageUrl: post.imageUrl
      });
      await loadPosts();
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

  const deletePost = async (postId: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) return false;

    try {
      await Post.delete(postId);
      await loadPosts();
      toast({
        title: "הצלחה",
        description: "הפוסט נמחק בהצלחה"
      });
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "שגיאה",
        description: "לא ניתן למחוק את הפוסט",
        variant: "destructive"
      });
      return false;
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return {
    posts,
    isLoading,
    loadPosts,
    addPost,
    updatePost,
    deletePost
  };
};