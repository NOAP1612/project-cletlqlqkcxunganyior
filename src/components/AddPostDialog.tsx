import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Upload, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AddPostDialogProps {
  onAddPost: (post: any) => void
}

export function AddPostDialog({ onAddPost }: AddPostDialogProps) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [platform, setPlatform] = useState("")
  const [topic, setTopic] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !text || !platform || !topic || !date || !status) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      })
      return
    }

    const newPost = {
      id: Date.now(),
      title,
      text,
      platform,
      topic,
      date,
      status,
      statusColor: status === "טיוטה" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700",
      imageUrl: imageUrl || "/api/placeholder/400/300"
    }

    onAddPost(newPost)
    
    // Reset form
    setTitle("")
    setText("")
    setPlatform("")
    setTopic("")
    setDate("")
    setStatus("")
    setImageUrl("")
    setOpen(false)

    toast({
      title: "הצלחה!",
      description: "הפוסט נוסף בהצלחה למאגר התוכן"
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="w-4 h-4 ml-2" />
          פוסט חדש
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right text-xl font-bold text-orange-700">
            יצירת פוסט חדש
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-right font-medium">כותרת הפוסט *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="הכנס כותרת לפוסט..."
              className="text-right"
              required
            />
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <Label htmlFor="text" className="text-right font-medium">תוכן הפוסט *</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="כתוב את תוכן הפוסט כאן..."
              className="text-right min-h-[120px]"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-right font-medium">תמונה</Label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Label
                  htmlFor="image-upload"
                  className="flex items-center gap-2 px-4 py-2 border border-orange-200 rounded-md cursor-pointer hover:bg-orange-50"
                >
                  <Upload className="w-4 h-4" />
                  העלה תמונה
                </Label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="או הכנס קישור לתמונה..."
                  className="text-right flex-1"
                />
              </div>
              
              {imageUrl && (
                <Card className="relative">
                  <CardContent className="p-2">
                    <img
                      src={imageUrl}
                      alt="תצוגה מקדימה"
                      className="w-full h-48 object-cover rounded"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 left-2"
                      onClick={() => setImageUrl("")}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Platform, Topic, Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-right font-medium">פלטפורמה *</Label>
              <Select value={platform} onValueChange={setPlatform} required>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="בחר פלטפורמה" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Instagram / Facebook">Instagram / Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-right font-medium">נושא *</Label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="נושא הפוסט..."
                className="text-right"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-right font-medium">תאריך מתוכנן *</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-right"
                required
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label className="text-right font-medium">סטטוס *</Label>
            <Select value={status} onValueChange={setStatus} required>
              <SelectTrigger className="text-right">
                <SelectValue placeholder="בחר סטטוס" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="טיוטה">טיוטה</SelectItem>
                <SelectItem value="מתוכנן">מתוכנן</SelectItem>
                <SelectItem value="פורסם">פורסם</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              ביטול
            </Button>
            <Button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700"
            >
              שמור פוסט
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}