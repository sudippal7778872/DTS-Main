import axios from "axios"


export function createPost(values){
    return axios.post('http://localhost:8000/location', values)
}