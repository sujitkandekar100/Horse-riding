/*import React from 'react';
import HorseList from './HorseList';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Horse Ride Booking System</h1>
      <HorseList />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Horse Ride Booking</h1>
      <Link to="/booking/1">Book a Ride</Link>
    </div>
  );
};

export default LandingPage;*/
/*
import React from 'react';
import HorseList from './HorseList';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Horse Ride Booking</h1>
      <HorseList />
    </div>
  );
};

export default LandingPage;

*/
/*
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';
import horse3 from '../assets/images/horse3.jpg';
import horse4 from '../assets/images/horse4.jpg';

const horses = [
  { id: 1, name: 'Thunder', description: 'A strong and majestic horse.', image: horse1 },
  { id: 2, name: 'Lightning', description: 'Fast and agile, perfect for a thrilling ride.', image: horse2 },
  { id: 3, name: 'Storm', description: 'Graceful and powerful, a wonderful companion.', image: horse3 },
  { id: 4, name: 'Blaze', description: 'Fiery and spirited, an exciting choice.', image: horse4 },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Horse Ride Booking System</h1>
      <p>Experience the thrill and beauty of horse riding with our carefully selected horses. Choose your favorite horse and book your ride today!</p>
      <div className="horse-list">
        {horses.map((horse) => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} className="horse-image" />
            <h2>{horse.name}</h2>
            <p>{horse.description}</p>
            <Link to={`/booking/${horse.id}`} className="book-now-button">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;*/
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';
import horse3 from '../assets/images/horse3.jpg';
import horse4 from '../assets/images/horse4.jpg';
import './HomePage.css';

const horses = [
  { id: 1, name: 'Thunder', description: 'A strong and majestic horse.', image: horse1 },
  { id: 2, name: 'Lightning', description: 'Fast and agile, perfect for a thrilling ride.', image: horse2 },
  { id: 3, name: 'Storm', description: 'Graceful and powerful, a wonderful companion.', image: horse3 },
  { id: 4, name: 'Blaze', description: 'Fiery and spirited, an exciting choice.', image: horse4 },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="header">
        <h1>Welcome to Our Horse Ride Booking System</h1>
        <p>Experience the thrill and beauty of horse riding with our carefully selected horses. Choose your favorite horse and book your ride today!</p>
      </header>
      <div className="horse-list">
        {horses.map((horse) => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} className="horse-image" />
            <h2>{horse.name}</h2>
            <p>{horse.description}</p>
          </div>
        ))}
      </div>
      <div className="book-now-container">
        <Link to="/booking" className="book-now-button">Book Now</Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
