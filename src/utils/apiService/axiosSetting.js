import axios from 'axios';
import {message} from 'antd';

// set up the axios interceptor in this file
const instance = axios.create({
    baseURL: 'http://localhost:8413/',
    withCredentials: false,
    timeout: 3000
});

//Sent request with token if needed in the future
instance.interceptors.request.use((config) =>{
    // const token = localStorage.getItem('token');
    // if (token) {
    //     config.headers['token'] = token;
    // }

    return config;
}, (err)=>{
    console.log(err);
    return Promise.reject(err);
});

instance.interceptors.response.use((response)=>{
    return response;
}, (err)=>{
    //Handle network error(if no status)
    if (!err.status) {return message.warn('NetWork Error, Please Refresh Again!');}

    //Handle API response, list the main possible response code here
    if (err.response.status === 404) {return message.warn('404 Not Found');}
    else if (err.response.status === 500) {return message.warn('500 Internal Server Error');}

    return Promise.reject(err);
});
// set up http method here
class http {
    static async get(url, params){
        return await instance.get(url, {params});
    }

}

export default http;