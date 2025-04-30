import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    format
  } from 'date-fns';
  
  // Get all days to display in a month view (including days from previous/next months to fill the grid)
  export const getCalendarDays = (currentMonth) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);
  
    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  };
  
  // Get events for a specific day
  export const getEventsForDay = (events, day) => {
    const dayStr = format(day, 'yyyy-MM-dd');
    return events.filter(event => event.date === dayStr);
  };
  
  // Check if two events overlap
  export const doEventsOverlap = (event1, event2) => {
    if (event1.date !== event2.date) return false;

    const [start1, end1] = [event1.startTime, event1.endTime].map(time => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    });

    const [start2, end2] = [event2.startTime, event2.endTime].map(time => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    });

    return (start1 < end2 && end1 > start2);
  };
  
  // Check for overlapping events in a list
  export const hasOverlappingEvents = (events) => {
    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        if (doEventsOverlap(events[i], events[j])) {
          return true;
        }
      }
    }
    return false;
  };
  
  // Format date for display
  export const formatDateForDisplay = (date) => {
    return format(date, 'MMMM yyyy');
  };
  
  // Check if a date is today
  export const isToday = (day, today) => {
    return isSameDay(day, today);
  };
  
  // Check if a date is in the current month
  export const isCurrentMonth = (day, currentMonth) => {
    return isSameMonth(day, currentMonth);
  };
  
  // Navigate to next month
  export const nextMonth = (currentMonth) => {
    return addMonths(currentMonth, 1);
  };
  
  // Navigate to previous month
  export const previousMonth = (currentMonth) => {
    return subMonths(currentMonth, 1);
  };
  
  // Get day of month
  export const getDayOfMonth = (day) => {
    return day.getDate();
  };
  