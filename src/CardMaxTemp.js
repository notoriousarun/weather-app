import React from 'react';
import PropTypes from 'prop-types';

const CardMaxTemp = ({ maxTemp }) => (
    <span className="temp maxTemp">
      {maxTemp}
    </span>
);

CardMaxTemp.propTypes = {
    maxTemp: PropTypes.string.isRequired
};

export default CardMaxTemp;
