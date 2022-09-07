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
            
        </aside>

    )
}

export { ProductDetail }