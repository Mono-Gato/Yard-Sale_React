import { useState } from "react"

const initialState = {
    cart: [],
}

function useInitialState () {
    const [state, setState] = useState(initialState)

    const addToCart = (product)=>{
        setState({
            ...state,
            cart: [...state.cart, product]
        })
    }

    return{
        state,
        addToCart
    }
}

export { useInitialState }