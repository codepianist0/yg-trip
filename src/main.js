import { createApp } from 'vue'
import App from './App.vue'

import router from "./router"
import pinia from "./stores"

import "./assets/css/index.css"
import "normalize.css"

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
