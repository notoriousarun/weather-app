import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import CardListItem from './CardListItem';
import HourlyList from './HourlyList';

const CardList = ({ dataObject, handleWeekDay }) => {
    return (
          <div className="card-list">
            {[...dataObject.keys()].map(date =>
               <Link to={`/${(handleWeekDay(date))[1]}`}>
                 <CardListItem key={date}
                               date={date}
                               card={dataObject.get(date)}
                               handleWeekDay={handleWeekDay}/>
               </Link>
            )}
          </div>
    );
};

CardList.propTypes = {
    cardList: PropTypes.object.isRequired
};

export default CardList;
