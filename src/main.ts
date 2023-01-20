import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { routerInstance } from './modules/router'
import App from './App.vue'
import 'uno.css'
import './style.css'

const pinia = createPinia()
const {router} = routerInstance()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
