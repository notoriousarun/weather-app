import React from 'react';
import PropTypes from 'prop-types';

const HourlyList = ({ forDate, dataMap }) => (
    <div className="hourly-list">
      {dataMap.get(forDate).map(data =>
                                <div>
                                  <span>{data.main.temp_max}</span>
                                  <span>{data.main.temp_min}</span>
                                </div>
      )}
    </div>
);

export default HourlyList;
