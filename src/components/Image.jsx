import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Image = ({image}) => {

    const bar = useSelector(state => state.progressbar)
    const { brightnessValue, saturationValue, inversionValue, grayscaleValue } = bar

    const rfValues = useSelector(state => state.rotate)
    const { rotation, orientationX, orientationY } = rfValues

    const ref = useRef(null)
    if(image){
        ref.current.src = URL.createObjectURL(image)
        let $elem = document.querySelector(".image")

        $elem.style.filter = `
        brightness(${brightnessValue/100})
         saturate(${saturationValue/100}) 
         invert(${inversionValue/100})
         grayscale(${grayscaleValue/100})
         `
         $elem.style.transform = `
         scaleX(${orientationX})
         scaleY(${orientationY})
         rotate(${rotation}deg)
         `
    } 
         
    
    return(
        <div className=" w-[58%] h-full rounded-md ">
            <img ref={ref} className={ ` image object-contain h-full w-full`}
            type="image" />
        </div>
    )
}

export default Image