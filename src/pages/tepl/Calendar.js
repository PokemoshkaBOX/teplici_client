import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Импортируем стили для календаря

function MyCalendar({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Передаем выбранную дату в TeploneMain через коллбэк
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button style={{ borderRadius: '10px', fontSize: "20px", borderWidth: '1px', minWidth: 200 }} onClick={toggleCalendar}>Выберите дату</button>
      {showCalendar && (
        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 999 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      )}
    </div>
  );
}

export default MyCalendar;
