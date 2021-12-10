import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router"
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式
// import HomeLoadinVue from '../components/home/HomeLoading.vue';
import Home from '../views/Home.vue'
import Index from '../views/index.vue'

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/index',
        component: Index
    }

]
const router = createRouter({
    history: createMemoryHistory(),
    routes: routers
})

export default router