import Button from "./Button";
import { useState } from "react";

import { GrRotateLeft, GrRotateRight } from 'react-icons/gr'
import { CgMergeHorizontal, CgMergeVertical } from 'react-icons/cg'

const Controls = () => {

    const [state, setState] = useState(100)

  return (
    <div className="flex flex-col justify-center items-center w-[40%] h-full border-2 border-slate-300 rounded-md ">
      <div className=" w-[90%] h-[90%]">
        <div className="w-full h-2/3">
            <div className="pb-1 text-xl">
                <h1>Filters</h1>
            </div>
            <div className="grid grid-cols-2 gap-1 w-full h-24 mt-1">
                <Button text='Brightness' font={'text-slate-50'} bg={'bg-[#6B7FD7]'}/>
                <Button text='Saturation' font={'text-slate-400'} bg={''}/>
                <Button text='Inversion' font={'text-slate-400'} bg={''}/>
                <Button text='Grayscale' font={'text-slate-400'} bg={''}/>
            </div>
            <div className="w-full h-14 mt-3">
                <div className="flex justify-between text-gray-500">
                    <p>Brightness</p>
                    <p>{state}%</p>
                </div>
                <div className="w-full">
                    <input className="w-full h-[5px]" 
                    onChange={(e) => setState(e.target.value)}
                    type="range"
                    value={state}
                    min="0" 
                    max="200" />
                </div>
            </div>
        </div>
        <div className=" w-full h-1/3">
            <div className="text-xl">
                <h1> Rotate & Flip</h1>
            </div>
            <div className="grid grid-cols-4 gap-2 h-12 text-gray-500 mt-2">
                <Button text={<GrRotateLeft/>}/>
                <Button text={<GrRotateRight/>}/>
                <Button text={<CgMergeHorizontal/>}/>
                <Button text={<CgMergeVertical/>}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
