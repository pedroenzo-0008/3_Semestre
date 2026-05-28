import axio from "axios"

const apiPort = "3000"
const localApi = `http://localhost:${apiPort}`
const externalApi = null
const api = axio.create({
    baseURL: localApi
})

export default api