import { rotateLeft, rotateRight, toTurnX, toTurnY } from '../features/rotateflip/rotateflipSlice'
import { useDispatch, useSelector } from 'react-redux'

const rotatefilpAction = () => {
    const values = useSelector(state => state.rotate)
    const { rotation, orientationX, orientationY } = values
    const dispatch = useDispatch()

    const rotationToLeft = () => {
        dispatch(rotateLeft(rotation - 90))
    }

    const rotationToRight = () => {
        dispatch(rotateRight(rotation + 90))
    }

    const turnX = () => {
        dispatch(toTurnX(orientationX*(-1)))
    }

    const turnY = () => {
        dispatch(toTurnY(orientationY*(-1)))
    }

    return{
        rotationToLeft,
        rotationToRight,
        turnX,
        turnY
    }
}

export default rotatefilpAction