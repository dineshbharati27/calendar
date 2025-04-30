import React from 'react';

const EventBadge = ({ event, onClick }) => {
  return (
    <div 
      className="text-xs mb-1 rounded-md px-2 py-1 truncate transition-all duration-200 hover:opacity-90 shadow-sm cursor-pointer"
      style={{ 
        backgroundColor: event.color, 
        color: '#fff',
        textShadow: '0 0 1px rgba(0,0,0,0.3)',
      }}
      title={`${event.title} (${event.startTime} - ${event.endTime})`}
      onClick={() => onClick(event)}
    >
      {event.title} | {event.startTime} - {event.endTime}
    </div>
  );
};

export default EventBadge;
