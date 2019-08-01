import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardListItem from './CardListItem';

const CardList = ({ dataObject, handleWeekDay }) => {
    return (
          <div className="card-list">
            {[...dataObject.keys()].map(date =>
               <Link to={`/${(handleWeekDay(date))[1]}`} key={date}>
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
    dataObject: PropTypes.object.isRequired
};

export default CardList;
