import React from 'react';
import PropTypes from 'prop-types';

const DayOfWeek = ({ date, handleWeekDay }) => {
    return (
        <div>
          <span>{handleWeekDay(date)[1]}</span>
        </div>
    );
};

DayOfWeek.propTypes = {
    date : PropTypes.string.isRequired
};

export default DayOfWeek;

