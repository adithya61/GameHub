import axios, { AxiosRequestConfig } from "axios";
export interface fetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const client = axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "1a841022ad9f46a58145e4237fb0facf"
    }
});
class APIClient <T>{

    constructor(public endpoint: string) {}


    get = (requestConfig?: AxiosRequestConfig) => client.get<fetchResponse<T>>(this.endpoint, 
        {...requestConfig})
    .then(res => res.data);

}

export default APIClient;
