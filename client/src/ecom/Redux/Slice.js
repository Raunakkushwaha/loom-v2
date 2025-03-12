import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:[],
}

export const similarSlice = createSlice({
    name: 'Similar',
    initialState,
    reducers:{
        addSimilar: (state,action) =>{
            state.value = [action.payload]
        }
    }
})

export const { addSimilar } = similarSlice.actions

export default similarSlice.reducer