import React from 'react';
import PropTypes from 'prop-types';

const CardMinTemp = ({ minTemp }) => (
    <span className="minTemp">
        {minTemp}
    </span>
);

CardMinTemp = {
    minTemp: PropTypes.string.isRequired
};

export default CardMinTemp;
