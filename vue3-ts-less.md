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

## 二，一些笔记

1. `animation`：（动画）

   ```css
   //动画 ：  动画名称 花费时间 运动曲线 何时开始 播放次数 是否反方向 
   animation: name duration timing-function delay iteration-count direction;
   
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

   

2. box-shadow(阴影)

   ``` css
   /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
   
   /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
   box-shadow: inset 5em 1em gold;
   ```

   3. transform（翻转）



---
### 三遇到的一些问题：

1. ##### Vite热更新不起作用

    - router 路由中名称 和文件夹(目录), 文件名需要保证大小写一致。

2. 