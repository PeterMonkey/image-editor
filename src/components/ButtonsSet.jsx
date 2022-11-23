import Button from "./Button";
import { useRef } from "react";
import { getImage } from "../redux/features/imageState/imageSlice";
import { useDispatch } from "react-redux";

import { changeBrightnes, changeSaturation, changeInvertion, changeGrayscale } from "../redux/features/editor/editorSlice";
import { brightnessValue, saturationValue, inversionValue, grayscaleValue } from "../redux/features/progressBar/progressbarSlice";
import { rotateLeft, rotateRight, toTurnX, toTurnY } from '../redux/features/rotateflip/rotateflipSlice'

const ButtonsSet = () => {

    const dispatch = useDispatch()

    const setImage = (file) => {
      dispatch(getImage(file))
    }
  
    const ref = useRef()
    const handleClick = (e) => {
      ref.current.click()
    }

    const reset = () => {
        dispatch(changeBrightnes({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        dispatch(brightnessValue(100))
        dispatch(saturationValue(100))
        dispatch(inversionValue(0))
        dispatch(grayscaleValue(0))
        dispatch(rotateLeft(0))
        dispatch(rotateRight(0))
        dispatch(toTurnX(1))
        dispatch(toTurnY(1))
    }

  return (
    <div className="flex justify-between w-11/12 h-20 text-sm">
      <div className=" flex items-center ">
        <Button
          click={() => reset()}
          text={"RESET FILTERS"}
          width={"w-32"}
          height={"h-12"}
          font={"text-slate-500"}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 items-center h-full text-sm">
        <input
          ref={ref}
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          accept=".jpg,.jpeg,.png"
          hidden
        />
        <Button
          click={() => handleClick()}
          text={"CHOOSE IMAGE"}
          width={"w-32"}
          height={"h-12"}
          bg={"bg-slate-500"}
          font={"text-slate-50"}
        />
        <Button
          text={"SAVE IMAGE"}
          width={"w-32"}
          height={"h-12"}
          bg={"bg-[#6B7FD7]"}
          font={"text-slate-50"}
        />
      </div>
    </div>
  );
};

export default ButtonsSet