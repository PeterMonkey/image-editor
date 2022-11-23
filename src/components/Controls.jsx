import Button from "./Button";
import { useState } from "react";

import { useSelector } from "react-redux";
import editorAction from '../redux/actions/editorAction'
import inputChange from "../redux/actions/progressbarAction";
import RotateControls from "./RotateControls";

const Controls = () => {

    const { editBrightnes, editSaturation, editInvertion, editGrayscale } = editorAction()

    const control = useSelector(state => state.editor)
    console.log(control)

    const bar = useSelector(state => state.progressbar)
    console.log(bar)

    const {brightnes, saturation, inversion, grayscale, type} = control
    const { brightnessValue, saturationValue, inversionValue, grayscaleValue } = bar
    console.log(inversionValue)
    const [state, setState] = useState(100)

    const { inputBrightness, inputSaturation, inputInversion, inputGrayscale } = inputChange()

    const clickBrightness = () => {
        editBrightnes()
        setState(brightnessValue)
    }
    const clickSaturation = () => {
        editSaturation()
        setState(saturationValue)
    }
    const clickInvertion = () => {
        editInvertion()
        setState(inversionValue)
    }
    const clickGrayscale = () => {
        editGrayscale()
        setState(grayscaleValue)
    }
    const valueChange = (type, value) => {
        switch (type) {
            case 'Brightness':
                inputBrightness(value)
                setState(brightnessValue)
                break;
            case 'Saturation':
                inputSaturation(value)
                setState(saturationValue)
                break;
            case 'Inversion':
                inputInversion(value)
                setState(inversionValue)
                break; 
            case 'Grayscale':
                inputGrayscale(value)
                setState(grayscaleValue)
                break;       
        
            default: null
                break;
        }
    }

    //console.log(valueChange("Brightness", 12))
    console.log(state)

  return (
    <div className=" flex flex-col justify-center items-center w-[40%] h-full border-2 border-slate-300 rounded-md">
      <div className=" w-[90%] h-[90%]">
        <div className="w-full h-2/3">
            <div className="pb-1 text-xl">
                <h1>Filters</h1>
            </div>
            <div className="grid grid-cols-2 gap-1 w-full h-24 mt-1">
                <Button text='Brightness' click={() => clickBrightness()} font={brightnes.font} bg={brightnes.bg}/>
                <Button text='Saturation' click={() => clickSaturation()} font={saturation.font} bg={saturation.bg}/>
                <Button text='Inversion' click={() => clickInvertion()} font={inversion.font} bg={inversion.bg}/>
                <Button text='Grayscale' click={() => clickGrayscale()} font={grayscale.font} bg={grayscale.bg}/>
            </div>
            <div className="w-full h-14 mt-3">
                <div className="flex justify-between text-gray-500">
                    <p>{type}</p>
                    <p>{state}%</p>
                </div>
                <div className="w-full">
                    <input className="w-full h-[5px] " 
                    onChange={(e) => valueChange(type, e.target.value)}
                    type="range"
                    value={state}
                    min="0" 
                    max={type==="Brightness" || "Saturation"? 200 : 100} />
                </div>
            </div>
        </div>
        <RotateControls/>
      </div>
    </div>
  );
};

export default Controls;
