import { createSlice } from "@reduxjs/toolkit";

const buttonState = {
    brightnes: { bg: "", font: "text-slate-400" },
    saturation: { bg: "", font: "text-slate-400" },
    inversion: { bg: "", font: "text-slate-400" },
    grayscale: { bg: "", font: "text-slate-400" },
    type: ''
  };

export const editorSlice = createSlice({
    name: "editor",
    initialState: buttonState,
    reducers: {
        changeBrightnes: (state, action) => {
          return {
            ...state,
            brightnes: action.payload,
            saturation: buttonState.saturation,
            inversion: buttonState.inversion,
            grayscale: buttonState.grayscale,
            type: 'Brightness'
          }
        },
        changeSaturation: (state, action) => {
            return {
              ...state,
              saturation: action.payload,
              brightnes: buttonState.brightnes,
              inversion: buttonState.inversion,
              grayscale: buttonState.grayscale,
              type: 'Saturation'
            }
          },
          changeInvertion: (state, action) => {
            return {
              ...state,
              inversion: action.payload,
              grayscale: buttonState.grayscale,
              saturation: buttonState.saturation,
              brightnes: buttonState. brightnes,
              type: 'Inversion'
            }
          },
          changeGrayscale: (state, action) => {
            return {
              ...state,
              grayscale: action.payload,
              saturation: buttonState.saturation,
              brightnes: buttonState.brightnes,
              inversion: buttonState.inversion,
              type: 'Grayscale'
            }
          },
    }
})

export const { changeBrightnes, changeSaturation, changeInvertion, changeGrayscale } = editorSlice.actions


