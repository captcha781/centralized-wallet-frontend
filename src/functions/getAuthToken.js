const getAuthToken = () => {
    return localStorage.getItem("auth_token")
}

export default getAuthToken