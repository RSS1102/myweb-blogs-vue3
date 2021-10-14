import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeLoading  from "../components/pages/HomeLoading";
import Login from "../components/pages/Login";
import Index from "../components/pages/index";
import Register from "../components/login/Register";
import ManageMenu from "../components/pages/ManageMenu";

Vue.use(VueRouter)

//路由守卫

const routes = [
    //redirect这是一个默认路由
    {path: '/', redirect: '/welcome',},
    {path: '/welcome',name:'homeLoading', component: HomeLoading , meta: {title: '欢迎您的到来',}},
    {path: '/login',name:'login', component: Login, meta: {title: '首页',}},
    {path: '/index', name:'index', component: Index, meta: {title: '阿力的小破站',}},
    {path: '/register',name:'Register', component: Register, meta: {title: '账号注册',}},
    {path: '/manage-menu',name:'ManageMenu', component:  ManageMenu, meta: {title: '后台管理',},
        children: [
            { path: '/from1', name: "from1", meta: { title: 'from1' }, component: () => import('../components/menuform/From1') },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
全局路由守卫
router.beforeEach((to, from, next) => {
    const nextRoute = ['index'] // 需要登录后才能访问的页面
    let isUsername =localStorage.getItem('username')// 判断是否登录，这里使用sessionStorage进行存储登录状态
    if (nextRoute.indexOf(to.name) >= 0) { // 检测即将访问的页面是否需要登录
        if (!isUsername) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
           router.push('/login')
            // 消息提示
              alert("您还没有登录哦!")
        }else {
            next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
        }
    }else {
        next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
    }
});

export default router
