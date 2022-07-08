const Menurouter = [
  // home
  {
    path: '/home/index',
    name: 'home',
    component: () => import('../views/mainbench/home/index.vue'),
  },
  // blogs
  {
    path: '/blogs/index/',
    redirect: '/blogs/index/0',
  },
  {
    path: '/blogs/index/:id',
    name: 'blogs',
    component: () => import('../views/mainbench/blogs/index.vue'),
  },
  //product
  {
    path: '/product/index',
    name: 'product',
    component: () => import('../views/mainbench/product/index.vue'),
  },
  //communication
  {
    path: '/communication/index',
    name: 'communication',
    component: () => import('../views/mainbench/communication/index.vue'),
  },
  //demo
  {
    path: '/demo/index',
    name: 'demo',
    component: () => import('../views/mainbench/demo/index.vue'),
  },

]
export default Menurouter
