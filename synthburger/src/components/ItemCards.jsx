import React from 'react';
import { CartContext } from '../contexts/CartContext';

const ItemCards = ({ title, description, price, imaegUrl }) => {
    return(
        <div className = "ItemCard">
            <img src={imageUrl} alt={title} className='item-card-image'/>
            <div className = "ItemCard-Info">
                <h2 className = "ItemCard-Title">{title}</h2>
                <p className="ItemCard-Description">{description}</p>
                <button onClick={() => addToCart({ title, price })}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ItemCards;