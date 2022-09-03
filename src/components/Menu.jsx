import React from 'react'
import '../styles/Menu'

function Menu () {
    return(
        <React.Fragment>
            <div className="menu--desktop inactive">
                <ul>
                    <li><a href="/">My orders</a></li>
                    <li><a href="/">My account</a></li>
                    <li><a href="/">Sign out</a></li>
                </ul>
            </div>
            <div className="menu--mobile inactive">
                {/*
                    <a class="close">
                        <img src="./src/static/Icons/icon_close.png" alt="">
                    </a>
                */}
                <div>
                    <ul>
                        <li><a href="/">CATEGORIES</a></li>
                        <li><a href="/">All</a></li>
                        <li><a href="/">Clothes</a></li>
                        <li><a href="/">Electronics</a></li>
                        <li><a href="/">Furnitures</a></li>
                        <li><a href="/">Toys</a></li>
                        <li><a href="/">Others</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">My orders</a></li>
                        <li><a href="/">My account</a></li>
                    </ul>
                </div>
                <ul className="menu__info">
                    <li>
                        <a href="/" className="info__email">camilayokoo@gmail.com </a>
                    </li>
                    <li>
                        <a href="/" className="info__sing-out">Sign out</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export { Menu }