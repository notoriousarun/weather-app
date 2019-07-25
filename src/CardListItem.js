import React from 'react';
import PropTypes from 'prop-types';
import DayOfWeek from './DayOfWeek';
import CardWeatherImage from './CardImage';
import CardMaxTemp from './CardMaxTemp';
import CardMinTemp from './CardMinTemp';

const Card = ({ card }) => (
    <div className="card">
      <DayOfWeek day={card.day}/>
      <CardWeatherImage min={card.weather}/>
      <CardMaxTemp maxTemp={card.maxTemp}/>
      <CardMinTemp minTemp={card.minTemp}/>
    </div>
);

Card.PropTypes = {
    card: PropTypes.object.isRequired
};

export default Card;
