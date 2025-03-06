import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import useTheme from '../contexts/theme';
import { da } from 'date-fns/locale';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [reminders, setReminders] = useState([]);
  const [event, setEvent] = useState('');
  const { theme } = useTheme();

  const cryptoEvents = [
    { date: '2025-03-10', event: 'Bitcoin Halving' },
    { date: '2025-03-15', event: 'ICO Launch: XYZ Token' },
    { date: '2025-03-20', event: 'Airdrop Claim Period' },
  ];

  const handleDateChange = (newDate) => setDate(newDate);

  const addReminder = () => {
    if (event) {
      const newReminder = {
        date: format(date, 'yyyy-MM-dd'),
        event,
      };
      setReminders((prev) => [...prev, newReminder]);
      setEvent('');
    }
  };

  const removeReminder = (index) => {
    setReminders((prev) => prev.filter((_, i) => i !== index));
  };

  // Custom calendar styles
  const calendarStyles = `
    .react-calendar {
      width: 100%;
      border: 2px solid black;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .react-calendar--doubleView {
      width: 700px;
    }
    .react-calendar__tile {
      padding: 10px;
    }
    .react-calendar__month-view__days__day--weekend {
      color: inherit;
    }
    .react-calendar__tile--active {
      background: #3b82f6 !important;
      color: white !important;
    }
    .react-calendar__tile--now {
      background: #fef3c7;
    }
    ${theme === 'dark' ? `
      .react-calendar {
        background: #1f2937;
        color: #ffffff;
        border: 1px solid white;
      }
      .react-calendar__navigation button {
        color: #ffffff;
      }
      .react-calendar__month-view__days__day {
        color: #ffffff;
      }
      .react-calendar__month-view__weekdays__weekday {
        color: #9ca3af;
      }
      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background: #374151;
      }
      .react-calendar__tile--now {
        background: #4b5563;
      }
    ` : `
      .react-calendar {
        background: #ffffff;
        color: #000000;
      }
      .react-calendar__navigation button {
        color: #000000;
      }
      .react-calendar__month-view__days__day {
        color: #000000;
      }
      .react-calendar__month-view__weekdays__weekday {
        color: #6b7280;
      }
      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background: #e5e7eb;
      }
    `}
  `;

  return (
    <div className={`flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 min-h-[640px] max-h-auto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Inject custom style */}
      <style>{calendarStyles}</style>

      {/* Calendar Section */}
      <div className='md:w-1/2 w-full mt-12'>
        <h1 className='text-2xl font-bold text-center p-5'>Crypto Calendar</h1>
        <div className='flex flex-col items-center ml-20 mr-20'>
          <CalendarComponent
            onChange={handleDateChange}
            value={date}
          />
          <p className='mt-2 text-lg'>Selected date: {format(date, 'MMMM dd, yyyy')}</p>
        </div>
      </div>

      {/* Events Section */}
      <div className='md:w-1/2 w-full mt-20'>
        <div className='flex flex-col items-center space-y-2'>
          <input
            type='text'
            className={`border rounded-lg p-2 w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
            placeholder='Add a reminder (e.g., Airdrop, ICO launch)'
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white p-2 rounded-lg w-full hover:cursor-pointer hover:bg-blue-600'
            onClick={addReminder}
          >
            Add Reminder
          </button>
        </div>

        {/* Reminder List */}
        <div className='mt-10'>
          <h2 className='text-xl font-semibold mb-2'>Upcoming Events</h2>
          <div className='space-y-2'>
            {cryptoEvents.map((e, index) => (
              <div
                key={index}
                className={`p-5 border rounded-lg shadow-md ${theme === 'dark' ? 'bg-teal-700 text-white' : 'bg-teal-500 text-black'}`}
              >
                <strong>{e.event}</strong> on {format(new Date(e.date), 'MMMM dd, yyyy')}
              </div>
            ))}

            {reminders.map((reminder, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg shadow-md flex justify-between items-center ${theme === 'dark' ? 'bg-orange-600 text-white' : 'bg-orange-400 text-black'}`}
              >
                <div>
                  <strong>{reminder.event}</strong> on {format(new Date(reminder.date), 'MMMM dd, yyyy')}
                </div>
                <button
                  onClick={() => removeReminder(index)}
                  className='text-red-500 font-bold hover:cursor-pointer bg-white hover:bg-slate-300 hover:scale-[1.1] transition delay-150 duration-100 ease-in-out p-2 rounded-md'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
