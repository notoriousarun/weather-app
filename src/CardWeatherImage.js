import React from 'react';
import image from './sunny-image.png';
import snowImage from './snowy-image.png';
import cloudImage from './cloud-image.png';
import rainImage from './rain-image.png';
import PropTypes from 'prop-types';

// WeatherImage Component
const CardWeatherImage = ({ weather }) => {
    return (
        <div>
          {(() => {
              switch(weather) {
              case 'snowy':
                  return (
                      <img src={snowImage} alt="snowy-weather" className="weather-image"/>
                  );
              case 'overcast clouds':
                  return (
                      <img src={cloudImage} alt="cloudy-weather" className="weather-image"/>
                  );
              case 'broken clouds':
                  return (
                      <img src={cloudImage} alt="cloudy-weather" className="weather-image"/>
                  );
              case 'light rain':
                  return (
                      <img src={rainImage} alt="rainy-weather" className="weather-image"/>
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
