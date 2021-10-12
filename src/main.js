import Vue from 'vue'
import App from './App.vue'
//引入行为滑块
import store from "./store";
//引入 charts
import echarts from 'echarts'
//路由
import router from './router'
//element UI
import './plugins/element.js'

import'../src/assets/css/App.css';//引入全局样式
//连接后端
import axios from "axios"
Vue.prototype.$http=axios.create({
  baseURL:' http://localhost:3001/api'
})
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
