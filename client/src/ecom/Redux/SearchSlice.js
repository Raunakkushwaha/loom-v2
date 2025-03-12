import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    seacrhItem:"",
}

export const searchSlice = createSlice({
    name: 'Searcg',
    initialState,
    reducers:{
        addSearch: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const { addSearch } = searchSlice.actions

export default searchSlice.reducer