import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
import './assets/css/index.css'

createApp(App).use(createPinia()).use(router).mount('#app')
