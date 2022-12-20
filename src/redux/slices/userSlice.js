import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id: "",
    name: "",
    address: "",
    balance: "",
    wallet: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initializeUser: (state, action) => {
            state = action.payload
        }
    }
})

export const { initializeUser } = userSlice.actions
export default userSlice.reducer