const Menurouter = [
    // home
    {
        path: '/home/index',
        Name: 'home',
        component: () => import('../views/mainpro/home/index.vue'),
    },
    // blogs
    {
        path: '/blogs/index',
        Name: 'blogs',
        component: () => import('../views/mainpro/blogs/index.vue'),
    },
    //product
    {
        path: '/product/index',
        Name: 'product',
        component: () => import('../views/mainpro/product/index.vue'),
    },
    //communication
    {
        path: '/communication/index',
        Name: 'communication',
        component: () => import('../views/mainpro/communication/index.vue'),
    },
    //demo
    {
        path: '/demo/index',
        Name: 'demo',
        component: () => import('../views/mainpro/demo/index.vue'),
    },

]
export default Menurouter