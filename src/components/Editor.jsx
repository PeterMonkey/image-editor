import { useRef } from "react";
import Controls from "./Controls";
import Image from "./Image";
import { getImage } from "../redux/features/imageState/imageSlice";
import { useSelector, useDispatch } from "react-redux";
import ButtonsSet from "./ButtonsSet";

const Editor = () => {

  const dispatch = useDispatch()

  const setImage = (file) => {
    dispatch(getImage(file))
  }

  const {image} = useSelector(state => state.image)

  const ref = useRef()
  const handleClick = (e) => {
    ref.current.click()
  }

  console.log(image)

  return (
    <div className="w-3/4 h-[500px] bg-slate-50 rounded-xl">
      <div className="flex flex-col m-auto w-11/12 h-full">
        <div className="flex items-center h-16 w-11/12">
          <h1 className="text-2xl font-bold">Image Editor</h1>
        </div>
        <div className="flex justify-between items-center w-11/12 h-2/3">
          <Image image={image}/>
          <Controls image={image}/>
        </div>
        <ButtonsSet/>
      </div>
    </div>
  );
};

export default Editor;
