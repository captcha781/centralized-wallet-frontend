import { Navigate } from "react-router-dom";
import isLogin from "../functions/isLogin"

const ProtectedRoute = ({type, children}) => {

    if(type === "auth" && isLogin()){
        return <Navigate to={"/"} />
    } else if(type === "private" && !isLogin()) {
        return <Navigate to={"/signin"} />
    }
    return children
}

export default ProtectedRoute