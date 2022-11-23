import { createSlice } from "@reduxjs/toolkit";

const imageState = {
    image: ''
}

export const imageSlice = createSlice({
    name: 'image',
    initialState: imageState,
    reducers: {
        getImage: (state, action) => {
            return{
                ...state,
                image: action.payload
            }
        }
    }
})

export const { getImage } = imageSlice.actions