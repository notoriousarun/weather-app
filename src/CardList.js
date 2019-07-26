import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = ({ cardList }) => (
    <div className="card-list">
      {cardList.map(card =>
                    <CardListItem key={card.id} card={card}/>
                   )}
    </div>  
);

CardList.propTypes = {
    cardList: PropTypes.array.isRequired
};

export default CardList;
