import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Upload, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { uploadFile } from "@/integrations/core"

interface Post {
  id: number
  title: string
  text: string
  platform: string
  topic: string
  date: string
  status: string
  statusColor: string
  imageUrl?: string
}

interface EditPostDialogProps {
  post: Post
  onEditPost: (postId: number, updatedPost: Partial<Post>) => void
}

export const EditPostDialog = ({ post, onEditPost }: EditPostDialogProps) => {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  
  const [formData, setFormData] = useState({
    title: post.title,
    text: post.text,
    platform: post.platform,
    topic: post.topic,
    date: post.date,
    status: post.status,
    imageUrl: post.imageUrl || ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleStatusChange = (status: string) => {
    const statusColor = status === "טיוטה" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
    setFormData(prev => ({ ...prev, status, statusColor }))
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast({
        title: "שגיאה",
        description: "אנא בחר קובץ תמונה בלבד",
        variant: "destructive"
      })
      return
    }

    setIsUploading(true)
    try {
      const { file_url } = await uploadFile({ file })
      setFormData(prev => ({ ...prev, imageUrl: file_url }))
      toast({
        title: "הועלה בהצלחה",
        description: "התמונה הועלתה למערכת"
      })
    } catch (error) {
      toast({
        title: "שגיאה בהעלאה",
        description: "לא ניתן להעלות את התמונה",
        variant: "destructive"
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: "" }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.text.trim()) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      })
      return
    }

    const statusColor = formData.status === "טיוטה" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
    
    onEditPost(post.id, {
      ...formData,
      statusColor
    })
    
    toast({
      title: "עודכן בהצלחה",
      description: "הפוסט עודכן במאגר התוכן"
    })
    
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 hover:bg-orange-50">
          <Edit className="w-4 h-4 ml-2" />
          ערוך
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right text-orange-700">עריכת פוסט</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-right">כותרת הפוסט *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="הכנס כותרת לפוסט"
              className="text-right"
              required
            />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <Label htmlFor="text" className="text-right">תוכן הפוסט *</Label>
            <Textarea
              id="text"
              value={formData.text}
              onChange={(e) => handleInputChange("text", e.target.value)}
              placeholder="הכנס את תוכן הפוסט"
              className="min-h-32 text-right"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-right">תמונה</Label>
            <div className="space-y-4">
              {formData.imageUrl && (
                <div className="relative">
                  <img
                    src={formData.imageUrl}
                    alt="תמונת הפוסט"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={handleRemoveImage}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  disabled={isUploading}
                />
                <Label
                  htmlFor="image-upload"
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  {isUploading ? "מעלה..." : "העלה תמונה"}
                </Label>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-2">
            <Label className="text-right">פלטפורמה</Label>
            <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
              <SelectTrigger className="text-right">
                <SelectValue placeholder="בחר פלטפורמה" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Instagram / Facebook">Instagram / Facebook</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-right">נושא</Label>
            <Input
              id="topic"
              value={formData.topic}
              onChange={(e) => handleInputChange("topic", e.target.value)}
              placeholder="נושא הפוסט"
              className="text-right"
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-right">תאריך מתוכנן</Label>
            <Input
              id="date"
              type="date"
              value={formData.date.split('/').reverse().join('-')}
              onChange={(e) => {
                const dateValue = e.target.value
                const formattedDate = dateValue.split('-').reverse().join('/')
                handleInputChange("date", formattedDate)
              }}
              className="text-right"
            />
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label className="text-right">סטטוס</Label>
            <Select value={formData.status} onValueChange={handleStatusChange}>
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
          <div className="flex gap-2 justify-start pt-4">
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
              שמור שינויים
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              ביטול
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}