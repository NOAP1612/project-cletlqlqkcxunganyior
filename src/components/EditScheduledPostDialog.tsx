import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface ScheduledPost {
  id: string;
  title: string;
  date: string;
}

interface EditScheduledPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  post: ScheduledPost | null;
  onSave: (post: ScheduledPost) => Promise<boolean>;
}

const EditScheduledPostDialog = ({ isOpen, onClose, post, onSave }: EditScheduledPostDialogProps) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when dialog opens with new post
  React.useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDate(post.date);
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: "שגיאה",
        description: "אנא הזן כותרת לפוסט",
        variant: "destructive"
      });
      return;
    }

    if (!post) return;

    setIsSubmitting(true);
    
    try {
      const success = await onSave({
        id: post.id,
        title,
        date
      });
      
      if (success) {
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right">עריכת פוסט מתוכנן</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-right block">כותרת</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="הזן כותרת לפוסט"
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="text-right block">תאריך</Label>
            <Input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="DD.MM.YYYY"
              className="text-right"
            />
          </div>
          <DialogFooter className="flex justify-start">
            <Button type="button" variant="outline" onClick={onClose} className="ml-2">
              ביטול
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'שומר...' : 'שמור'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditScheduledPostDialog;