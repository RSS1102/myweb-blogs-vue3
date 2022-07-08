import { pageViewTpye } from "@/types/monitor"
import axios from '../request'
/**
 * 记录页面pv记录
 */
export const saveViewPage = (data: pageViewTpye) => {
    return axios({
        url: '/monitorlogs/saveMonitor',
        method: 'post',
        data
    })
}
