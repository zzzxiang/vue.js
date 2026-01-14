import { createApp } from 'vue'
import App from './App.vue'
import B from './component/B.vue'
const app=createApp(App)
app.component('B',B)
app.mount('#app')
