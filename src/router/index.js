import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/components/pages/login.vue"
import home from "@/components/pages/Home.vue"
import contact from "@/components/repeat/Contact";
import Register from "@/components/login/Register";
import SlideVerify from "@/components/repeat/SlideVerify";


Vue.use(VueRouter)

const routes = [
    //redirect这是一个默认路由
    {path: '/', redirect: '/login'  },
    {path: '/login', component: login,meta: {title: '首页',}},
    {path: '/index', component: home , meta: {title: '阿力的小破站',}},
    {path: '/contact', component: contact, meta: {title: '联系方式',}},
    {path: '/register', component: Register, meta: {title: '账号注册',}},
    {path: '/slideVerify', component: SlideVerify, meta: {title: '验证',}},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
