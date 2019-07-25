import React from 'react';
import PropTypes from 'prop-types';

const CardMaxTemp = ({ maxTemp }) => (
    <span className="maxTemp">
      {maxTemp}
    </span>
);

CardMaxTemp = {
    maxTemp: PropTypes.string.isRequired
};

export default CardMaxTemp;
