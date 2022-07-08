import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"
import Menus from '../router/menu.js'
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式
import Index from '../views/index.vue'
import { saveViewPage } from "@/http/apis/monitor";

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home/index',
        name: 'index',
        component: Index,
        children: [
            ...Menus
        ]
    },
]
const router = createRouter({
    // createWebHashHistory
    // createWebHistory
    history: createWebHashHistory(),
    routes: routers
})
/**
 * 1.每个一级导航都有一个pvNums属性，用来记录被访问次数
 * 2.`name: 'blogs',`下每个子路由都有一个pvNums属性，用来记录被访问次数
 */
router.beforeEach((to, from) => {
    console.log("to", to)
    console.log("from", from)
    let pvParams = {
        name: to.name as string,
        path: to.path,
        paramsKey: to.params?.id as string,
        vitstDate: new Date(),
    }
    console.log(pvParams)
    saveViewPage(pvParams)
    return true
})

export default router