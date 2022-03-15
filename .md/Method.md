# 一，vite:vue3+TS+Less+element

一， 项目配置

1. 项目初始化

``` c
//保持最新版
npm install vite@next
npm install vue-router@next 
npm install element-plus
npm install less 
```

2. vue-router

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


//子路由文件分割
index.ts
  {
        path: '/',
        redirect: '/home/index',
        component: Index,
        children: [
            ...Menus
        ]
    },
menu.ts
const Menurouter = [
    // home
    {
        path: '/home/index',
        Name: 'home',
        component: () => import('../views/mainbench/home/index.vue'),
    },
    // blogs
    {
        path: '/blogs/index',
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
```

3. element-plus

``` tsx
import Element from 'element-plus'
createApp(App).use(Element).use(router).mount('#app')
```

4. 怎么调用axios

``` js
import { test } from '../../http/apis/user'
const onClick = (): any => {
    test().then(res => {
        console.log(res)
    })
}
```



## 二，关于vue3的笔记

1. ##### el-menu：

   - 设置default-active,解决页面刷新后menu处于未选中状态：

``` tsx
  <el-menu mode="horizontal" :default-active="defRouters" background-color="  #248ac533" router>
     
const route = useRoute();
let defRouters = computed(() => {
  return route.path
})
```

2. #### **PropType**

   - ##### 定义复杂变量(如：array，object，function等)

   - array


   ```tsx
   import { PropType} from 'vue';
   interface progArrType {
       Width: Number;
       Text: String;
   }
   
   const progArr = defineProps({
       progArr: {
           type: Array as PropType<progArrType[]>,
           required: true,
       },
   })
   
   //意义是：定义了数组的每一项含有什么数据类型
   ```

3. **TS:**Does anyone know the difference between `String` and `string` in TypeScript?

   - https://stackoverflow.com/questions/14727044/what-is-the-difference-between-types-string-and-string.

4. ##### toRaw

   返回 [`reactive`](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) 或 [`readonly`](https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly) 代理的原始对象。这是一个“逃生舱”，可用于临时读取数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改。**不**建议保留对原始对象的持久引用。请谨慎使用。

   ```js
   const foo = {}
   const reactiveFoo = reactive(foo)
   console.log(toRaw(reactiveFoo) === foo) // true
   ```





## 三，一些笔记

1. `animation`：（动画）

   ```css
   //动画 ：  动画名称 花费时间 运动曲线 何时开始 播放次数 是否反方向 
   animation: name duration timing-function delay iteration-count direction(alternate);
   
   // 使用名为三次贝塞尔（Cubic Bezier）函数的数学函数，来生成速度曲线。您能够在该函数中使用自己的值，也可以预定义的值：value(见下表格)
   animation-timing-function: value;
   //何时开始:可为正负，正值等待多少时间之后开始动画，负值则表示跳过前面的动画时间/过程(第一次)。
   animation-delay: time; 
   //n定义动画播放次数的数值。|infinite规定动画应该无限次播放。
   animation-iteration-count: n|infinite;
   //属性规定动画在播放之前或之后，其动画效果是否可见
   animation-fill-mode : none | forwards | backwards | both;
   ```

   animation-timing-function(速度曲线)

   |              值               |                             描述                             |
   | :---------------------------: | :----------------------------------------------------------: |
   |            linear             |                 动画从头到尾的速度是相同的。                 |
   |             ease              |        默认。动画以低速开始，然后加快，在结束前变慢。        |
   |            ease-in            |                       动画以低速开始。                       |
   |           ease-out            |                       动画以低速结束。                       |
   |          ease-in-out          |                    动画以低速开始和结束。                    |
   | cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。 |

   animation-fill-mode(属性规定动画在播放之前或之后，其动画效果是否可见)

   | 值        | 描述                                                         |
   | :-------- | :----------------------------------------------------------- |
   | none      | 不改变默认行为。                                             |
   | forwards  | 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。 |
   | backwards | 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。 |
   | both      | 向前和向后填充模式都被应用。                                 |

   ```css
   .to-photo:hover {
       animation: to-photo-hover 1s;
       animation-fill-mode: forwards;
   }
   @keyframes to-photo-hover {
       0% {
       }
       100% {
           border-radius: 22%;
           box-shadow: 15px 20px 25px rgba(235, 160, 160, 0.6),
               -15px -20px 25px rgba(218, 138, 138, 0.6),
               15px -20px 25px rgba(235, 160, 160, 0.6),
               -15px 20px 25px rgba(218, 138, 138, 0.6);
       }
   }
   ```

   

2. box-shadow(阴影)

   ``` css
   /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
   
   /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
   box-shadow: inset 5em 1em gold;
   ```

3. transform（翻转）

   

4. 
