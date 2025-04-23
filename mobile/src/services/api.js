import axios from "axios";

const API = axios.create({
    baseURL: 'http://10.19.14.121:8000/api'
})

export default API