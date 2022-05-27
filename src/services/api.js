import axios from "axios";

export const key = "40464c99fca74d0157767690c240679b9657dc23";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}` 
    }
})

export default api;