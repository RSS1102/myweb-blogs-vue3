### 三遇到的一些问题：

1. ##### Vite热更新不起作用

   - router 路由中名称 和文件夹(目录), 文件名需要保证大小写一致。

2. **多行文本省略号：**字母不能正常换行

   添加：**数字字母自动换行：**word-break: break-all;

``` css
//单行文本省略号：
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

//多行文本省略号：
display: -webkit-box;
-webkit-line-clamp: 8;
-webkit-box-orient: vertical;
overflow: hidden;
```

3. ##### 跨域问题：

   - vite.config.ts文件：

     ``` tsx
     server: {
         proxy: {
           // '/api': 'http://localhost:3003'
           '/api': {
             target: 'http://localhost:3003/api/',
             changeOrigin: true,
             rewrite: path => path.replace(/^\/api/, ''),
           },
         },
       }
     ```

   - axios配置：

     ```tsx
     const conifg = {
         // 基础url前缀(这里地址只写/api)
         baseURL: '/api',
         // 请求头信息
         headers: { 'Content-Type': 'application/json;charset=UTF-8' },
         // 设置超时时间
         timeout: 1000,
         // 携带凭证
         withCredentials: false
     
     };
     ```

4. 穿透覆盖样式 :v-deep

      ```css
      :v-deep(.el-container),
      :v-deep(.el-header),
      :v-deep(.el-main),
      :v-deep(.el-footer) {
        margin: 0;
        padding: 0;
      }
      ```

5. 

