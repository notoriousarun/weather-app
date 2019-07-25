import React from 'react';
import PropTypes from 'prop-types';
import CardListItem from './CardListItem';

const CardList = ({ cardList }) => (
    return (
        <div className="card-list">
          <div>
            {cardList.map(item =>
                <CardListItem key={card.id} item={card}/>
            )}
          </div>
        </div>  
    );
);

CardList.propTypes = {
    cardList: PropTypes.array.isRequired,
};

export default CardList;
