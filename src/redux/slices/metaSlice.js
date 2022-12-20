import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    account: "",
    balance: ""
}

const metaSlice = createSlice({
    name: 'metamask',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.account = action.payload
        },
        addBalance: (state, action) => {
            state.balance = action.payload
        },
    }
})

export const { addAddress, addBalance } = metaSlice.actions
export default metaSlice.reducer
