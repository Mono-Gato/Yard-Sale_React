import React from 'react'
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import '../styles/global.scss'

function App () {
    return(
        <Layout>
            <Login />
        </Layout>
    )
}

export default App;