import axios from 'axios';
import { URL } from '../Server/Server';
import { token } from '../common/common';

const client = axios.create({
    baseURL: URL
  });
  client.interceptors.request.use(
  (config) => {
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    console.log("response",response)
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
