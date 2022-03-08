import axios from '../request'

/**
 * menu
 */


export const getProduct = <T>() => {
    return axios({
        url: '/product/getgithublist',
        method: 'get',
    })
}
export const getBlogs = <T>() => {
    return axios({
        url: '/blogs/getmenu',
        method: 'get',
    })
}