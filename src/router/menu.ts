const Menurouter = [
    {
        path: '/home/index',
        Name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/blogs/index',
        Name: 'blogs',
        component: () => import('../views/blogs/index.vue'),
    },

]
export default Menurouter