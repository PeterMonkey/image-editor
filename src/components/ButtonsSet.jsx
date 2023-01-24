import Button from "./Button";
import { useRef } from "react";
import { getImage} from "../redux/features/imageState/imageSlice";
import { useDispatch, useSelector } from "react-redux";

import { changeBrightnes } from "../redux/features/editor/editorSlice";
import { brightnessFunc, saturationFunc, inversionFunc, grayscaleFunc } from "../redux/features/progressBar/progressbarSlice";
import { rotateLeft, rotateRight, toTurnX, toTurnY } from '../redux/features/rotateflip/rotateflipSlice'

const ButtonsSet = () => {

    const dispatch = useDispatch()

    const values = useSelector(state => state.progressbar)
    const { brightnessValue, saturationValue, inversionValue, grayscaleValue } = values

    const rfValues = useSelector(state => state.rotate)
    const { rotation, orientationX, orientationY } = rfValues

    const setImage = (file) => {
      dispatch(getImage(file))
    }
  
    const ref = useRef()
    const handleClick = (e) => {
      ref.current.click()
    }

    const reset = () => {
        dispatch(changeBrightnes({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        dispatch(brightnessFunc(100))
        dispatch(saturationFunc(100))
        dispatch(inversionFunc(0))
        dispatch(grayscaleFunc(0))
        dispatch(rotateLeft(0))
        dispatch(rotateRight(0))
        dispatch(toTurnX(1))
        dispatch(toTurnY(1))
    }

    let $img = document.querySelector('.image')
    
    function saveImage() {

      let $canvas = document.createElement("canvas")
      let ctx = $canvas.getContext("2d")
      $canvas.width = $img.naturalWidth
      $canvas.height =$img.naturalHeight
      console.log($img)
      ctx.filter = `
      brightness(${brightnessValue/100})
       saturate(${saturationValue/100}) 
       invert(${inversionValue/100})
       grayscale(${grayscaleValue/100})
       `
       ctx.translate($canvas.width / 2, $canvas.height / 2)
       if(rotation !== 0){
        ctx.rotate(rotation * Math.PI / 180)
       }
       ctx.scale(orientationX, orientationY)
      ctx.drawImage($img, -$canvas.width / 2, -$canvas.height / 2, $canvas.width, $canvas.height)

      const $link = document.createElement('a')
      $link.download = 'image.jpeg'
      $link.href = $canvas.toDataURL()
      $link.click()
    }


  return (
    <div className="flex flex-col md:flex-row mt-2 md:mt-0 justify-between w-11/12 h-20 text-sm">
      <div className=" flex items-center ">
        <Button
          click={() => reset()}
          text={"RESET FILTERS"}
          width={"w-full md:w-32"}
          height={"h-12"}
          font={"text-slate-500"}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-2 md:mt-0 mt-1 gap-1 items-center h-full text-sm">
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
          width={"w-full md:w-32"}
          height={"h-12"}
          bg={"bg-slate-500"}
          font={"text-slate-50"}
        />
        <Button
        click={() => saveImage()}
          text={"SAVE IMAGE"}
          width={"w-full md:w-32"}
          height={"h-12"}
          bg={"bg-[#6B7FD7]"}
          font={"text-slate-50"}
        />
      </div>
    </div>
  );
};

export default ButtonsSet