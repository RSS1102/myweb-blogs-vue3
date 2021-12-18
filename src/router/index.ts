import { createRouter, createMemoryHistory, RouteRecordRaw, createWebHashHistory, createWebHistory } from "vue-router"
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式
// import HomeLoadinVue from '../components/home/HomeLoading.vue';
import LoadingIn from '../views/LoadingIn.vue'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'

const routers: RouteRecordRaw[] = [

    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    }, {
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