/*import React from 'react';
import { motion } from 'framer-motion';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  return (
    <motion.div
      className="booking-confirmation"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking. You will receive a confirmation email shortly.</p>
    </motion.div>
  );
};

export default BookingConfirmation;*/

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const location = useLocation();
  const [horseName, setHorseName] = useState('');

  useEffect(() => {
    if (location.state && location.state.horseName) {
      setHorseName(location.state.horseName);
    }
  }, [location]);

  const createCalendarInvite = () => {
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
    const calendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=Horse+Riding+Session+with+${horseName}&dates=${startTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}/${endTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}&details=Enjoy+your+horse+riding+session+with+${horseName}!`;

    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="booking-confirmation">
      <div className="confirmation-popup">
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking a ride with {horseName}!</p>
        <button onClick={createCalendarInvite}>Add to Calendar</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;

/*
import React from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = ({ horse, onClose }) => {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-popup">
        <h3>Booking Confirmed!</h3>
        <p>Thank you for booking a ride with {horse}.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
*/