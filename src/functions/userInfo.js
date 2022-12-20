import { initializeAuth } from "../redux/slices/authSlice"
import { initializeUser } from "../redux/slices/userSlice"
import { toast } from "react-toastify"
import axios from "axios"

export const userInfo = async (dispatch) => {
    try {
        let response = await axios({
            method: "get",
            url: "/api/getProfile"
        })

        initializeAuth({
            auth: true,
            userId: response.data.user._id
        })
        initializeUser(response.data.user)

    } catch (error) {
        toast(error.message, { type: "error" })
    }
}