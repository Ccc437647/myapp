import axios from 'axios';
import adapter from 'axios-miniprogram-adapter';
import Taro from '@tarojs/taro'
import { baseURL } from '../config'

// 小程序环境,添加适配
const env = Taro.getEnv()
if (env === 'WEAPP') {
    axios.defaults.adapter = adapter;
}

// axios配置
const Axios = axios.create({
    baseURL: baseURL,
    timeout: 500,
    headers: {
    }
})

// 请求拦截
Axios.interceptors.request.use(async res => {
    let token
    if (res.method === 'post') {
        try {
            await Taro.getStorage({ key: 'token' })
        } catch (error) {
            token = ''
        }

        res.headers = Object.assign({
            'Content-Type': 'application/x-www-form-urlencoded;'
        }, res.headers);
    }
    res.headers = Object.assign({
        token
    }, res.headers);
    return res;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截
Axios.interceptors.response.use(res => {
    let { data: { code, message, result } } = res;
    let apiResult = {
        code, message, result
    }

    return apiResult
})

export default Axios