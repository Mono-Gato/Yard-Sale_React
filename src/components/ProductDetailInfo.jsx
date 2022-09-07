import React from 'react';
import '@styles/ProductDetailInfo.scss'

function ProductDetailInfo() {
    return (
        <React.Fragment>
            <img className="productDetail__image" src="https://images.pexels.com/photos/5465162/pexels-photo-5465162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className="product__info">
                <p>
                    $ 120.00
                </p>
                <p>
                    Bmx
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, magna non interdum commodo, ipsum metus venenatis dui, id pretium elit quam laoreet ipsum.
                </p>
                <button className="button productDetail__button">
                    <img src={iconAddCart} />
                    Add to cart
                </button>
            </div>
        </React.Fragment>
    );
};

export { ProductDetailInfo }