const removeAuthToken = () => {
    return localStorage.removeItem('auth_token')
}

export default removeAuthToken