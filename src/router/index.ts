import { createRouter, createMemoryHistory, RouteRecordRaw, createWebHashHistory, createWebHistory } from "vue-router"
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式

// import Index from '../views/Index.vue'
import Index from '../views/login/LoginForm.vue'
const routers: RouteRecordRaw[] = [

    {
        path: '/',
        component: Index
    },
    {
        path: '/index/',
        component: Index


    }

]
const router = createRouter({
    // createWebHashHistory
    history: createWebHistory(),
    routes: routers
})

export default router