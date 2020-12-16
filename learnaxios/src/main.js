import { createApp } from 'vue'
import App from './App.vue'

import Axios from "axios";

createApp(App).mount('#app')
/*
Axios({
    url: 'http://123.207.32.32:8000/home/multidata'
}).then(res =>{
        console.log(res);
    }
)
//Axios的all分发用来并发请求，并把结果集返回成数组
Axios.all([
    Axios({
        url: 'http://123.207.32.32:8000/home/multidata'
    }),
    Axios({
        url: 'http://123.207.32.32:8000/home/multidata'
    })
]).then(results =>{
    console.log(results);
})*/

//Axios可以使用create方法创造多个实例，用来配置多个不同的服务请求的全局配置
const  instance1 = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})
//一个实例就对应一个axios对象
instance1({
    url: '/home/multidata'
}).then(res =>{
    console.log(res);
})