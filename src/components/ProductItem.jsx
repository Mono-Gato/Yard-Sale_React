import React, { useContext } from 'react';
import iconAddCart from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss'
import { AppContext } from '@context/AppContext';

function ProductItem( { product } ){
    const { addToCart } = useContext(AppContext)

    const handleClick = (item)=>{
        addToCart(item)
        console.log(addToCart, item)
    }
    return (
        <div className="card">
            <img src={product.images[1]} className="card__image" />
            <div className="card__info">
                <div className="info__text">
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure 
                    className="info__image" 
                    onClick={() => handleClick(product)}>
                    <img src={iconAddCart} />
                </figure>
            </div>
        </div>
    );
};

export { ProductItem };