import jwt from "jwt-decode"
import { initializeAuth } from "../redux/slices/authSlice"
import removeAuthToken from "./logout/removeAuthToken"
import revokeAuthorization from "./logout/revokeAuthorization"

const decodeJWT = (token, dispatch) => {
    try {
        token = token.split(" ")[1]
        let decoded = jwt(token)

        if (decoded) {
            dispatch(initializeAuth({
                auth: true,
                userId: decoded.userId
            }))
        }
    } catch (error) {
        removeAuthToken()
        revokeAuthorization()
        dispatch(initializeAuth({
            auth: false,
        }))
    }
}

export default decodeJWT