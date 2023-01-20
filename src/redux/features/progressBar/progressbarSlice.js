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
       brightnessFunc : (state, action) => {
            return{
                ...state,
                brightnessValue: action.payload
            }
        },
        saturationFunc: (state, action) => {
            return{
                ...state,
                saturationValue: action.payload
            }
        },
        inversionFunc: (state, action) => {
            return{
                ...state,
                inversionValue: action.payload
            }
        },
        grayscaleFunc: (state, action) => {
            return{
                ...state,
                grayscaleValue: action.payload
            }
        }
    }
})

export const { brightnessFunc, saturationFunc, inversionFunc, grayscaleFunc } = progressbarSlice.actions