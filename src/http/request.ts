import axios, { AxiosRequestConfig } from "axios";
import router from '../router/index';

const conifg = {
    // 基础url前缀
    baseURL: 'https://www.fastmock.site/mock/08a1c38aec889a9ff18e4fae7345168c/ts',
    // 请求头信息
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    // 设置超时时间
    timeout: 1000,
    // 携带凭证
    withCredentials: false

};

export default function $axios(options: AxiosRequestConfig<any>) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: conifg.baseURL,
            headers: conifg.headers,
            timeout: conifg.timeout,
            withCredentials: conifg.withCredentials
        });
        // 添加请求拦截器
        instance.interceptors.request.use(
            conifg => {
                // let token=Cookies.get('token')
                // if (token) {
                //     conifg.headers.token = token
                // }else{
                // router.push('/')
                // }
                // 请求开始的时候可以结合 vuex 开启全屏 loading 动画
                // console.log(store.state.loading)
                return conifg
            },
            error => {
                // 请求错误
                console.log('request', error)
                // 1、超时判断
                if (error.code === "ECONNABORTED" && error.message.indexOf('tiemout') !== -1) {
                    console.log('请求超时')
                };
                //、重定向错误页面
                const errorInfo = error.respones
                console.log(errorInfo)
                if (errorInfo) {
                    // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
                    error = errorInfo.data
                    //状态码 404 403 500 ...
                    const errorStatus = errorInfo.status
                    router.push({
                        path: `/error/${errorStatus}`
                    })
                }

            }),
            // 添加响应拦截器
            instance.interceptors.response.use(
                response => {
                    let data: any;
                    // IE9时response.data是undefined，
                    // 因此需要使用response.request.responseText(Stringify后的字符串)
                    if (response.data == undefined) {
                        data.JSON.parse(response.request.responseText)
                    } else {
                        data = response.data
                    }
                    return data
                },
                err => {
                    if (err & err.response) {
                        switch (err.response.status) {
                            case 400:
                                err.message = '请求错误'
                                break
                            case 401:
                                err.message = '未授权，请登录'
                                break
                            case 403:
                                err.message = '拒绝访问'
                                break
                            case 404:
                                err.message = `请求地址出错: ${err.response.config.url}`
                                break
                            case 408:
                                err.message = '请求超时'
                                break
                            case 500:
                                err.message = '服务器内部错误'
                                break
                            case 501:
                                err.message = '服务未实现'
                                break
                            case 502:
                                err.message = '网关错误'
                                break
                            case 503:
                                err.message = '服务不可用'
                                break
                            case 504:
                                err.message = '网关超时'
                                break
                            case 505:
                                err.message = 'HTTP版本不受支持'
                                break
                            default:
                                err.message = '请重试'
                        }
                    }
                    // console.error(err)
                    return Promise.reject(err) // 返回接口返回的错误信息
                },

            )

        // 请求处理
        instance(options).then(res => {
            resolve(res)
            return false
        }).catch(error => {
            reject(error)
        })
    })
}