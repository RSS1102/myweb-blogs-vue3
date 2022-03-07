import axios from '../request'

/**
 * 用户管理
 */

export const login = <T>(data: T) => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}
export const test = <T>() => {
    return axios({
        url: '/gettest',
        method: 'get',
    })
}
export const getBlogs = <T>() => {
    return axios({
        url: '/blogs/getmenu',
        method: 'get',
    })
}