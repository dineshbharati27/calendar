import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import NewEventModal from './NewEventModal';
import { nextMonth, previousMonth } from '../utils/calendarHelpers';

const Calendar = ({ events, onAddEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date();

  const handlePrevMonth = () => setCurrentMonth(previousMonth(currentMonth));
  const handleNextMonth = () => setCurrentMonth(nextMonth(currentMonth));
  const handleMonthChange = (date) => setCurrentMonth(date);

  const handleAddEvent = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (eventData) => {
    if (onAddEvent) {
      const newEvent = {
        ...eventData,
        id: crypto.randomUUID(),
      };
      onAddEvent(newEvent);
    }
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100">
        <CalendarHeader 
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onMonthChange={handleMonthChange}
        />
        
        <CalendarGrid 
          currentMonth={currentMonth}
          today={today}
          events={events}
          onAddEvent={handleAddEvent}
        />
      </div>

      <NewEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        onSave={handleSaveEvent}
      />
    </div>
  );
};

export default Calendar;
