import axios from "axios";

let userName = 'manager'
let password = '2kpN639B&%!mgIH'
export const api = axios.create({
    baseURL: 'http://provantagens.pmt.pi.gov.br/api',  
    auth: {
        username: userName,
        password
    }
    
})