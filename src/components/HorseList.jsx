import React from 'react';
import { Link } from 'react-router-dom';
import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';
import horse3 from '../assets/images/horse3.jpg';
import horse4 from '../assets/images/horse4.jpg';
import './HorseList.css';

const horses = [
  { id: 1, name: 'Horse 1', image: horse1 },
  { id: 2, name: 'Horse 2', image: horse2 },
  { id: 3, name: 'Horse 3', image: horse3 },
  { id: 4, name: 'Horse 4', image: horse4 },
];

const HorseList = () => {
  return (
    <div className="horse-list">
      {horses.map((horse) => (
        <div key={horse.id} className="horse-card">
          <img src={horse.image} alt={horse.name} />
          <h3>{horse.name}</h3>
          <Link to={`/booking/${horse.id}`} className="book-now-button">Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default HorseList;
