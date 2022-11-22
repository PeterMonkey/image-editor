import { createSlice } from "@reduxjs/toolkit";

const barState = {
    brightnessValue: 100,
    saturationValue: 100,
    inversionValue: 0,
    grayscaleValue: 0
}

export const progressbarSlice = createSlice({
    name: "progressbar",
    initialState: barState,
    reducers: {
       brightnessValue : (state, action) => {
            return{
                ...state,
                brightnessValue: action.payload
            }
        },
        saturationValue: (state, action) => {
            return{
                ...state,
                saturationValue: action.payload
            }
        },
        inversionValue: (state, action) => {
            return{
                ...state,
                inversionValue: action.payload
            }
        },
        grayscaleValue: (state, action) => {
            return{
                ...state,
                grayscaleValue: action.payload
            }
        }
    }
})

export const { brightnessValue, saturationValue, inversionValue, grayscaleValue } = progressbarSlice.actions