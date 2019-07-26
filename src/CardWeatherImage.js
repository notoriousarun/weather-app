import React from 'react';
import image from './image.png';
import PropTypes from 'prop-types';

// WeatherImage Component
const CardWeatherImage = ({ weather }) => {
    return (
        <div>
          {(() => {
              switch(weather) {
              case 'snowy':
                  return (
                      <img src={image} alt="snowy-weather" className="weather-image"/>
                  );
              case 'cloudy':
                  return (
                      <img src={image} alt="cloudy-weather" className="weather-image"/>
                  );
              case 'rainy':
                  return (
                      <img src={image} alt="rainy-weather" className="weather-image"/>
                  );
              default:
                  return (
                      <img src={image} alt="sunny-weather" className="weather-image"/>
                  );
        }
          })()}
        </div>
    );
};

CardWeatherImage.propTypes = {
    weather: PropTypes.string.isRequired
};

export default CardWeatherImage;
