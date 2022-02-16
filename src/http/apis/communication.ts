import axios from '../request'

/**
 * 留言
 */


export const msglist = () => {
    return axios({
        url: '/msglist',
        method: 'get',
    })
}
