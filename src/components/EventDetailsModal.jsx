import React from 'react';
import { format } from 'date-fns';
import { X, Trash2, Clock, Calendar } from 'lucide-react';

const EventDetailsModal = ({ event, onClose, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event.id);
    }
  };

  const handleClose = (e) => {
    // Only close if clicking the close button or the backdrop
    if (e.target === e.currentTarget || e.target.closest('button')) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md scale-100 animate-[scale-in_0.15s_ease-in-out]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-indigo-100">
          <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-indigo-50 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Calendar size={20} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p className="text-gray-800">
                {format(new Date(event.date), 'EEEE, MMMM d, yyyy')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Clock size={20} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Time</p>
              <p className="text-gray-800">
                {event.startTime} - {event.endTime}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <div 
                className="w-5 h-5 rounded-full" 
                style={{ backgroundColor: event.color }}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Color</p>
              <p className="text-gray-800">
                {event.color}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t border-indigo-100">
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
          >
            <Trash2 size={16} />
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
