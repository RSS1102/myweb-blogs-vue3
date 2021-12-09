# 一，项目初始化

### vite-:vue3+TS+Less+element

``` c
//保持最新版
npm install vite@next
npm install vue-router@next 
npm install element-plus
npm install less 
```

1. ## vue-router

   ``` tsx
   //vue-router 配置
   import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router"
   //createRouter 定义了存放路由的数组
   //createMemoryHistory 定义了路由模式
   //RouteRecordRaw 定义了路由格式
   import Home from '../components/HelloWorld.vue'
   const routers: RouteRecordRaw[] = [
       {
           path: '/',
           redirect: '/home'
       }, {
           path: '/home',
           component: Home
       }
   ]
   const router = createRouter({
       history: createMemoryHistory(),
       routes: routers
   })
   
   export default router
   ```

2. ## element-plus

   ``` tsx
   import Element from 'element-plus'
   createApp(App).use(Element).use(router).mount('#app')
   ```

## 二，项目开始：

## 页面：





## 组件：

1. 完成了首页加载的Loading效果。
2. 完成了登陆的组件。
