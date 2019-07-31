import React from 'react';
import PropTypes from 'prop-types';

const HourlyList = ({ date, dataMap }) => {
    return(
        <div className="hourly-list">
          {dataMap.get(date).map(data =>
                                 <div key={data.dt_txt}>
                                   <span>{data.dt_txt.slice(11, -3)}</span>
                                   &nbsp;
                                   <span>{data.main.temp_max}</span>
                                   &nbsp;
                                   <span>{data.main.temp_min}</span>
                                   &nbsp;
                                   &nbsp;
                                   <span>{data.weather[0].description}</span>
                                 </div>
                                )}
        </div>
    );
};



export default HourlyList;
