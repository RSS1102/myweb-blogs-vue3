const Menurouter = [
  // home
  {
    path: '/home/index',
    Name: 'home',
    component: () => import('../views/mainbench/home/index.vue'),
  },
  // blogs
  {
    path: '/blogs/index/',
    redirect: '/blogs/index/0',
  },
  {
    path: '/blogs/index/:id',
    Name: 'blogs',
    component: () => import('../views/mainbench/blogs/index.vue'),
  },
  //product
  {
    path: '/product/index',
    Name: 'product',
    component: () => import('../views/mainbench/product/index.vue'),
  },
  //communication
  {
    path: '/communication/index',
    Name: 'communication',
    component: () => import('../views/mainbench/communication/index.vue'),
  },
  //demo
  {
    path: '/demo/index',
    Name: 'demo',
    component: () => import('../views/mainbench/demo/index.vue'),
  },

]
export default Menurouter
