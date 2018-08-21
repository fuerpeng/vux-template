import axios from 'axios';
import {assembleParam} from '../utils/auth'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 20000,
  headers: {
    post:{
      "Content-Type":"application/json"
    }
  }
});

function isJson(obj) {
  let isjson = typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
  return isjson;
}

//request拦截器
service.interceptors.request.use(config => {
  config.data = assembleParam(config.url.replace(config.baseURL, ''), config.data);
  return config;
}, error => {
  console.log('request err:' + error);// for debug
  Promise.reject(error);
});

//response拦截器
service.interceptors.response.use(
  response => {
    if (!isJson(response.data)) {
      return JSON.parse(response.data)
    }
    return response.data
  },
  error => {
    console.log('request err:' + error)
    return Promise.reject(error);
  }
);

export default service;
