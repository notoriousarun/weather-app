import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = ({ cardList}) => (
    <div className="card-list">
      {[...cardList.keys()].map(date =>
           <CardListItem key={date}
                         card={cardList.get(date)}/>
      )}
    </div>  
);

CardList.propTypes = {
    cardList: PropTypes.array.isRequired
};

export default CardList;
