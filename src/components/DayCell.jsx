import React from 'react';
import { getDayOfMonth, isCurrentMonth, isToday } from '../utils/calendarHelpers';
import EventBadge from './EventBadge';
import { Plus } from 'lucide-react';

const DayCell = ({ day, currentMonth, today, events, onAddEvent }) => {
  const dayNumber = getDayOfMonth(day);
  const isInCurrentMonth = isCurrentMonth(day, currentMonth);
  const isTodayDate = isToday(day, today);

  return (
    <div 
      className={`
        relative group transition-colors duration-200
        border-r border-b border-indigo-100 min-h-[120px]
        ${isInCurrentMonth ? 'bg-white hover:bg-indigo-50/50' : 'bg-gray-50'}
      `}
    >
      <div className="flex justify-between items-start p-2">
        <div 
          className={`
            h-8 w-8 flex items-center justify-center rounded-full text-sm
            transition-all duration-200 font-medium
            ${isTodayDate 
              ? 'bg-indigo-600 text-white shadow-md' 
              : isInCurrentMonth 
                ? 'text-gray-800' 
                : 'text-gray-400'
            }
          `}
        >
          {dayNumber}
        </div>
        <button
          onClick={() => onAddEvent(day)}
          className={`
            opacity-0 group-hover:opacity-100 p-1.5 
            hover:bg-indigo-100 rounded-full 
            transition-all duration-200 ease-in-out
          `}
          aria-label="Add event"
        >
          <Plus size={16} className="text-indigo-600" />
        </button>
      </div>

      <div className="px-1 space-y-1 overflow-y-auto" style={{ maxHeight: '80px' }}>
        {events.map((event) => (
          <EventBadge key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DayCell;
