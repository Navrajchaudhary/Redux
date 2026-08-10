import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('collections')) || []
}

const collectionSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        addCollection(state, action) {
            const isExists = state.items.find((item) => item.id === action.payload.id)
            if (!isExists) {
                state.items.push(action.payload)
                localStorage.setItem('collections', JSON.stringify(state.items))
            }
        },
        removeCollection(state, action){
            state.items = state.items.filter((item)=> item.id !== action.payload)
            localStorage.setItem('collections', JSON.stringify(state.items))
        },
        clearCollection(state){
            state.items = []
            localStorage.removeItem('collections')
        }
    }
})

export const {addCollection, removeCollection, clearCollection} = collectionSlice.actions
export default collectionSlice.reducer