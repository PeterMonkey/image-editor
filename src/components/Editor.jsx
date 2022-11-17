import { useRef, useState } from "react";
import Button from "./Button";
import Controls from "./Controls";
import Image from "./Image";

const Editor = () => {

  const [file, setFile] = useState('')

  const ref = useRef()
  const handleClick = (e) => {
    ref.current.click()
  }

  console.log(file)

  return (
    <div className="w-3/4 h-[500px] bg-slate-50 rounded-xl">
      <div className="flex flex-col m-auto w-11/12 h-full">
        <div className="flex items-center h-16 w-11/12">
          <h1 className="text-2xl font-bold">Image Editor</h1>
        </div>
        <div className="flex justify-between items-center w-11/12 h-2/3">
          <Image image={file}/>
          <Controls />
        </div>
        <div className="flex justify-between w-11/12 h-20 text-sm">
            <div className=" flex items-center ">
                <Button text={'RESET FILTERS'} width={'w-32'} height={'h-12'} font={'text-slate-500'}/>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center h-full text-sm">
              <input ref={ref} onChange={e => setFile(e.target.files[0])} type="file" accept=".jpg,.jpeg,.png" hidden/>
                <Button click={() => handleClick()} text={'CHOOSE IMAGE'} width={'w-32'} height={'h-12'} bg={'bg-slate-500'} font={'text-slate-50'}/>
                <Button text={'SAVE IMAGE'} width={'w-32'} height={'h-12'} bg={'bg-[#6B7FD7]'} font={'text-slate-50'}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
