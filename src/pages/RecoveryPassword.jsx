import React from 'react'
import '../styles/RecoveryPassword.scss'
import logo from '../assets/Logos/logo_yard_sale.svg';
import iconEmail from '../assets/Icons/email.svg'

function RecoveryPassword () {
    return(
        <div className="recoveryPassword">
            <div className="form-container">
                <img className="logo" src={logo} alt="Logo Yard Sale" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="recoveryPassword__image">
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

export { RecoveryPassword }