import { createApp, getCurrentInstance, ComponentInternalInstance } from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-plus'
import 'element-plus/dist/index.css'

import "./assets/index.js"
const app = createApp(App)
app.use(Element).use(router).mount('#app')
import { Loading } from '@element-plus/icons-vue'
app.component('loading', Loading)
