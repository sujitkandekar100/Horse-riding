/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/slices';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { horseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking({ ...formData, horseId }));
    navigate('/confirmation');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;*/
/*import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { horseId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const horseName = `Horse ${horseId}`; // Replace this with the actual horse name retrieval logic
    navigate('/confirmation', { state: { horseName } });
  };

  return (
    <div className="booking-form">
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
*//*
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Blaze' },
];

const timeSlots = [
  '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM', '8:00 PM - 9:00 PM',
  '9:00 PM - 10:00 PM', '10:00 PM - 11:00 PM', '11:00 PM - 12:00 AM'
];

const BookingForm = () => {
  const [selectedHorse, setSelectedHorse] = useState(horses[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { horseId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const horseName = horses.find(horse => horse.id === selectedHorse).name;
    navigate('/confirmation', { state: { horseName } });
  };

  return (
    <div className="booking-form">
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Horse:
          <select value={selectedHorse} onChange={(e) => setSelectedHorse(Number(e.target.value))}>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.id}>{horse.name}</option>
            ))}
          </select>
        </label>
        <label>
          Choose Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Choose Time Slot:
          <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
*//*
import React, { useState } from 'react';
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Blaze' },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { horse, date, time, name, email, phone } = formData;
    const newErrors = {};

    if (!horse) newErrors.horse = 'Please select a horse';
    if (!date) newErrors.date = 'Please select a date';
    if (!time) newErrors.time = 'Please select a time';
    if (!name) newErrors.name = 'Please enter your name';
    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Horse Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="horse">Select Horse</label>
          <select name="horse" value={formData.horse} onChange={handleChange}>
            <option value="">Select a horse</option>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
          {errors.horse && <span className="error">{errors.horse}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;

*//*
import React, { useState, useEffect } from 'react';
import BookingConfirmation from './BookingConfirmation';
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Blaze' },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (formData.date) {
      generateTimeSlots(formData.date);
    }
  }, [formData.date]);

  const generateTimeSlots = (date) => {
    const day = new Date(date).getDay();
    let slots = [];
    if (day >= 1 && day <= 6) { // Monday to Saturday
      for (let hour = 15; hour <= 23; hour++) {
        slots.push(`${hour}:00 - ${hour + 1}:00`);
      }
    }
    setTimeSlots(slots);
  };

  const validateForm = () => {
    const { horse, date, time, name, email, phone } = formData;
    const newErrors = {};

    if (!horse) newErrors.horse = 'Please select a horse';
    if (!date) newErrors.date = 'Please select a date';
    if (!time) newErrors.time = 'Please select a time';
    if (!name) newErrors.name = 'Please enter your name';
    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true); // Show confirmation pop-up
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Horse Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="horse">Select Horse</label>
          <select name="horse" value={formData.horse} onChange={handleChange}>
            <option value="">Select a horse</option>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
          {errors.horse && <span className="error">{errors.horse}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <BookingConfirmation
          horse={formData.horse}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default BookingForm;
*/
import React, { useState, useEffect } from 'react';
import BookingConfirmation from './BookingConfirmation';
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Blaze' },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (formData.date) {
      generateTimeSlots(formData.date);
    }
  }, [formData.date]);

  const generateTimeSlots = (date) => {
    const day = new Date(date).getDay();
    let slots = [];
    if (day >= 1 && day <= 6) { // Monday to Saturday
      for (let hour = 15; hour <= 23; hour++) {
        slots.push(`${hour}:00 - ${hour + 1}:00`);
      }
    }
    setTimeSlots(slots);
  };

  const validateForm = () => {
    const { horse, date, time, name, email, phone } = formData;
    const newErrors = {};

    if (!horse) newErrors.horse = 'Please select a horse';
    if (!date) newErrors.date = 'Please select a date';
    if (!time) newErrors.time = 'Please select a time';
    if (!name) newErrors.name = 'Please enter your name';
    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true); // Show confirmation pop-up
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Horse Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="horse">Select Horse</label>
          <select name="horse" value={formData.horse} onChange={handleChange}>
            <option value="">Select a horse</option>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
          {errors.horse && <span className="error">{errors.horse}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <BookingConfirmation
          horse={formData.horse}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default BookingForm;


