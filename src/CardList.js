import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardListItem from './CardListItem';

const CardList = ({ cardList, handleWeekDay }) => (
    <div className="card-list">
      {[...cardList.keys()].map(date =>
           <Link to={`/${(handleWeekDay(date))[1]}`}>
             <CardListItem key={date}
                           date={date}
                           card={cardList.get(date)}
                           handleWeekDay={handleWeekDay}/>
           </Link>                     
      )}
    </div>  
);

CardList.propTypes = {
    cardList: PropTypes.array.isRequired
};

export default CardList;
