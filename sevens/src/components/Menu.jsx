import React from 'react';
import Items from './Items';

const MenuCards = ({ item, discription, price, imageUrl }) => {
    return (
        <div className = "item-card">
            <img src={imageUrl} alt={item} className='item-card-image'/>
            <div className = 'item-card-info'>
                <h3 className = 'item-card-name'>{item}</h3>
                <p className = 'item-card-discription'>{discription}</p>
                <p className = 'item-card-price'>{price}</p>
            </div>
        </div>
    )
}

export default MenuCards;