import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "1a841022ad9f46a58145e4237fb0facf"
    }
})