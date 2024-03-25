import axios from "axios";
const baseUrl = 'https://www.bibliotecavideo.somee.com/api/Categoria/Lista'

const getAll = () => {
    return axios.get(baseUrl)
}

export default {getAll}