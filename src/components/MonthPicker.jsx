import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { format, setMonth, setYear } from 'date-fns';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthPicker = ({ currentMonth, onMonthChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState('right');
  const pickerRef = useRef(null);
  const currentYear = currentMonth.getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - 5 + i);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (pickerRef.current) {
        const rect = pickerRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
    
        if (viewportWidth < 640) {
          setPosition('center');
        } else if (rect.right > viewportWidth) {
          setPosition('left');
        } else {
          setPosition('right');
        }
      }
    };
    
    

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="relative" ref={pickerRef}>
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
        <div 
        className={`absolute top-full mt-1 bg-white rounded-lg shadow-xl border border-indigo-100 p-2 z-10 ${
          position === 'center' 
            ? 'left-1/2 -translate-x-1/2' 
            : position === 'right' 
              ? 'left-0' 
              : 'right-0'
        }`}
      
          style={{ minWidth: '320px', maxWidth: 'calc(100vw - 2rem)' }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs font-medium text-indigo-600">Month</div>
              <div className="h-[288px] overflow-y-auto pr-1 scrollbar-hide">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => handleMonthSelect(index)}
                    className={`w-full text-left px-2 py-1.5 text-sm rounded-md hover:bg-indigo-50 transition-colors duration-200 ${
                      currentMonth.getMonth() === index ? 'bg-indigo-50 text-indigo-600' : ''
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1 border-l border-indigo-100 pl-2">
              <div className="px-2 py-1 text-xs font-medium text-indigo-600">Year</div>
              <div className="h-[288px] overflow-y-auto pr-1 scrollbar-hide">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearSelect(year)}
                    className={`w-full text-left px-2 py-1.5 text-sm rounded-md hover:bg-indigo-50 transition-colors duration-200 ${
                      currentMonth.getFullYear() === year ? 'bg-indigo-50 text-indigo-600' : ''
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
