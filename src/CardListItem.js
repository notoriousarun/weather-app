import React from 'react';
import PropTypes from 'prop-types';
import DayOfWeek from './DayOfWeek';
import CardWeatherImage from './CardWeatherImage';
import CardMaxTemp from './CardMaxTemp';
import CardMinTemp from './CardMinTemp';

const CardListItem = ({ card, date, handleWeekDay }) => {    
    return (
      <div className="card">
        <DayOfWeek date={date} handleWeekDay={handleWeekDay}/>
        <CardWeatherImage weather={card[0].weather.description}/>
        <div className="weather-state">
          <CardMaxTemp maxTemp={card[0].main.temp_max}/>
          <CardMinTemp minTemp={card[0].main.temp_min}/>
        </div>
      </div>
    );
    
};

CardListItem.propTypes = {
    card: PropTypes.object.isRequired
};

export default CardListItem;
