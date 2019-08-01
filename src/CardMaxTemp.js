import React from 'react';
import PropTypes from 'prop-types';

const CardMaxTemp = ({ maxTemp }) => (
    <span className="temp maxTemp">
      {maxTemp}
    </span>
);

CardMaxTemp.propTypes = {
    maxTemp: PropTypes.number.isRequired
};

export default CardMaxTemp;
