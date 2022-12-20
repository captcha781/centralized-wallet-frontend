import axios from "axios"
import { toast } from "react-toastify"

const postSignup = async (data) => {
    try {
        let response = await axios({
            method: "post",
            url: "/api/signup",
            data
        })
        return response.data
    } catch (error) {
        toast(error.message, { type: "error" })
    }
}

export default postSignup