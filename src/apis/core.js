import axios from "axios"

const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_TMDB_BASEURL,
    params : {
        api_key : process.env.REACT_APP_TMDB_API_KEY
    }
})

export default axiosInstance