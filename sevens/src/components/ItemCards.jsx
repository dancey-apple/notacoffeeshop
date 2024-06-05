import React from 'react';

const ItemCards = ({ title, description, price, imaegUrl }) => {
    return(
        <div className = "ItemCard">
            <img src={imageUrl} alt={title} className='item-card-image'/>
            <div className = "ItemCard-Info">
                <h2 className = "ItemCard-Title">{title}</h2>
                <p className="ItemCard-Description">{description}</p>
            </div>
        </div>
    );
};

export default ItemCards;