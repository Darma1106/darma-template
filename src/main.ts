import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createGlobalConfig } from '@idux/components/config'
import router from './router/index'
import App from './App.vue'
import './assets/css/index.css'
import '@idux/components/default.min.css'

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源依旧被正确放入到 `public/idux-icons` 目录中
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text())
}

const globalConfig = createGlobalConfig({
  // 默认为中文，可以打开注释设置为其他语言
  // locale: enUS,
  icon: { loadIconDynamically }
})

createApp(App).use(createPinia()).use(router).use(globalConfig).mount('#app')
