import React from 'react';
import PropTypes from 'prop-types';
import CardWeatherImage from './CardWeatherImage';
import CardMaxTemp from './CardMaxTemp';
import CardMinTemp from './CardMinTemp';

const CardListItem = ({ card }) => {    
    return (
      <div className="card">
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
