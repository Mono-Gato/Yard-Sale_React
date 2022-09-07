import React from 'react'
import '../styles/Header.scss'
import iconMenu from '../assets/Icons/icon_menu.svg'
import logo from '../assets/Logos/logo_yard_sale.svg'
import iconArrow from '../assets/Icons/flechita.svg'
import iconShoppingCart from '../assets/Icons/icon_shopping_cart.svg'

function Header () {
    return(
        <nav className="navbar">
            <img src={iconMenu}  className="navbar__menu-icon" />
            <div className="navbar-left">
                <img className="navbar__logo" src={logo} />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar__email">
                        camilayokoo@gmail.com
                        <img src={iconArrow}  />
                    </li>
                    <li className="navbar__cart">
                        <img src={iconShoppingCart} />
                        <div>
                            2
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }