import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-plus'
createApp(App).use(Element).use(router).mount('#app')
