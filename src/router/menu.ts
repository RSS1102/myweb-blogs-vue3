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
        Name: 'product',
        component: () => import('../views/product/index.vue'),
    },
    //communication
    {
        path: '/communication/index',
        Name: 'communication',
        component: () => import('../views/communication/index.vue'),
    },

]
export default Menurouter