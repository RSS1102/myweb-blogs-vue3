import axios from '../request'

/**
 * 获取github信息
 */

export const getProduct = () => {
    return axios({
        url: '/product/getgithublist',
        method: 'get',
    })
}