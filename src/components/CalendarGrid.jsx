import React from 'react';
import { getCalendarDays, getEventsForDay } from '../utils/calendarHelpers';
import DayCell from './DayCell';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarGrid = ({ currentMonth, today, events, onAddEvent }) => {
  const days = getCalendarDays(currentMonth);

  return (
    <div className="select-none">
      <div className="grid grid-cols-7 mb-1 bg-indigo-50/50">
        {DAYS_OF_WEEK.map((day) => (
          <div 
            key={day} 
            className="py-3 text-center text-sm font-semibold text-indigo-600"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 border-l border-t border-indigo-100">
        {days.map((day) => {
          const dayEvents = getEventsForDay(events, day);

          return (
            <DayCell 
              key={day.toString()} 
              day={day} 
              currentMonth={currentMonth} 
              today={today}
              events={dayEvents}
              onAddEvent={onAddEvent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
