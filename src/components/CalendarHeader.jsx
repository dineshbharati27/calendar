import React from 'react';
import { formatDateForDisplay } from '../utils/calendarHelpers';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MonthPicker from './MonthPicker';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth, onMonthChange }) => {
  const formattedDate = formatDateForDisplay(currentMonth);

  return (
    <div className="flex items-center justify-between p-4 border-b border-indigo-100 bg-white">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">{formattedDate}</h2>
        <MonthPicker currentMonth={currentMonth} onMonthChange={onMonthChange} />
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={onPrevMonth}
          className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200"
          aria-label="Previous month"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button 
          onClick={onNextMonth}
          className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200"
          aria-label="Next month"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
