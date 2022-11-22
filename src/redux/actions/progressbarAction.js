import { useDispatch } from "react-redux";
import { brightnessValue, saturationValue, inversionValue, grayscaleValue } from "../features/progressBar/progressbarSlice";

const inputChange = () => {

    const dispatch = useDispatch()

    const inputBrightness = (value) => {
        dispatch(brightnessValue(value))
    }

    const inputSaturation = (value) => {
        dispatch(saturationValue(value))
    }

    const inputInversion = (value) => {
        dispatch(inversionValue(value))
    }

    const inputGrayscale = (value) => {
        dispatch(grayscaleValue(value))
    }

    return {
        inputBrightness,
        inputSaturation,
        inputInversion,
        inputGrayscale
    }
}

export default inputChange



