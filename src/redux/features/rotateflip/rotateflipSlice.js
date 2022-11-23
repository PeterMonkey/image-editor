import { createSlice } from "@reduxjs/toolkit";

const direction = {
    rotation: 0,
    orientationX: 1,
    orientationY: 1,
}

export const rotateflipSlice = createSlice({
    name: 'rotate',
    initialState: direction,
    reducers: {
        rotateLeft: (state, action) => {
            return{
                ...state,
                rotation: action.payload
            }
        },
        rotateRight: (state, action) => {
            return{
                ...state,
                rotation: action.payload
            }
        },
        toTurnX: (state, action) => {
            return{
                ...state,
                orientationX: action.payload
            }
        },
        toTurnY: (state, action) => {
            return{
                ...state,
                orientationY: action.payload
            }
        }
    }
})

export const {rotateLeft, rotateRight, toTurnX, toTurnY} = rotateflipSlice.actions