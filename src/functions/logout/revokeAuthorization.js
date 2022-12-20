import axios from "axios"

const revokeAuthorization = () => {
    delete axios.defaults.headers.common["Authorization"];
}

export default revokeAuthorization