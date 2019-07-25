import React from 'react';
import PropTypes from 'prop-types';

const CardWeatherImage = ({ weather }) => (
      <div className="weather">
        if(weather == "sunny") {
            return (
                <img className="weather-image" src=""/>
            )
        }
        if(weather == "rainy") {
            return (
                <img className="weather-image" src=""/>
            )
        }
        if(weather == "sunny") {
            return (
              <img className="weather-image" src=""/>
            )
        }
        if(weather == "cloudy"){
            return (
                <img className="weather-image" src=""/>
            )
        }
      </div>
);

CardWeatherImage = {
    weather: PropTypes.string.isRequired
};

export default CardWeatherImage;
