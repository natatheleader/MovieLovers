import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueSnip from 'vue-snip'

createApp(App).use(store).use(router).use(VueSnip).mount('#app')
