import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { format, setMonth, setYear } from 'date-fns';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthPicker = ({ currentMonth, onMonthChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = currentMonth.getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);

  const handleMonthSelect = (monthIndex) => {
    const newDate = setMonth(currentMonth, monthIndex);
    onMonthChange(newDate);
    setIsOpen(false);
  };

  const handleYearSelect = (year) => {
    const newDate = setYear(currentMonth, year);
    onMonthChange(newDate);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
      >
        <span className="text-sm font-medium text-gray-600">
          {format(currentMonth, 'MMMM yyyy')}
        </span>
        <ChevronDown size={16} className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-indigo-100 p-2 z-10">
          <div className="grid grid-cols-2 gap-2" style={{ minWidth: '320px' }}>
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-indigo-600">Month</div>
              {MONTHS.map((month, index) => (
                <button
                  key={month}
                  onClick={() => handleMonthSelect(index)}
                  className="w-full text-left px-2 py-1.5 text-sm rounded-md hover:bg-indigo-50 transition-colors duration-200"
                >
                  {month}
                </button>
              ))}
            </div>
            <div className="space-y-1 border-l border-indigo-100 pl-2">
              <div className="px-2 py-1 text-xs font-medium text-indigo-600">Year</div>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="w-full text-left px-2 py-1.5 text-sm rounded-md hover:bg-indigo-50 transition-colors duration-200"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
