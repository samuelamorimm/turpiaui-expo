import axios from "axios";

const API = axios.create({
    baseURL: 'http://172.25.176.1:8000/api'
})

export default API