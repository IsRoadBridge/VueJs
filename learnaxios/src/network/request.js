import Axios from "axios";

export  default  function request(config) {
     const instance = Axios.create({
         baseURL: 'http://123.207.32.32:8000',
         timeout: 5000
     })
    //return instance(config)
    //axios请求拦截器，用于在拦截请求，在请求上加token之类的操作可以在这做
    instance.interceptors.request.use(config =>{
        console.log(config);
        return config
    },err =>{
        return Promise.reject(err)
    })
    //axios响应拦截器，用于返回请求错误信息
    instance.interceptors.response.use(res =>{
        return res
    },err =>{
        return Promise.reject(error.response.status)
    })
}