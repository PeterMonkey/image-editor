import { useDispatch } from "react-redux";
import { brightnessFunc, saturationFunc, inversionFunc, grayscaleFunc } from "../features/progressBar/progressbarSlice";

const inputChange = () => {

    const dispatch = useDispatch()

    const inputBrightness = (value) => {
        dispatch(brightnessFunc(value))
    }

    const inputSaturation = (value) => {
        dispatch(saturationFunc(value))
    }

    const inputInversion = (value) => {
        dispatch(inversionFunc(value))
    }

    const inputGrayscale = (value) => {
        dispatch(grayscaleFunc(value))
    }

    return {
        inputBrightness,
        inputSaturation,
        inputInversion,
        inputGrayscale
    }
}

export default inputChange



