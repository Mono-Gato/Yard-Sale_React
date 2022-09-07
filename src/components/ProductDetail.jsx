import React from 'react'
import '../styles/ProductDetail.scss'
import iconClose from '../assets/Icons/icon_close.png'
import iconAddCart from '../assets/Icons/bt_add_to_cart.svg'

function ProductDetail () {

    return(
        <aside className="productDetail">
            <div className="close productDetail__close">
                <img src={iconClose} />
            </div>
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
        </aside>

    )
}

export { ProductDetail }