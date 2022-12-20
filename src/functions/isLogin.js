const isLogin = () => {
    let token = localStorage.getItem("auth_token")
    if(!token || token === undefined || token === null){
        return false
    } else if(token){
        return true
    }
}

export default isLogin