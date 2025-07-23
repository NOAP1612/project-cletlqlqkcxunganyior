import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

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

interface EditPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostType | null;
  onSave: (post: PostType) => void;
}

const EditPostDialog: React.FC<EditPostDialogProps> = ({ isOpen, onClose, post, onSave }) => {
  const [editingPost, setEditingPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (post) {
      setEditingPost({ ...post });
    }
  }, [post]);

  const handleSave = () => {
    if (editingPost) {
      onSave(editingPost);
    }
  };

  if (!editingPost) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl" dir="rtl">
        <DialogHeader>
          <DialogTitle>עריכת פוסט</DialogTitle>
        </DialogHeader>
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
            <Button variant="outline" onClick={onClose}>
              ביטול
            </Button>
            <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600">
              שמור שינויים
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostDialog;