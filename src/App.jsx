import React, { useState } from 'react';
import Calendar from './components/Calendar';
import { events as initialEvents } from './data/events';

function App() {
  const [events, setEvents] = useState(initialEvents);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm py-6 px-4 border-b border-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            React Calendar
          </h1>
        </div>
      </header>
      
      <main className="py-8">
        <Calendar events={events} onAddEvent={handleAddEvent} />
      </main>
    </div>
  );
}

export default App;
