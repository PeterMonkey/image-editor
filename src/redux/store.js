import { configureStore } from "@reduxjs/toolkit"; 
import { editorSlice } from "./features/editor/editorSlice";
import { progressbarSlice } from "./features/progressBar/progressbarSlice";
import { rotateflipSlice } from "./features/rotateflip/rotateflipSlice";

const store = configureStore({
    reducer: {
        editor: editorSlice.reducer,
        progressbar: progressbarSlice.reducer,
        rotate: rotateflipSlice.reducer
    }
})

export default store