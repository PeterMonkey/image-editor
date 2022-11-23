import { configureStore } from "@reduxjs/toolkit"; 
import { editorSlice } from "./features/editor/editorSlice";
import { progressbarSlice } from "./features/progressBar/progressbarSlice";
import { rotateflipSlice } from "./features/rotateflip/rotateflipSlice";
import { imageSlice } from "./features/imageState/imageSlice";

const store = configureStore({
    reducer: {
        editor: editorSlice.reducer,
        progressbar: progressbarSlice.reducer,
        rotate: rotateflipSlice.reducer,
        image: imageSlice.reducer
    }
})

export default store