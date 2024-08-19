import axios from "axios";

axios.interceptors.request.use((config) =>{
    config.baseURL = 'http://81.31.247.123:8000/'

    return config
})

export {axios as client}