import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns'; // For date formatting

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [reminders, setReminders] = useState([]);
  const [event, setEvent] = useState('');

  // Sample crypto events
  const cryptoEvents = [
    { date: '2025-03-10', event: 'Bitcoin Halving' },
    { date: '2025-03-15', event: 'ICO Launch: XYZ Token' },
    { date: '2025-03-20', event: 'Airdrop Claim Period' },
  ];

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle reminder submission
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

  // Remove reminder function
  const removeReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <div className='flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 h-auto'>
      {/* Calendar Section (Left) */}
      <div className='md:w-1/2 w-full mt-12'>
        <h1 className='text-2xl font-bold text-center p-5'>Crypto Calendar</h1>
        <div className='flex flex-col items-center'>
          <CalendarComponent
            onChange={handleDateChange}
            value={date}
            className="rounded-lg shadow-lg"
          />
          <p className='mt-2 text-lg'>Selected date: {format(date, 'MMMM dd, yyyy')}</p>
        </div>
      </div>

      {/* Upcoming Events Section (Right) */}
      <div className='md:w-1/2 w-full mt-20'>
        {/* Event Input */}
        <div className='flex flex-col items-center space-y-2'>
          <input
            type='text'
            className='border rounded-lg p-2 w-full'
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

        {/* Reminders */}
        <div className='mt-10'>
          <h2 className='text-xl font-semibold mb-2'>Upcoming Events</h2>
          <div className='space-y-2'>
            {cryptoEvents.map((e, index) => (
              <div
                key={index}
                className='p-3 border bg-teal-500 rounded-lg shadow-md'>
                <strong>{e.event}</strong> on {format(new Date(e.date), 'MMMM dd, yyyy')}
              </div>
            ))}
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className='p-3 border bg-orange-400 rounded-lg shadow-md flex justify-between items-center'>
                <div>
                  <strong>{reminder.event}</strong> on {format(new Date(reminder.date), 'MMMM dd, yyyy')}
                </div>
                <button
                  onClick={() => removeReminder(index)}
                  className='text-red-500 font-bold hover:cursor-pointer bg-white hover:bg-slate-300 hover:scale-[1.1] transition delay-150 duration-100 ease-in-out p-2 rounded-md'>
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
