import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost3000/burger/orders"
})

export default instance;