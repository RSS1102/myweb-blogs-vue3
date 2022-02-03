import { createRouter, createMemoryHistory, RouteRecordRaw, createWebHashHistory, createWebHistory } from "vue-router"
import Menus from '../router/menu.js'
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式
import Index from '../views/index.vue'
// import Index from '../views/login/LoginForm.vue'
//import Index from '../views/login/Login.vue'
//import Index from '../components/loading/LoadingIn.vue'
//import Index from '../views/login/LoginWx.vue'

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home/index',
        component: Index,
        children: [
            ...Menus
        ]
    },
]
const router = createRouter({
    // createWebHashHistory
    history: createWebHistory(),
    routes: routers
})

export default router