import Logo from '../assets/image-placeholder.svg'
import { useRef } from 'react'

const Image = ({image}) => {
    const ref = useRef(null)
    if(image){
        ref.current.src = URL.createObjectURL(image)
    } 
    
    console.log(ref.src)
    return(
        <div className=" w-[58%] h-full rounded-md ">
            <img ref={ref} className={`rotate-[0deg] scale-x-[1] scale-y-[1] brightness-[] saturate-[] invert-[0%] grayscale-[0%] object-contain h-full w-full`}
            type="image" />
        </div>
    )
}

export default Image