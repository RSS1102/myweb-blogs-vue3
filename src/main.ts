import { createApp, getCurrentInstance, ComponentInternalInstance } from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';


createApp(App).use(Element).use(router).mount('#app')
// const app = createApp(App)
// app.config.globalProperties.$axios = axios;



