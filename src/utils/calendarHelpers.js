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
  