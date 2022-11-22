import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Image = ({image}) => {

    const bar = useSelector(state => state.progressbar)
    const { brightnessValue, saturationValue, inversionValue, grayscaleValue } = bar

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
    } 
         
    
    
    console.log(ref.src)
    console.log(brightnessValue/100)
    return(
        <div className=" w-[58%] h-full rounded-md ">
            <img ref={ref} className={ ` image rotate-[0deg] scale-x-[1] scale-y-[1] brightness-[${brightnessValue/100}] saturate-[${saturationValue}] invert-[${inversionValue}%] grayscale-[${grayscaleValue}%] object-contain h-full w-full`}
            type="image" />
        </div>
    )
}

export default Image