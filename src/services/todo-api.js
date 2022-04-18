import axios from "axios"
const url = 'http://localhost:3001/todos/'

export function getToDos(){
    const response = axios.get(url)
    return response 
}

export function showOne(id){
    const response = axios.get(url+id)
    return response
}

export function deleteOne(id){
    const response = axios.delete(url+id)
    return response
}

export function createOne(add){
    const response = axios.post(url, add)
    return response 
}

export function editOne(id, edited){
    const response = axios.put(url+id, edited)
    return response
}