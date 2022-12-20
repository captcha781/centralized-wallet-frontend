import { toast } from "react-toastify"
import axios from "axios"
import { initialize } from "../redux/slices/serverSlice"

const fetchServerInfo = async (dispatch) => {
    try {
        const response = await axios({
            method: "get",
            url: "/getServerInfo",
        })
        const { success, result, message } = response.data
        if (!success) {
            toast(message, { type: "error" })
        }
        await dispatch(initialize(result))

    } catch (error) {
        toast(error.message, { type: "error" })
    }
}

export default fetchServerInfo