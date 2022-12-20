import axios from "axios";

const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export default setAuthorization