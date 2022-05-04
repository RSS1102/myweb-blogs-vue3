import axios from '../request'

/**
 * 获取blogs导航栏信息
 */

export const getBlogMenu = () => {
  return axios({
    url: '/blogs/getblogmenu',
    method: 'get',
  })
}
export const getBlogContent = (data: object) => {
  return axios({
    url: '/blogs/blogcontent',
    method: 'post',
    data
  })
}
