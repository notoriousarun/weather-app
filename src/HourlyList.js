import React from 'react';
import PropTypes from 'prop-types';

const HourlyList = ({ date, dataMap }) => {
    return(
        <div className="hourly-list">
          <div>
            <span><b>Time</b></span>
            <span><b>Max Temp.</b></span>
            <span><b>Min Temp.</b></span>
            <span><b>Status</b></span>
          </div>
          {dataMap.get(date).map(data =>
               <div key={data.dt_txt}>
                 <span>{data.dt_txt.slice(11, -3)}</span>
                 <span>{data.main.temp_max}</span>
                 <span>{data.main.temp_min}</span>
                 <span>{data.weather[0].description}</span>
               </div>
          )}
        </div>
    );
};

HourlyList.propTypes = {
    date: PropTypes.string.isRequired,
    dataMap: PropTypes.object.isRequired
};

export default HourlyList;
