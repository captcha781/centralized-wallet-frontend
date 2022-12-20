import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serverAddress: "",
    serverBalance: "",
    network: ""
}

const serverSlice = createSlice({
    name: "server",
    initialState,
    reducers: {
        initialize: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { initialize } = serverSlice.actions
export default serverSlice.reducer