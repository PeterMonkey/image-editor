    import { useDispatch } from "react-redux"
    import { changeBrightnes, changeSaturation, changeInvertion, changeGrayscale } from "../features/editor/editorSlice";

    
    const editorAction = () => {

        const dispatch = useDispatch()

        const editBrightnes = () => {
            dispatch(changeBrightnes({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        }
    
        const editSaturation = () => {
            dispatch(changeSaturation({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        }
    
        const editInvertion = () => {
            dispatch(changeInvertion({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        }
    
        const editGrayscale = () => {
            dispatch(changeGrayscale({bg:'bg-[#6B7FD7]', font:'text-slate-50'}))
        }

        return{
            editBrightnes,
            editSaturation,
            editInvertion,
            editGrayscale
        }
    }

    export default editorAction