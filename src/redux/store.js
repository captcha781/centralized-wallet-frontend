import { configureStore } from "@reduxjs/toolkit"
import metaReducer from "./slices/metaSlice"
import serverReducer from "./slices/serverSlice"

const store = configureStore({
    reducer: {
        metamask: metaReducer,
        server: serverReducer
    }
})

export default store