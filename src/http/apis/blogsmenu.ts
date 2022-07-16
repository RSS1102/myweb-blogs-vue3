import axios from '../request'

/**
 * 获取blogs导航栏信息
 */
 interface BlogContentType<T> {
  id: number;
  articleShow: boolean;
  blogContent: string;
  blogNav: string;
  blogTitle: string;
  createdAt: string;
  updatedAt: string;
  monitorlogs: Array<T>;
}
export const getBlogMenu = () => {
  return axios({
    url: '/blogs/getblogmenu',
    method: 'get',
  })
}
export const getBlogContent = (data: object):any => {
  return axios({
    url: '/blogs/getBlogContent',
    method: 'post',
    data
  })
}
