import React from 'react'
import '../styles/SendEmail.scss'
import logo from '../assets/Logos/logo_yard_sale.svg';
import iconEmail from '../assets/Icons/email.svg'

function SendEmail () {
    return(
        <div className="sendEmail">
            <div className="form-container">
                <img className="logo" src={logo} alt="Logo Yard Sale" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="sendEmail__image">
                    <img src={iconEmail} />
                </div>
                <button className="button login__button"> login</button>
                <p className="resend">
                    <span>
                        Didn't receive the email?
                    </span>
                    <a href="/">
                        Resend
                    </a>
                </p>
            </div>
        </div>
    )
}

export { SendEmail }