import React from 'react';
import { Edit, Trash2, Calendar, Tag, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface PostCardProps {
  post: PostType;
  onEdit: (post: PostType) => void;
  onDelete: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
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

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
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
              onClick={() => onEdit(post)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(post.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;