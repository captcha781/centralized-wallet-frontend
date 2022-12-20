import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: false,
    userId: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        initializeAuth: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { initializeAuth } = authSlice.actions
export default authSlice.reducer