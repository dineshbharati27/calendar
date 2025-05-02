// import { CalendarEvent } from '../types';
import { addDays, format } from 'date-fns';

// Get today and next few days for sample events
const today = new Date();
const tomorrow = addDays(today, 1);
const dayAfterTomorrow = addDays(today, 2);
const nextWeek = addDays(today, 7);

export const events = [
  {
    id: '1',
    title: 'Team Meeting',
    date: format(today, 'yyyy-MM-dd'),
    startTime: '09:00',
    endTime: '10:30',
    color: '#4285F4'
  },
  {
    id: '2',
    title: 'Lunch with Client',
    date: format(today, 'yyyy-MM-dd'),
    startTime: '12:00',
    endTime: '13:30',
    color: '#0F9D58' 
  },
  {
    id: '3',
    title: 'Product Review',
    date: format(tomorrow, 'yyyy-MM-dd'),
    startTime: '14:00',
    endTime: '15:00',
    color: '#DB4437' 
  },
  {
    id: '4',
    title: 'Weekly Planning',
    date: format(tomorrow, 'yyyy-MM-dd'),
    startTime: '09:30',
    endTime: '11:00',
    color: '#F4B400'
  },
  {
    id: '5',
    title: 'Design Workshop',
    date: format(dayAfterTomorrow, 'yyyy-MM-dd'),
    startTime: '13:00',
    endTime: '16:00',
    color: '#4285F4'
  },
  {
    id: '6',
    title: 'Code Review',
    date: format(nextWeek, 'yyyy-MM-dd'),
    startTime: '10:00',
    endTime: '11:30',
    color: '#0F9D58'
  },
  {
    id: '7',
    title: 'Quarterly Review',
    date: format(nextWeek, 'yyyy-MM-dd'),
    startTime: '14:00',
    endTime: '16:00',
    color: '#DB4437'
  },
  {
    id: '8',
    title: 'my birthday',
    date: "2025-04-27",
    startTime: '14:00',
    endTime: '16:00',
    color: '#DB4437'
  },
  {
    id: '9',
    title: 'Aptitude Test',
    date: "2025-05-20",
    startTime: '14:00',
    endTime: '16:00',
    color: '#DB4437'
  }
];
