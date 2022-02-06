const Menurouter = [
    // home
    {
        path: '/home/index',
        Name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    // blogs
    {
        path: '/blogs/index',
        Name: 'blogs',
        component: () => import('../views/blogs/index.vue'),
    },
    //product
    {
        path: '/product/index',
        Name: 'blogs',
        component: () => import('../views/product/index.vue'),
    },

]
export default Menurouter