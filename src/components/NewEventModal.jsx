import React, { useState } from 'react';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import { doEventsOverlap } from '../utils/calendarHelpers';

const COLORS = [
  '#4285F4', // Google Blue
  '#0F9D58', // Google Green
  '#DB4437', // Google Red
  '#F4B400', // Google Yellow
];

const NewEventModal = ({ isOpen, onClose, selectedDate, onSave, existingEvents, onDeleteEvent }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [color, setColor] = useState(COLORS[0]);
  const [error, setError] = useState('');
  const [overlappingEvent, setOverlappingEvent] = useState(null);

  if (!isOpen || !selectedDate) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setOverlappingEvent(null);

    if (endTime <= startTime) {
      setError('End time must be after start time.');
      return;
    }

    const newEvent = {
      title,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime,
      endTime,
      color,
    };

    // Check for overlapping events
    const dayEvents = existingEvents.filter(event => event.date === newEvent.date);
    const overlapping = dayEvents.find(event => doEventsOverlap(event, newEvent));

    if (overlapping) {
      setOverlappingEvent(overlapping);
      return;
    }

    onSave(newEvent);
    resetForm();
    onClose();
  };

  const handleReplaceEvent = () => {
    if (overlappingEvent) {
      onDeleteEvent(overlappingEvent.id);
      const newEvent = {
        title,
        date: format(selectedDate, 'yyyy-MM-dd'),
        startTime,
        endTime,
        color,
      };
      onSave(newEvent);
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setTitle('');
    setStartTime('09:00');
    setEndTime('10:00');
    setColor(COLORS[0]);
    setError('');
    setOverlappingEvent(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md scale-100 animate-[scale-in_0.15s_ease-in-out]">
        <div className="flex items-center justify-between p-4 border-b border-indigo-100">
          <h2 className="text-xl font-semibold text-gray-800">New Event</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-indigo-50 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {error}
            </div>
          )}

          {overlappingEvent && (
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-medium mb-2">
                Event Overlap Detected
              </p>
              <p className="text-yellow-700 text-sm mb-4">
                This time slot overlaps with an existing event: "{overlappingEvent.title}"
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOverlappingEvent(null)}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleReplaceEvent}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors duration-200"
                >
                  Replace Event
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-200"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <div className="flex gap-3">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`
                    w-8 h-8 rounded-full transition-all duration-200
                    hover:scale-110 hover:shadow-lg
                    ${color === c ? 'ring-2 ring-offset-2 ring-indigo-500 scale-110' : ''}
                  `}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEventModal;
