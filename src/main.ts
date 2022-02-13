import { createApp, getCurrentInstance, ComponentInternalInstance } from 'vue'
import App from './app.vue'
import router from './router'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font/font.css'
createApp(App).use(Element).use(router).mount('#app')
