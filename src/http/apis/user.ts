import axios from "axios";

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