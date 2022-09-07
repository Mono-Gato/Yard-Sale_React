import React from 'react'
import '@styles/ProductDetail.scss'
import iconClose from '@icons/icon_close.png'

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