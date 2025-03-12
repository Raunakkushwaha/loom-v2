import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CartItem:[],
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers:{
        addCart: (state,action) =>{
            state.CartItem = [...state.CartItem,action.payload]
        },
        updateCart: (state,action) =>{
            console.log("State in update ==> ", state)
            state.CartItem = action.payload
        },
        clearCart: (state,action) =>{
            console.log("State in update ==> ", state)
            state.CartItem = []
        }
    }
})

export const { addCart,updateCart,clearCart } = cartSlice.actions

export default cartSlice.reducer