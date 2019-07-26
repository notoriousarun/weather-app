import React from 'react';
import PropTypes from 'prop-types';

const CardMinTemp = ({ minTemp }) => (
    <span className="temp minTemp">
        {minTemp}
    </span>
);

CardMinTemp.propTypes = {
    minTemp: PropTypes.string.isRequired
};

export default CardMinTemp;
