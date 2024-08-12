import axiosInstance from "./core"


const getMovieList = async () => {
    const res = await axiosInstance.get()
    return res
}

export const Api = {
    getMovieList
}
