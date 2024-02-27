import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon, icons } from '@/modules/FAIcons';
import CanvasJSChart from '@canvasjs/vue-charts';


icons

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)
app.use(CanvasJSChart)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
