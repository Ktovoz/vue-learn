import { createApp } from 'vue'
import './style.css'
import './styles/carousel.css'
import './styles/background.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
