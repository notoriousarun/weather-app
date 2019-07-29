import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DayOfWeek = ({ date, handleWeekDay }) => {
    return (
        <span>{handleWeekDay(date)[1]}</span>
    );
};

DayOfWeek.propTypes = {
    date : PropTypes.string.isRequired
};

export default DayOfWeek;

