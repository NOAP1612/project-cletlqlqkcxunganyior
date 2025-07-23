import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddPostDialogProps {
  onAddPost: (post: any) => void;
}

const AddPostDialog: React.FC<AddPostDialogProps> = ({ onAddPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
    platform: '',
    topic: '',
    scheduledDate: '',
    status: 'טיוטה',
    imageUrl: ''
  });

  const handleSubmit = () => {
    onAddPost(newPost);
    setNewPost({
      title: '',
      text: '',
      platform: '',
      topic: '',
      scheduledDate: '',
      status: 'טיוטה',
      imageUrl: ''
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              ביטול
            </Button>
            <Button onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-600">
              הוסף פוסט
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostDialog;