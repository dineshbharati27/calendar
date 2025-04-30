import React from 'react';

const EventBadge = ({ event }) => {
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'pm' : 'am';
    const hour12 = hour % 12 || 12;
    return `${hour12}${minutes !== '00' ? ':' + minutes : ''} ${ampm}`;
  };

  return (
    <div 
      className="text-xs mb-1 rounded-md px-2 py-1 truncate transition-all duration-200 hover:opacity-90 shadow-sm"
      style={{ 
        backgroundColor: event.color, 
        color: '#fff',
        textShadow: '0 0 1px rgba(0,0,0,0.3)',
      }}
      title={`${event.title} (${formatTime(event.startTime)} - ${formatTime(event.endTime)})`}
    >
      {formatTime(event.startTime)} {event.title}
    </div>
  );
};

export default EventBadge;
