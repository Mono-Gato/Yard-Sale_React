import React from 'react'
import { Header } from '../components/Header'

function Layout ({ children }) {
    return(
        <div className='Layout'>
            { children }
        </div>
    )
}

export { Layout }

