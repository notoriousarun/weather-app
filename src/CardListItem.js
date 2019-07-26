import React from 'react';
import PropTypes from 'prop-types';
import DayOfWeek from './DayOfWeek';
import CardWeatherImage from './CardWeatherImage';
import CardMaxTemp from './CardMaxTemp';
import CardMinTemp from './CardMinTemp';

const CardListItem = ({ card }) => (
    <div className="card">
      <DayOfWeek day={card.day}/>
      <CardWeatherImage weather={card.weather}/>
      <div className="weather-state">
        <CardMaxTemp maxTemp={card.maxTemp}/>
        <CardMinTemp minTemp={card.minTemp}/>
      </div>
    </div>
);

CardListItem.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardListItem;
