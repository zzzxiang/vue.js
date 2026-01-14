import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Vant from 'vant'
import { Button } from 'vant';
createApp(App).mount('#app')
createApp(App).use(ElementPlus)
createApp(App).use(Vant)
createApp(App).use(Button);