import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContentFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterPlatform: string;
  setFilterPlatform: (platform: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

const ContentFilters: React.FC<ContentFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterPlatform,
  setFilterPlatform,
  filterStatus,
  setFilterStatus
}) => {
  return (
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
  );
};

export default ContentFilters;