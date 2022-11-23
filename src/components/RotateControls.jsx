import Button from "./Button";
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr'
import { CgMergeHorizontal, CgMergeVertical } from 'react-icons/cg'
import rotatefilpAction from "../redux/actions/rotateflipAction";

const RotateControls = () => {

    const { rotationToLeft, rotationToRight, turnX, turnY } = rotatefilpAction()
  return (
    <div className=" w-full h-1/3">
      <div className="text-xl">
        <h1> Rotate & Flip</h1>
      </div>
      <div className="grid grid-cols-4 gap-2 h-12 text-gray-500 mt-2">
        <Button click={() => rotationToLeft()} text={<GrRotateLeft />} />
        <Button click={() => rotationToRight()} text={<GrRotateRight />} />
        <Button click={() => turnX()} text={<CgMergeHorizontal />} />
        <Button click={() => turnY()} text={<CgMergeVertical />} />
      </div>
    </div>
  );
};


export default RotateControls