import { configureStore } from "@reduxjs/toolkit"; 
import { editorSlice } from "./features/editor/editorSlice";
import { progressbarSlice } from "./features/progressBar/progressbarSlice";

const store = configureStore({
    reducer: {
        editor: editorSlice.reducer,
        progressbar: progressbarSlice.reducer
    }
})

export default store