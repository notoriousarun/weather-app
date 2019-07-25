import React from 'react';
import PropTypes from 'prop-types';

const DayOfWeek = ({ day }) => (
    <span className="day">
        {day}
    </span>
);

DayOfWeek.propTypes = {
    day: PropTypes.string.isRequired
};

export default DayOfWeek;

