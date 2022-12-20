import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import metaReducer from "./slices/metaSlice"
import serverReducer from "./slices/serverSlice"
import userReducer from "./slices/userSlice"

const store = configureStore({
    reducer: {
        metamask: metaReducer,
        server: serverReducer,
        auth: authReducer,
        user: userReducer,
    }
})

export default store